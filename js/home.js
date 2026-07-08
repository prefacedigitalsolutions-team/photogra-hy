

// preloder section start

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("loaded");

        setTimeout(() => {
            preloader.remove();
        }, 700);

    }, 500);

});


// preloder section End




// nav section start

const toggle = document.getElementById("pnavToggle");
const menu = document.getElementById("pnavMenu");
const dropdown = document.querySelector(".pnav__dropdown");
const dropdownBtn = document.querySelector(".pnav__dropdown > a");

/* MENU TOGGLE */
toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

/* ANIMATION */
toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");

    const bars = toggle.querySelectorAll("span");

    if (toggle.classList.contains("open")) {
        bars[0].style.transform = "rotate(45deg) translate(5px,5px)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "rotate(-45deg) translate(6px,-6px)";
    } else {
        bars[0].style.transform = "";
        bars[1].style.opacity = "";
        bars[2].style.transform = "";
    }
});

// mobile dropdown

dropdownBtn.addEventListener("click", (e) => {
    if (window.innerWidth <= 991) {
        e.preventDefault();
        dropdown.classList.toggle("active");
    }
});


// nav section End


// Banar slider home page start

document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector(".slider");
    if (!slider) return; 

    const slides = document.querySelector(".slides");
    const thumbs = document.querySelectorAll(".thumb");
    const originalSlides = document.querySelectorAll(".slide");

    if (!slides || originalSlides.length === 0) return;

    // Clone First & Last Slide
    const firstClone = originalSlides[0].cloneNode(true);
    const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);

    firstClone.id = "firstClone";
    lastClone.id = "lastClone";

    slides.appendChild(firstClone);
    slides.insertBefore(lastClone, originalSlides[0]);

    // Updated Slide List
    const slideItems = document.querySelectorAll(".slide");

    let current = 1;
    let autoSlide = null;
    let isTransitioning = false;

    slides.style.transform = `translateX(-${current * 100}%)`;

    function updateActiveSlide() {
        slideItems.forEach(slide => slide.classList.remove("active"));

        if (slideItems[current]) {
            void slideItems[current].offsetWidth;
            slideItems[current].classList.add("active");
        }
    }

    function updateThumbs() {
        let thumbIndex = current - 1;

        if (thumbIndex < 0) thumbIndex = thumbs.length - 1;
        if (thumbIndex >= thumbs.length) thumbIndex = 0;

        thumbs.forEach(thumb => thumb.classList.remove("active"));

        if (thumbs[thumbIndex]) {
            thumbs[thumbIndex].classList.add("active");
        }
    }

    function showSlide(index) {
        if (isTransitioning) return;

        isTransitioning = true;
        current = index;

        slides.style.transition = "transform .6s cubic-bezier(0.65,0,0.35,1)";
        slides.style.transform = `translateX(-${current * 100}%)`;

        updateThumbs();
        updateActiveSlide();

        setTimeout(() => {
            isTransitioning = false;
        }, 600);
    }

    slides.addEventListener("transitionend", () => {

        if (slideItems[current]?.id === "firstClone") {
            slides.style.transition = "none";
            current = 1;
            slides.style.transform = `translateX(-${current * 100}%)`;

            updateThumbs();
            updateActiveSlide();
        }

        if (slideItems[current]?.id === "lastClone") {
            slides.style.transition = "none";
            current = slideItems.length - 2;
            slides.style.transform = `translateX(-${current * 100}%)`;

            updateThumbs();
            updateActiveSlide();
        }

    });

    function nextSlide() {
        if (current >= slideItems.length - 1 || isTransitioning) return;
        showSlide(current + 1);
    }

    function prevSlide() {
        if (current <= 0 || isTransitioning) return;
        showSlide(current - 1);
    }

    function startAuto() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 3000);
    }

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            clearInterval(autoSlide);
        } else {
            startAuto();
        }
    });

    thumbs.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
            showSlide(index + 1);
            startAuto();
        });
    });

    let startX = 0;

    slider.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", e => {
        const endX = e.changedTouches[0].clientX;

        if (startX - endX > 50) {
            nextSlide();
        } else if (endX - startX > 50) {
            prevSlide();
        }

        startAuto();
    });

    document.addEventListener("keydown", e => {
        if (e.key === "ArrowRight") {
            nextSlide();
            startAuto();
        }

        if (e.key === "ArrowLeft") {
            prevSlide();
            startAuto();
        }
    });

    updateThumbs();
    updateActiveSlide();
    startAuto();

});

// Banar slider home page end





// bottom to top section start

document.addEventListener("DOMContentLoaded", function () {

    const scrollTopBtn = document.getElementById("scrollTopBtn");

    if (!scrollTopBtn) return;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    scrollTopBtn.addEventListener("click", function () {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    });

});


// bottom to top section End



// about section start card 

document.addEventListener("DOMContentLoaded", () => {

    const reveals = document.querySelectorAll(".reveal");

    if (reveals.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // ek baar animation
            }
        });
    }, {
        threshold: 0.2
    });

    reveals.forEach(item => observer.observe(item));

});



// about img section start 

document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    elements.forEach(function (el) {
        observer.observe(el);
    });

});






// service section start card

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
},{
    threshold:0.2
});

reveals.forEach((item)=>{
    observer.observe(item);
});


// portfolio slider section start

document.addEventListener("DOMContentLoaded", () => {

    let index = 0;

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    function showSlide(i) {
        // Safe check: Agar slides aur dots page par hain, tabhi run kare
        if (slides.length > 0 && dots.length > 0) {
            slides.forEach((s, idx) => {
                s.classList.remove("active");
                if(dots[idx]) dots[idx].classList.remove("active");
            });

            if(slides[i]) slides[i].classList.add("active");
            if(dots[i]) dots[i].classList.add("active");
        }
    }

    function next() {
        if (slides.length > 0) {
            index = (index + 1) % slides.length;
            showSlide(index);
        }
    }

    function prev() {
        if (slides.length > 0) {
            index = (index - 1 + slides.length) % slides.length;
            showSlide(index);
        }
    }

    // ⭐ ERROR FIX: Pehle check karein ki buttons page par hain ya nahi
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    if (nextBtn) {
        nextBtn.addEventListener("click", next);
    }
    if (prevBtn) {
        prevBtn.addEventListener("click", prev);
    }

    // Dots par event listener bhi tabhi lage jab dots page par hon
    if (dots.length > 0) {
        dots.forEach((d, i) => {
            d.addEventListener("click", () => {
                index = i;
                showSlide(index);
            });
        });
    }

    // Auto-slide bhi tabhi chale jab actually slides maujud hon page par
    if (slides.length > 0) {
        setInterval(next, 4000);
    }

});