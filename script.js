console.log("Welcome to my portfolio!");

const loadingScreen = document.querySelector("#loading-screen");

const prepareLoadingAudio = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) {
        return;
    }

    coinAudioContext ??= new AudioContext();
    void coinAudioContext.resume();
};

const playLoadingCoinSound = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) {
        return;
    }

    coinAudioContext ??= new AudioContext();

    void coinAudioContext.resume().then(() => {
        const startTime = coinAudioContext.currentTime;
        const notes = [740, 988, 1318];

        notes.forEach((frequency, index) => {
            const oscillator = coinAudioContext.createOscillator();
            const gain = coinAudioContext.createGain();
            const noteStart = startTime + index * 0.11;

            oscillator.type = "sine";
            oscillator.frequency.setValueAtTime(frequency, noteStart);
            gain.gain.setValueAtTime(0.0001, noteStart);
            gain.gain.exponentialRampToValueAtTime(0.24, noteStart + 0.015);
            gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 0.28);
            oscillator.connect(gain);
            gain.connect(coinAudioContext.destination);
            oscillator.start(noteStart);
            oscillator.stop(noteStart + 0.3);
        });
    });
};

let loadingTimer;
let loadingAudioUnlocked = false;

const completeLoading = (playSound = false) => {
    window.clearTimeout(loadingTimer);
    loadingScreen?.classList.add("is-complete");

    if (playSound) {
        playLoadingCoinSound();
    }

    loadingTimer = window.setTimeout(hideLoadingScreen, 420);
};

const hideLoadingScreen = () => {
    loadingScreen?.classList.add("is-hidden");
};

window.addEventListener("load", () => {
    loadingTimer = window.setTimeout(() => completeLoading(), 1_150);
});

document.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
        return;
    }

    const link = target.closest("a");

    if (
        !link ||
        link.target === "_blank" ||
        link.hasAttribute("download") ||
        link.matches(".nav-btn, .primary-btn, .secondary-btn, .welcome-start")
    ) {
        return;
    }

    const href = link.getAttribute("href");

    if (!href || href.startsWith("mailto:") || href.startsWith("javascript:")) {
        return;
    }

    loadingScreen?.classList.remove("is-hidden");
    loadingScreen?.classList.remove("is-complete");
    loadingAudioUnlocked = true;
    prepareLoadingAudio();
    window.clearTimeout(loadingTimer);
    loadingTimer = window.setTimeout(() => completeLoading(loadingAudioUnlocked), 1_150);

    if (href.startsWith("#")) {
        return;
    }
});

const motionElements = document.querySelectorAll(
    ".hero-copy, .hero-visual, .section-heading, .about-copy, .info-panel, " +
    ".skill-card, .process-card, .project-card, .contact-panel, .hire-form"
);

if ("IntersectionObserver" in window) {
    const motionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("is-visible");
            motionObserver.unobserve(entry.target);
        });
    }, { threshold: 0.15 });

    motionElements.forEach((element) => motionObserver.observe(element));
} else {
    motionElements.forEach((element) => element.classList.add("is-visible"));
}

const contactButton = document.querySelector("#open-contact-form");
const hireForm = document.querySelector("#hire-form");
const hireMeButton = document.querySelector("#hire-me-button");
const viewWorkButton = document.querySelector("#view-work-button");
const letsTalkButton = document.querySelector("#lets-talk-button");
const thankYouScene = document.querySelector("#thank-you-scene");
const coinBurst = document.querySelector("#coin-burst");
const submitButton = document.querySelector("#hire-form button[type='submit']");
let coinAudioContext;

const showCoinPop = (button) => {
    if (!coinBurst || !(button instanceof Element)) {
        return;
    }

    const buttonRect = button.getBoundingClientRect();
    const coin = document.createElement("span");
    coin.className = "coin-pop";
    coin.style.setProperty("--coin-pop-x", `${buttonRect.left + buttonRect.width / 2}px`);
    coin.style.setProperty("--coin-pop-y", `${buttonRect.top + buttonRect.height / 2}px`);
    coinBurst.appendChild(coin);

    requestAnimationFrame(() => coin.classList.add("is-active"));
    window.setTimeout(() => coin.remove(), 1_000);
};

const playCoinPopSound = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) {
        return;
    }

    coinAudioContext ??= new AudioContext();
    void coinAudioContext.resume().then(() => {
        const startTime = coinAudioContext.currentTime;
        [988, 1480].forEach((frequency, index) => {
            const oscillator = coinAudioContext.createOscillator();
            const gain = coinAudioContext.createGain();
            const noteStart = startTime + index * 0.09;

            oscillator.type = "square";
            oscillator.frequency.setValueAtTime(frequency, noteStart);
            gain.gain.setValueAtTime(0.0001, noteStart);
            gain.gain.exponentialRampToValueAtTime(0.2, noteStart + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 0.16);
            oscillator.connect(gain);
            gain.connect(coinAudioContext.destination);
            oscillator.start(noteStart);
            oscillator.stop(noteStart + 0.18);
        });
    });
};

const playCoinSound = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) {
        return;
    }

    coinAudioContext ??= new AudioContext();

    coinAudioContext.resume().then(() => {
        const startTime = coinAudioContext.currentTime + 0.08;

        for (let index = 0; index < 12; index += 1) {
            const oscillator = coinAudioContext.createOscillator();
            const gain = coinAudioContext.createGain();
            const pingStart = startTime + index * 0.16;

            oscillator.type = "triangle";
            oscillator.frequency.setValueAtTime(620 + (index % 4) * 130, pingStart);
            oscillator.frequency.exponentialRampToValueAtTime(1220 + (index % 3) * 100, pingStart + 0.07);
            gain.gain.setValueAtTime(0.0001, pingStart);
            gain.gain.exponentialRampToValueAtTime(0.3, pingStart + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.0001, pingStart + 0.15);

            oscillator.connect(gain);
            gain.connect(coinAudioContext.destination);
            oscillator.start(pingStart);
            oscillator.stop(pingStart + 0.17);
        }
    });
};

const playButtonSound = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) {
        return;
    }

    coinAudioContext ??= new AudioContext();

    const oscillator = coinAudioContext.createOscillator();
    const gain = coinAudioContext.createGain();
    const startTime = coinAudioContext.currentTime;

    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(440, startTime);
    oscillator.frequency.exponentialRampToValueAtTime(660, startTime + 0.08);
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.32, startTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.1);

    oscillator.connect(gain);
    gain.connect(coinAudioContext.destination);
    oscillator.start(startTime);
    oscillator.stop(startTime + 0.11);
    void coinAudioContext.resume();
};

const showThankYouScene = () => {
    if (!thankYouScene) {
        return;
    }

    thankYouScene.hidden = false;
    thankYouScene.classList.add("is-visible");
};

document.addEventListener("pointerdown", (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
        return;
    }

    if (target.closest("button, .nav-btn, .primary-btn, .secondary-btn")) {
        playButtonSound();
    }
});

hireMeButton?.addEventListener("click", (event) => {
    event.preventDefault();
    showCoinPop(hireMeButton);
    playCoinPopSound();
    showThankYouScene();

    if (!hireForm) {
        return;
    }

    hireForm.hidden = false;
    contactButton?.setAttribute("aria-expanded", "true");
    hireForm.scrollIntoView({ behavior: "smooth", block: "center" });
    hireForm.querySelector("input")?.focus();
});

viewWorkButton?.addEventListener("click", (event) => {
    event.preventDefault();
    showCoinPop(viewWorkButton);
    playCoinPopSound();
    window.setTimeout(() => {
        document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 450);
});

letsTalkButton?.addEventListener("click", () => {
    showThankYouScene();
});

contactButton?.addEventListener("click", () => {
    showThankYouScene();

    if (!hireForm) {
        return;
    }

    hireForm.hidden = !hireForm.hidden;
    contactButton.setAttribute("aria-expanded", String(!hireForm.hidden));

    if (!hireForm.hidden) {
        hireForm.querySelector("input")?.focus();
    }
});

hireForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(hireForm);
    const givenName = String(formData.get("given-name") || "").trim();
    const middleName = String(formData.get("middle-name") || "").trim();
    const surname = String(formData.get("surname") || "").trim();
    const hireReason = String(formData.get("hire-reason") || "").trim();
    const fullName = [givenName, middleName, surname].filter(Boolean).join(" ");
    const subject = `Hiring inquiry from ${fullName}`;
    const body = [
        `Name: ${fullName}`,
        "",
        "Why I want to hire you:",
        hireReason
    ].join("\n");

    submitButton?.classList.remove("is-shaking");
    void submitButton?.offsetWidth;
    submitButton?.classList.add("is-shaking");

    if (coinBurst) {
        coinBurst.replaceChildren();
        coinBurst.classList.remove("is-active");
        const buttonRect = submitButton?.getBoundingClientRect();
        const originX = buttonRect ? buttonRect.left + buttonRect.width / 2 : window.innerWidth / 2;
        const originY = buttonRect ? buttonRect.top + buttonRect.height / 2 : window.innerHeight / 2;

        for (let index = 0; index < 12; index += 1) {
            const coin = document.createElement("span");
            coin.className = "coin";
            coin.style.setProperty("--coin-origin-x", `${originX}px`);
            coin.style.setProperty("--coin-origin-y", `${originY}px`);
            coin.style.setProperty("--coin-start-x", `${5 + Math.random() * 90}vw`);
            coin.style.setProperty("--coin-start-y", `${5 + Math.random() * 60}vh`);
            coin.style.setProperty("--coin-fall-x", `${-120 + Math.random() * 240}px`);
            coin.style.setProperty("--coin-arc", `${-140 - Math.random() * 240}px`);
            coin.style.setProperty("--coin-delay", `${index * 25}ms`);
            coin.style.setProperty("--coin-duration", `${1.8 + Math.random() * 0.7}s`);
            coinBurst.appendChild(coin);
        }

        coinBurst.classList.add("is-active");
    }

    playCoinSound();

    window.setTimeout(() => {
        window.location.href = `mailto:giancarlonaranja@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }, 4_000);
});
