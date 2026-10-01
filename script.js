"use strict";

/* ============================================
   LOADER
============================================ */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.classList.add("hide");
        }

    }, 900);

});


/* ============================================
   MOVING BACKGROUND
============================================ */

const movingBackground =
    document.getElementById("movingBackground");

const movingTexts = [
    "SEIF ♥ JAMILA",
    "سيف ♥ جميلة",
    "بحبك يا جميلة ❤️",
    "JAMILA ♥",
    "SEIF ❤️ JAMILA",
    "SEIF & JAMILA",
    "♥ سيف وجميلة ♥",
    "OUR STORY",
    "LOVE",
    "♥"
];

function createMovingText() {

    if (!movingBackground) return;

    const text =
        document.createElement("div");

    text.className = "moving-text";

    text.textContent =
        movingTexts[
            Math.floor(
                Math.random() * movingTexts.length
            )
        ];

    text.style.top =
        Math.random() * 100 + "%";

    text.style.left =
        Math.random() * 100 + "%";

    text.style.animationDuration =
        (15 + Math.random() * 20) + "s";

    text.style.animationDelay =
        (-Math.random() * 20) + "s";

    movingBackground.appendChild(text);

}

for (let i = 0; i < 14; i++) {
    createMovingText();
}


/* ============================================
   FLOATING HEARTS + ROSES
============================================ */

const romanticBackground =
    document.getElementById("romanticBackground");

const romanticSymbols = [
    "♥",
    "❤",
    "🌹",
    "♥",
    "❤️",
    "🌹"
];

function createRomanticParticle() {

    if (!romanticBackground) return;

    const particle =
        document.createElement("div");

    particle.className =
        "floating-romantic";

    particle.textContent =
        romanticSymbols[
            Math.floor(
                Math.random() *
                romanticSymbols.length
            )
        ];

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.fontSize =
        (12 + Math.random() * 20) + "px";

    const duration =
        7 + Math.random() * 8;

    particle.style.animationDuration =
        duration + "s";

    particle.style.animationDelay =
        Math.random() * 2 + "s";

    romanticBackground.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, (duration + 3) * 1000);

}

setInterval(
    createRomanticParticle,
    700
);

for (let i = 0; i < 12; i++) {
    createRomanticParticle();
}


/* ============================================
   LOVE COUNTER
============================================ */

/*
   بداية الحكاية:
   28 سبتمبر 2026

   بما إن مفيش ساعة محددة،
   هنبدأ من منتصف اليوم.
*/

const startDate =
    new Date(2026, 8, 28, 0, 0, 0);

function updateLoveCounter() {

    const now = new Date();

    if (now < startDate) {
        return;
    }

    let years =
        now.getFullYear() -
        startDate.getFullYear();

    let months =
        now.getMonth() -
        startDate.getMonth();

    let days =
        now.getDate() -
        startDate.getDate();

    if (days < 0) {

        months--;

        const previousMonth =
            new Date(
                now.getFullYear(),
                now.getMonth(),
                0
            );

        days +=
            previousMonth.getDate();
    }

    if (months < 0) {

        years--;

        months += 12;
    }

    const diff =
        now.getTime() -
        startDate.getTime();

    const totalSeconds =
        Math.floor(diff / 1000);

    const seconds =
        totalSeconds % 60;

    const totalMinutes =
        Math.floor(totalSeconds / 60);

    const minutes =
        totalMinutes % 60;

    const totalHours =
        Math.floor(totalMinutes / 60);

    const hours =
        totalHours % 24;

    const yearsElement =
        document.getElementById("counterYears");

    const monthsElement =
        document.getElementById("counterMonths");

    const daysElement =
        document.getElementById("counterDays");

    const hoursElement =
        document.getElementById("counterHours");

    const minutesElement =
        document.getElementById("counterMinutes");

    const secondsElement =
        document.getElementById("counterSeconds");

    if (yearsElement)
        yearsElement.textContent = years;

    if (monthsElement)
        monthsElement.textContent = months;

    if (daysElement)
        daysElement.textContent = days;

    if (hoursElement)
        hoursElement.textContent = hours;

    if (minutesElement)
        minutesElement.textContent = minutes;

    if (secondsElement)
        secondsElement.textContent = seconds;

}

updateLoveCounter();

setInterval(
    updateLoveCounter,
    1000
);


/* ============================================
   ENVELOPE
============================================ */

const envelopeArea =
    document.getElementById("envelopeArea");

const openEnvelope =
    document.getElementById("openEnvelope");

const openedTitle =
    document.getElementById("openedTitle");

if (openEnvelope) {

    openEnvelope.addEventListener(
        "click",
        () => {

            if (!envelopeArea) return;

            envelopeArea.classList.add("open");

            openEnvelope.textContent =
                "اتفتحت الرسالة ❤️";

            openEnvelope.disabled = true;

            setTimeout(() => {

                if (openedTitle) {
                    openedTitle.classList.add("show");
                }

            }, 650);

            createHeartExplosion(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

        }
    );

}


/* ============================================
   MUSIC
============================================ */

const loveMusic =
    document.getElementById("loveMusic");

const musicToggle =
    document.getElementById("musicToggle");

let musicPlaying = false;

if (musicToggle && loveMusic) {

    musicToggle.addEventListener(
        "click",
        async () => {

            try {

                if (!musicPlaying) {

                    await loveMusic.play();

                    musicPlaying = true;

                    musicToggle.textContent =
                        "⏸️ إيقاف الموسيقى";

                } else {

                    loveMusic.pause();

                    musicPlaying = false;

                    musicToggle.textContent =
                        "🎵 تشغيل الموسيقى";

                }

            } catch (error) {

                musicToggle.textContent =
                    "🎵 حط music.mp3 أولاً";

            }

        }
    );

}


/* ============================================
   LOVE CALCULATOR
============================================ */

const calculateLove =
    document.getElementById("calculateLove");

const name1 =
    document.getElementById("name1");

const name2 =
    document.getElementById("name2");

const loveResult =
    document.getElementById("loveResult");

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}

if (calculateLove) {

    calculateLove.addEventListener(
        "click",
        () => {

            const first =
                name1.value.trim();

            const second =
                name2.value.trim();

            if (!first || !second) {

                loveResult.textContent =
                    "اكتب الاسمين الأول ❤️";

                return;
            }

            /*
               نسبة عشوائية لطيفة
               من 80 إلى 100
            */

            const percentage =
                Math.floor(
                    80 + Math.random() * 21
                );

            loveResult.innerHTML =
                `${escapeHTML(first)}
                ❤️
                ${escapeHTML(second)}
                =
                ${percentage}%`;

            createHeartExplosion(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

        }
    );

}


/* ============================================
   SECRET SURPRISE
============================================ */

/*
   غيّر كلمة السر من هنا لو عايز:

   مثال:
   const SECRET_PASSWORD = "28092026";

*/

const SECRET_PASSWORD =
    "جمولتي";

const secretPassword =
    document.getElementById("secretPassword");

const unlockSurprise =
    document.getElementById("unlockSurprise");

const secretSurprise =
    document.getElementById("secretSurprise");

const passwordMessage =
    document.getElementById("passwordMessage");

const secretBox =
    document.querySelector(".secret-box");

if (unlockSurprise) {

    unlockSurprise.addEventListener(
        "click",
        unlockSecret
    );

}

if (secretPassword) {

    secretPassword.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {
                unlockSecret();
            }

        }
    );

}

function unlockSecret() {

    if (!secretPassword) return;

    const entered =
        secretPassword.value.trim();

    if (
        entered.toUpperCase() ===
        SECRET_PASSWORD.toUpperCase()
    ) {

        if (passwordMessage) {

            passwordMessage.textContent =
                "تم فتح المفاجأة ❤️";

        }

        if (secretBox) {
            secretBox.classList.add("unlocked");
        }

        if (secretSurprise) {

            secretSurprise.classList.add("show");

            setTimeout(() => {

                secretSurprise.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 300);

        }

        createHeartExplosion(
            window.innerWidth / 2,
            window.innerHeight / 2
        );

        for (let i = 0; i < 25; i++) {

            setTimeout(() => {

                createRomanticParticle();

            }, i * 70);

        }

    } else {

        if (passwordMessage) {

            passwordMessage.textContent =
                "كلمة السر مش صح... جربي تاني 🔐";

        }

        if (secretBox) {

            secretBox.animate(
                [
                    {
                        transform: "translateX(0)"
                    },
                    {
                        transform: "translateX(-8px)"
                    },
                    {
                        transform: "translateX(8px)"
                    },
                    {
                        transform: "translateX(-5px)"
                    },
                    {
                        transform: "translateX(0)"
                    }
                ],
                {
                    duration: 350
                }
            );

        }

    }

}


/* ============================================
   FINAL HEART BUTTON
============================================ */

const finalHeartButton =
    document.getElementById("finalHeartButton");

if (finalHeartButton) {

    finalHeartButton.addEventListener(
        "click",
        () => {

            const centerX =
                window.innerWidth / 2;

            const centerY =
                window.innerHeight / 2;

            createHeartExplosion(
                centerX,
                centerY
            );

            for (let i = 0; i < 35; i++) {

                setTimeout(() => {

                    createRomanticParticle();

                }, i * 50);

            }

        }
    );

}


/* ============================================
   HEART EXPLOSION
============================================ */

function createHeartExplosion(x, y) {

    for (let i = 0; i < 20; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "heart-particle";

        heart.textContent =
            Math.random() > .3
                ? "♥"
                : "❤";

        heart.style.left =
            x + "px";

        heart.style.top =
            y + "px";

        heart.style.setProperty(
            "--x",
            `${(Math.random() - .5) * 300}px`
        );

        heart.style.setProperty(
            "--y",
            `${(Math.random() - .5) * 300}px`
        );

        heart.style.fontSize =
            `${12 + Math.random() * 25}px`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1100);

    }

}


/* ============================================
   REVEAL ON SCROLL
============================================ */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .12
        }
    );

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ============================================
   NAVBAR SCROLL
============================================ */

const navbar =
    document.querySelector(".navbar");

function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 60) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateNavbar
);

updateNavbar();


/* ============================================
   PAGE PROGRESS
============================================ */

const progressBar =
    document.getElementById("progressBar");

function updateProgress() {

    if (!progressBar) return;

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percentage =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;

    progressBar.style.width =
        percentage + "%";

}

window.addEventListener(
    "scroll",
    updateProgress
);

updateProgress();


/* ============================================
   SMOOTH NAVIGATION
============================================ */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        event => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* ============================================
   IMAGE GALLERY / LIGHTBOX
============================================ */

const galleryItems =
    document.querySelectorAll(".gallery-item");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.getElementById("closeLightbox");

galleryItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            const image =
                item.querySelector("img");

            if (!image || !lightbox) return;

            lightboxImage.src =
                image.src;

            lightbox.classList.add("show");

        }
    );

});

if (closeLightbox) {

    closeLightbox.addEventListener(
        "click",
        () => {

            lightbox.classList.remove(
                "show"
            );

        }
    );

}

if (lightbox) {

    lightbox.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                lightbox
            ) {

                lightbox.classList.remove(
                    "show"
                );

            }

        }
    );

}

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            lightbox
        ) {

            lightbox.classList.remove(
                "show"
            );

        }

    }
);


/* ============================================
   CLICK ANYWHERE HEART
============================================ */

document.addEventListener(
    "click",
    event => {

        const target =
            event.target;

        if (
            target.closest("button") ||
            target.closest("a") ||
            target.closest("input")
        ) {
            return;
        }

        createHeartExplosion(
            event.clientX,
            event.clientY
        );

    }
);