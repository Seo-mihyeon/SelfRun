"use strict";
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    else {
        const scroll = document.querySelector(link);
        console.log(' scroll---- ', link.replace('#', ''));
        if (link.replace('#', '') == 'home') {
            scroll.scrollTo(0, 0);
        }
        else if (link.replace('#', '') == 'skill') {
            scroll.scrollTo(0, -688);
        }
        else if (link.replace('#', '') == 'project') {
            scroll.scrollTo(0, -1379);
        }
        // if ( s)
        scroll.scrollIntoView({ behavior: "smooth" }); //option으로 애니메이션을 smooth하게 만든다
    }
});
function zoomIn(event) {
    event.target.style.transform = "scale(1.2)"; //1.2배 확대
    event.target.style.zIndex = 1;
    event.target.style.transition = "all 0.5s"; // 속도
}
function zoomOut(event) {
    event.target.style.transform = "scale(1)";
    event.target.style.zIndex = 0;
    event.target.style.transition = "all 0.5s";
}
