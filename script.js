console.log("Welcome to my portfolio!");

const contactButton = document.querySelector("#open-contact-form");
const hireForm = document.querySelector("#hire-form");

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
