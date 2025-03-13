document.addEventListener("DOMContentLoaded", function () {
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
    const resetMessage = document.getElementById("resetMessage");

    forgotPasswordForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value.trim();

        if (email === "") {
            resetMessage.textContent = "❌ Please enter your email!";
            resetMessage.style.color = "red";
            return;
        }

        if (!validateEmail(email)) {
            resetMessage.textContent = "❌ Please enter a valid email address!";
            resetMessage.style.color = "red";
            return;
        }

        resetMessage.textContent = "✅ A password reset link has been sent to your email!";
        resetMessage.style.color = "green";

        // Simulate sending email and redirect after 2 seconds
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});
