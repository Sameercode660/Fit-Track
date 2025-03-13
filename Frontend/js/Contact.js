document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "❌ Please fill in all fields!";
            formMessage.style.color = "red";
            return;
        }

        if (!validateEmail(email)) {
            formMessage.textContent = "❌ Please enter a valid email address!";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "✅ Message sent successfully!";
        formMessage.style.color = "green";

        // Clear form fields
        contactForm.reset();
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});
