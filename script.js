// prat1
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 0.1,
    centeredSlides: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
})


// prat3  
// let swiper = new Swiper(".mySwiper", {
//     slidesPerView: 5.25,
//     spaceBetween: 30,
//     freeMode: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// })


// ccrollBtn
const scrollBtn = document.getElementById("scrollBtn");

scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
};

window.onscroll = () => {
    let p = (scrollY /
        (document.body.scrollHeight - innerHeight)) * 100;
    scrollBtn.style.background =
        `conic-gradient(#3d474e ${p}%, #ddd ${p}% 100%)`;
};
