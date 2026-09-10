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

    window.location.href = `mailto:giancarlonaranja@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
