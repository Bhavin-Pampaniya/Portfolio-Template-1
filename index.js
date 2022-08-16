// ****************************
// Portfolio Buttons Section
// ****************************
// Button clicked query
const portfolio_btns = document.querySelectorAll(".w-btn");
const btns = document.querySelector(".section-btn");

btns.addEventListener("click", (e) => {
    const button_clicked = e.target;

    portfolio_btns.forEach((elem) => elem.classList.remove("btn-clicked"));
    button_clicked.classList.add("btn-clicked");
    btns.classList.remove("btn-clicked");

    // images regarding button clicked
    const btnNum = button_clicked.dataset.btnNum;
    const img_active = document.querySelectorAll(`.btn-${btnNum}`);
    const images = document.querySelectorAll(".img-overlay");

    let ans =
        images.forEach((elem) => elem.classList.add("portfolio-img-hide"));
    img_active.forEach((elem) => elem.classList.remove("portfolio-img-hide"));

    if (!button_clicked.classList.contains("w-btn")) {
        images.forEach((elem) => elem.classList.remove("portfolio-img-hide"));
    }
})

// ****************************
// Animated Numbers Section
// ****************************
// data increment animation query
const sectionWork = document.querySelector(".section-work");
const data = document.querySelectorAll(".work-data");
const speed = 200;

const observerInc = new IntersectionObserver((entries, observer) => {
    console.log(entries[0]);
    if (!entries[0].isIntersecting) return;
    data.forEach((e) => {
        e.innerHTML = 0;
        const increment = () => {
            const targetNumber = parseInt(e.dataset.targetNo);
            const intialNo = parseInt(e.innerText);
            const incrementData = Math.trunc(targetNumber / speed);
            if (intialNo < targetNumber) {
                e.innerText = `${intialNo + incrementData}+`;
            } else {
                e.innerText = `${targetNumber}+`;
                return;
            }
        }
        increment();
        setInterval(increment, 10);
    })

    observer.unobserve(sectionWork);
}, {
    root: null,
    threshold: 0
});
observerInc.observe(sectionWork);

// ****************************
// Swiper Section
// ****************************

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});

// ****************************
// Hamburger Section
// ****************************

const menuBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navList = document.querySelector(".navbar-lists");
const header = document.querySelector(".header")
menuBtn.addEventListener("click", () => {
    header.classList.toggle("active");
})

closeBtn.addEventListener("click", () => {
    header.classList.toggle("active");
})

// ****************************
// Menu Button Sticky Navbar Section
// ****************************
const mobMenuMedia = window.matchMedia('(max-width:784px)');
const mobMenuObserver = new IntersectionObserver((entries) => {
    entries.forEach((elem) => {
        if (!elem.isIntersecting) {
            menuBtn.style.display = "block";
            menuBtn.addEventListener("click", () => {
                menuBtn.style.display = "none";
                closeBtn.style.display = "block";
            })

            closeBtn.addEventListener("click", () => {
                // Location.reload();
                closeBtn.style.display = "none";
                menuBtn.style.display = "block";

            })

        } else {

        }
    })

}, {
    root: null,
    threshold: 0
})


mobMenuMedia.addEventListener("change", ()=>{
    mobMenuObserver.observe(heroSection);
});

// ****************************
// Scroll-to-top Section
// ****************************
const scrollElemnet = document.createElement("div");
const footer = document.querySelector(".section-footer");

scrollElemnet.classList.add("scroll-top");
scrollElemnet.style.display = "none";
scrollElemnet.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll ico"></ion-icon>`;

footer.after(scrollElemnet);

const scrollTo = (elem) => {
    console.log("clicked");
    elem.scrollIntoView({ behavior: "smooth" });
}

scrollElemnet.addEventListener("click", () => scrollTo(heroSection));

// ****************************
// HireMe sticky Section
// ****************************
const freelanceHireme = document.querySelector(".freelance-btn")
const hireMe = document.querySelector(".hireme-btn");
const contact = document.querySelector(".section-contact");
hireMe.addEventListener("click",()=>scrollTo(contact));
freelanceHireme.addEventListener("click",()=>scrollTo(contact));




// ****************************
// Navbar sticky Section
// ****************************

const heroSection = document.querySelector(".section-hero");
const observer = new IntersectionObserver((entries) => {
    
    console.log(entries[0]);

    if(!entries[0].isIntersecting){
        document.body.classList.add("sticky");
        scrollElemnet.style.display = "block";
    }
    else{
        document.body.classList.remove("sticky");
        scrollElemnet.style.display = "none";
    }

}, {
    root: null,
    threshold: 0
})


observer.observe(heroSection);

// ****************************
// Media Query swipper Section
// ****************************

const swipperMenu = (e) => {
    if (e.matches) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: true,
            },
        });
    } else {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 20,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: true,
            },
        });
    }
};
const mediaQuery = window.matchMedia("(max-width:610px)");

swipperMenu(mediaQuery);

mediaQuery.addEventListener("change", swipperMenu);

// ****************************
// Portfolio-scroll Section
// ****************************

const portfolioLink = document.querySelector(".portfolio-link");
const sectionPortfolio = document.querySelector(".section-portfolio");

portfolioLink.addEventListener("click", () => {
    scrollTo(sectionPortfolio);
    header.classList.remove("active");
    
    
});
    
