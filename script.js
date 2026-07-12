document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
      ANNOUNCEMENT BAR
    =====================================*/

    const announcement = document.querySelector(".announcement");
    const announcementClose = document.querySelector(".announcement .fa-xmark");

    if (announcement && announcementClose) {
        announcementClose.addEventListener("click", () => {
            announcement.style.display = "none";
        });
    }


    /*=====================================
 PREMIUM MOBILE MENU
 =====================================*/

    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const overlay = document.querySelector(".mobile-overlay");
    const closeBtn = document.querySelector(".close-btn");

    function openMenu() {

        mobileMenu.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";

    }

    function closeMenu() {

        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "auto";

    }

    if (menuBtn) {

        menuBtn.addEventListener("click", openMenu);

    }

    if (closeBtn) {

        closeBtn.addEventListener("click", closeMenu);

    }

    if (overlay) {

        overlay.addEventListener("click", closeMenu);

    }

    document.querySelectorAll(".mobile-menu a").forEach(link => {

        link.addEventListener("click", closeMenu);

    });

    /*=====================================
      HERO SLIDER
    =====================================*/

    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    if (slides.length > 0) {

        let currentSlide = 0;

        function showSlide(index) {

            slides.forEach(slide => {
                slide.classList.remove("active");
            });

            slides[index].classList.add("active");
        }

        showSlide(currentSlide);

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                currentSlide =
                    (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            });
        }

        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 4000);

    }


    // ================= OFFER SLIDER =================

    const offerSlides = document.querySelectorAll(".offer-slide");

    let offerIndex = 0;

    function changeOfferSlide() {

        offerSlides.forEach((slide) => {

            slide.classList.remove("active");

        });

        offerIndex++;

        if (offerIndex >= offerSlides.length) {

            offerIndex = 0;

        }

        offerSlides[offerIndex].classList.add("active");

    }

    // Wishlist Heart Toggle

    const wishlistButtons = document.querySelectorAll(".wishlist");

    wishlistButtons.forEach(button => {

        button.addEventListener("click", function () {

            this.classList.toggle("active");

            const icon = this.querySelector("i");

            if (this.classList.contains("active")) {

                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid");

            } else {

                icon.classList.remove("fa-solid");
                icon.classList.add("fa-regular");

            }

        });

    });

    setInterval(changeOfferSlide, 3000);

    /*=====================================
      NAVBAR SHADOW
    =====================================*/

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 20) {

                navbar.classList.add("nav-shadow");

            } else {

                navbar.classList.remove("nav-shadow");

            }

        });

    }

    /*=====================================
      FAQ SECTION
    =====================================*/

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            faqItems.forEach(otherItem => {

                if (otherItem !== item) {

                    otherItem.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

    /*=====================================
      SMOOTH SCROLL
    =====================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target =
                document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /*=====================================
      CONTACT FORM
    =====================================*/

    const form = document.querySelector(".contact-form-box form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const inputs =
                form.querySelectorAll("input, textarea");

            let valid = true;

            inputs.forEach(input => {

                if (input.value.trim() === "") {

                    valid = false;

                    input.style.borderColor = "#ef4444";

                } else {

                    input.style.borderColor = "#22c55e";

                }

            });

            if (valid) {

                alert("Thank you! Your message has been sent.");

                form.reset();

                inputs.forEach(input => {

                    input.style.borderColor = "#d1d5db";

                });

            }

        });

    }

    /*=====================================
      COLLECTION SEARCH
    =====================================*/

    const searchInput = document.getElementById("search");
    const products = document.querySelectorAll(".product-card");

    if (searchInput && products.length > 0) {

        searchInput.addEventListener("keyup", () => {

            const value =
                searchInput.value.toLowerCase();

            products.forEach(product => {

                const name =
                    product.dataset.name.toLowerCase();

                if (name.includes(value)) {

                    product.style.display = "block";

                } else {

                    product.style.display = "none";

                }

            });

        });

    }

    /*=====================================
      COLLECTION FILTERS
    =====================================*/

    const filters = document.querySelectorAll(".filter");

    if (filters.length > 0 && products.length > 0) {

        filters.forEach(filter => {

            filter.addEventListener("change", () => {

                const checked =
                    [...filters].filter(f => f.checked);

                if (checked.length === 0) {

                    products.forEach(product => {

                        product.style.display = "block";

                    });

                    return;

                }

                products.forEach(product => {

                    const values = [

                        product.dataset.color,

                        product.dataset.occasion,

                        product.dataset.arrival

                    ];

                    const visible =
                        checked.every(f =>
                            values.includes(f.value)
                        );

                    product.style.display =
                        visible ? "block" : "none";

                });

            });

        });

    }

});