

const handleContentsNav = (e) => {
    const contentsNav = document.querySelector("#contents_nav");
    let contentsNavDisplay = contentsNav.style.display;
    if (contentsNavDisplay == 'block') {
        contentsNav.style.display = 'none';
    } else {
        fadeIn(contentsNav);
        contentsNav.style.display = 'block';
    }

    const titleBtn = e.target;
    if (titleBtn.classList.contains('on')) titleBtn.classList.remove('on')
    else titleBtn.classList.add('on');
}

const handleTabMenu = (target) => {

    const selectTabMenu = target
    const tabMenuAll = document.querySelectorAll('.tab_menu .menu');

    tabMenuAll.forEach(el => {
        el.classList.remove('active');
    });
    selectTabMenu.classList.add('active');

    document.querySelectorAll('.tab_notice').forEach(el => {
        el.classList.remove('active');
    });
    target.lastElementChild.classList.add('active');
}

/* 전체메뉴 스크립트 */
document.querySelector(".tit .btn").addEventListener("click", handleContentsNav);

/* 탭 메뉴 */
document.querySelectorAll('.tab_menu .menu').forEach((el, key, parent) => {
    el.addEventListener("click", (e) => {
        handleTabMenu(e.target.parentNode);
    });
    el.setAttribute('tabindex', '0');
    el.addEventListener("focus", (e) => {
        handleTabMenu(e.target);
    });
});

/* 레이어 팝업 */
document.querySelector('.layer').addEventListener("click", () => {
    document.getElementById('layer').style.display = 'block';
});
document.querySelector('#layer .close').addEventListener("click", () => {
    document.getElementById('layer').style.display = 'none';
});