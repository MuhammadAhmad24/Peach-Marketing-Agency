new Swiper(".partnerSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,
    speed: 800,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 5,
        }
    }
});

function animateBar(id, target) {
    const bar = document.getElementById(id);
    let width = 0;

    const interval = setInterval(() => {
        if (width >= target) {
            clearInterval(interval);
        } else {
            width++;
            bar.style.width = width + "%";
        }
    }, 15);
}

window.addEventListener("load", () => {
    animateBar("bar95", 95);
    animateBar("bar88", 88);
});