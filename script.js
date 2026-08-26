/* =========================================================
   HANIY PORTFOLIO
   SCRIPT.JS
========================================================= */


/* =========================================================
   01. REGISTER GSAP
========================================================= */

gsap.registerPlugin(ScrollTrigger);



/* =========================================================
   HEADER — SMOOTH HERO SCROLL TRANSFORMATION
========================================================= */

const navbar = document.querySelector(".navbar");

if (navbar) {

    gsap.to(navbar, {

        maxWidth: "1100px",

        scrollTrigger: {

            trigger: ".hero",

            start: "top top",

            end: "bottom top",

            scrub: 1.2

        },

        ease: "none"

    });

}

/* =========================================================
   03. PAGE LOADER
========================================================= */

window.addEventListener("load", function () {

    const loader =
        document.querySelector(".loader");


    if (!loader) return;


    const loaderTimeline =
        gsap.timeline();


    loaderTimeline

        .to(".loader-logo", {

            opacity: 0,

            y: -30,

            duration: 0.6,

            ease: "power3.in"

        })


        .to(loader, {

            opacity: 0,

            duration: 0.7,

            ease: "power2.out",

            onComplete: function () {

                loader.classList.add("hide");

            }

        });

});

/* =========================================================
   03. MOBILE MENU
========================================================= */

const menuButton =
    document.querySelector(".menu-button");

const navLinks =
    document.querySelector(".nav-links");


if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {

            menuButton.textContent = "CLOSE";

        } else {

            menuButton.textContent = "MENU";

        }

    });


    /* Close menu after clicking navigation link */

    const navigationLinks =
        navLinks.querySelectorAll("a");


    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuButton.textContent = "MENU";

        });

    });

}


/* =========================================================
   04. ESCAPE KEY CLOSES MOBILE MENU
========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key !== "Escape") return;

    if (navLinks) {
        navLinks.classList.remove("active");
    }

    if (menuButton) {
        menuButton.textContent = "MENU";
    }

});


/* =========================================================
   05. SMOOTH ANCHOR SCROLL
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID =
                this.getAttribute("href");

            const target =
                document.querySelector(targetID);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


/* =========================================================
   06. HERO INTRO ANIMATION
========================================================= */

const heroTimeline = gsap.timeline({
    defaults: {
        ease: "power4.out"
    }
});


heroTimeline

    .from(".hero-top", {
        opacity: 0,
        y: -30,
        duration: 0.9
    })

    .from(".hero-title span", {
        opacity: 0,
        y: 120,
        duration: 1.1,
        stagger: 0.12
    }, "-=0.4")

    .from(".hero-intro", {
        opacity: 0,
        y: 50,
        duration: 1
    }, "-=0.5")

    .from(".hero-bottom", {
        opacity: 0,
        duration: 0.8
    }, "-=0.5");


/* =========================================================
   07. PROJECT SCROLL ANIMATION
========================================================= */

gsap.utils
    .toArray(".project")
    .forEach(function (project) {

        gsap.from(project, {

            opacity: 0,

            y: 100,

            duration: 1.2,

            ease: "power3.out",

            scrollTrigger: {

                trigger: project,

                start: "top 85%",

                toggleActions:
                    "play none none reverse"

            }

        });

    });


/* =========================================================
   08. PROJECT IMAGE PARALLAX
========================================================= */

gsap.utils
    .toArray(".project-image img")
    .forEach(function (image) {

        gsap.to(image, {

            yPercent: 8,

            ease: "none",

            scrollTrigger: {

                trigger: image,

                start: "top bottom",

                end: "bottom top",

                scrub: true

            }

        });

    });


/* =========================================================
   09. ABOUT ANIMATION
========================================================= */

const aboutStatement =
    document.querySelector(".about-statement h3");


if (aboutStatement) {

    gsap.from(aboutStatement, {

        opacity: 0,

        y: 100,

        duration: 1.3,

        ease: "power4.out",

        scrollTrigger: {

            trigger: ".about-statement",

            start: "top 80%",

            toggleActions:
                "play none none reverse"

        }

    });

}


/* =========================================================
   10. ABOUT DETAILS
========================================================= */

gsap.from(".about-text p", {

    opacity: 0,

    y: 40,

    duration: 0.8,

    stagger: 0.15,

    ease: "power3.out",

    scrollTrigger: {

        trigger: ".about-text",

        start: "top 80%"

    }

});


gsap.from(".detail-row", {

    opacity: 0,

    x: 50,

    duration: 0.7,

    stagger: 0.1,

    ease: "power3.out",

    scrollTrigger: {

        trigger: ".about-details",

        start: "top 80%"

    }

});


/* =========================================================
   11. SERVICES ANIMATION
========================================================= */

gsap.from(".service-item", {

    opacity: 0,

    x: -80,

    duration: 0.8,

    stagger: 0.12,

    ease: "power3.out",

    scrollTrigger: {

        trigger: ".service-list",

        start: "top 80%",

        toggleActions:
            "play none none reverse"

    }

});


/* =========================================================
   12. SERVICE HOVER
========================================================= */

const services =
    document.querySelectorAll(".service-item");


services.forEach(function (service) {

    const arrow =
        service.querySelector(".service-arrow");


    if (!arrow) return;


    service.addEventListener(
        "mouseenter",
        function () {

            gsap.to(arrow, {

                x: 8,

                y: -8,

                duration: 0.35,

                ease: "power3.out"

            });

        }
    );


    service.addEventListener(
        "mouseleave",
        function () {

            gsap.to(arrow, {

                x: 0,

                y: 0,

                duration: 0.35,

                ease: "power3.out"

            });

        }
    );

});


/* =========================================================
   13. CONTACT TITLE ANIMATION
========================================================= */

/* =========================================================
   CONTACT TITLE — SCROLL ANIMATION
========================================================= */

const contactTitle = document.querySelector(".contact-main h2");

if (contactTitle) {

    gsap.from(contactTitle, {

        opacity: 0,

        y: 120,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {

            trigger: ".contact",

            start: "top 50%",

            end: "top -10%",

            scrub: 1.2

        }

    });

}

/* =========================================================
   14. CONTACT DETAILS ANIMATION
========================================================= */

gsap.from(".contact-bottom", {

    opacity: 0,

    y: 50,

    duration: 1,

    delay: 0.2,

    ease: "power3.out",

    scrollTrigger: {

        trigger: ".contact-bottom",

        start: "top 90%"

    }

});


/* =========================================================
   15. PROJECT HOVER
========================================================= */

const projects =
    document.querySelectorAll(".project");


projects.forEach(function (project) {

    const image =
        project.querySelector("img");


    if (!image) return;


    project.addEventListener(
        "mouseenter",
        function () {

            gsap.to(image, {

                scale: 1.05,

                duration: 0.8,

                ease: "power3.out"

            });

        }
    );


    project.addEventListener(
        "mouseleave",
        function () {

            gsap.to(image, {

                scale: 1.01,

                duration: 0.8,

                ease: "power3.out"

            });

        }
    );

});


/* =========================================================
   16. VIEW ALL BUTTON
========================================================= */

const viewAll =
    document.querySelector(".view-all");


if (viewAll) {

    gsap.from(viewAll, {

        opacity: 0,

        y: 40,

        duration: 0.8,

        ease: "power3.out",

        scrollTrigger: {

            trigger: viewAll,

            start: "top 90%"

        }

    });

}


/* =========================================================
   17. MARQUEE SPEED ON HOVER
========================================================= */

const marquee =
    document.querySelector(".marquee-track");


if (marquee) {

    const marqueeAnimation =
        gsap.to(marquee, {

            xPercent: -50,

            duration: 25,

            ease: "none",

            repeat: -1

        });


    const marqueeSection =
        document.querySelector(".marquee-section");


    if (marqueeSection) {

        marqueeSection.addEventListener(
            "mouseenter",
            function () {

                gsap.to(
                    marqueeAnimation,
                    {
                        timeScale: 0.4,
                        duration: 0.4
                    }
                );

            }
        );


        marqueeSection.addEventListener(
            "mouseleave",
            function () {

                gsap.to(
                    marqueeAnimation,
                    {
                        timeScale: 1,
                        duration: 0.4
                    }
                );

            }
        );

    }

}


/* =========================================================
   18. ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 250;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            }
        );


        navItems.forEach(
            function (link) {

                link.classList.remove("active");


                if (
                    link.getAttribute("href") ===
                    "#" + currentSection
                ) {

                    link.classList.add("active");

                }

            }
        );

    }
);


/* =========================================================
   19. CURRENT YEAR
========================================================= */

const currentYear =
    document.querySelector(".current-year");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   20. REFRESH SCROLLTRIGGER
========================================================= */

window.addEventListener(
    "load",
    function () {

        ScrollTrigger.refresh();

    }
);


/* =========================================================
   21. REDUCED MOTION
========================================================= */

const reducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (reducedMotion.matches) {

    gsap.globalTimeline.timeScale(0);

    ScrollTrigger.getAll()
        .forEach(function (trigger) {

            trigger.disable();

        });

}