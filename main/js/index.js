"use strict";
// const home: any = document.getElementById("btn_home"); // 0
// const skill: any = document.getElementById('btn_skill'); // -688
// const project: any = document.getElementById('btn_project'); // -1379
// const headerHegiht: number = 140;
// // 스크롤 이동시 좌표 확인하기
// home.addEventListener("click", () => {
//     console.log("1")
//     scrollTo({left:0, top:0})
//   });
// skill.addEventListener("click", () => {
//     scrollTo({left:0, top:-688})
// });
// project.addEventListener("click", () => {
//     scrollTo({left:0, top:-1379})
// });
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    console.log(' target ----', target);
    console.log(' link ====', link);
    console.log(" target.dataset", target.dataset);
    console.log('---', event.target.dataset.link);
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
