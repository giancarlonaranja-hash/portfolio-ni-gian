console.log("Welcome to my portfolio!");

const motionElements = document.querySelectorAll(
    ".hero-copy, .hero-visual, .section-heading, .about-copy, .info-panel, " +
    ".skill-card, .process-card, .project-card, .contact-panel, .hire-form"
);

if ("IntersectionObserver" in window) {
    const motionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
    }, { threshold: 0.15 });

    motionElements.forEach((element) => motionObserver.observe(element));
} else {
    motionElements.forEach((element) => element.classList.add("is-visible"));
}

const contactButton = document.querySelector("#open-contact-form");
const hireForm = document.querySelector("#hire-form");
const hireMeButton = document.querySelector("#hire-me-button");
const coinBurst = document.querySelector("#coin-burst");
const submitButton = document.querySelector("#hire-form button[type='submit']");
let coinAudioContext;

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

hireMeButton?.addEventListener("click", (event) => {
    event.preventDefault();

    if (!hireForm) {
        return;
    }

    hireForm.hidden = false;
    contactButton?.setAttribute("aria-expanded", "true");
    hireForm.scrollIntoView({ behavior: "smooth", block: "center" });
    hireForm.querySelector("input")?.focus();
});

contactButton?.addEventListener("click", () => {
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

        for (let index = 0; index < 24; index += 1) {
            const coin = document.createElement("span");
            coin.className = "coin";
            coin.style.setProperty("--coin-origin-x", `${originX}px`);
            coin.style.setProperty("--coin-origin-y", `${originY}px`);
            coin.style.setProperty("--coin-start-x", `${5 + Math.random() * 90}vw`);
            coin.style.setProperty("--coin-start-y", `${5 + Math.random() * 60}vh`);
            coin.style.setProperty("--coin-fall-x", `${-120 + Math.random() * 240}px`);
            coin.style.setProperty("--coin-arc", `${-140 - Math.random() * 240}px`);
            coin.style.setProperty("--coin-delay", `${index * 35}ms`);
            coin.style.setProperty("--coin-duration", `${2.4 + Math.random() * 1.1}s`);
            coinBurst.appendChild(coin);
        }

        coinBurst.classList.add("is-active");
    }

    playCoinSound();

    window.setTimeout(() => {
        window.location.href = `mailto:giancarlonaranja@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }, 4_000);
});
