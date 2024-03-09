const subNavs = document.querySelectorAll(`.subnav`);
const buttons = document.querySelectorAll(`.sidebar button`);
const resetSidebars = () => {
    subNavs.forEach((nav) => {
        nav.style.height = 0;
    });

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });
}

const handleClick = subNav => {
    resetSidebar();

    const subNavOuter = document.querySelector(`#${subNav}`);
};