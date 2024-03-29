const subNavs = document.querySelectorAll(`.subnav`);
const buttons = document.querySelectorAll(`.sidebar button`);
const resetSidebars = () => {
  subNavs.forEach((nav) => {
    nav.style.height = 0;
  });

  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
};

const handleClick = (subNav) => {
  resetSidebar();

  const subNavOuter = document.querySelector(`#${subNav}`);
  const subNavInner = document.querySelector(`#${subNav} .subnav-inner`);

  const button = subNavOuter.previousElementSibling;

  if (subNavOuter.clientHeight > 0) {
    button.classList.remove("active");
    subNavOuter.style.height = 0;
  } else {
    button.classList.add("active");
    subNavOuter.style.height = `${subNavInner.clientHeight}px`;
  }
};
