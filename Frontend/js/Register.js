document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    const registerMessage = document.getElementById("registerMessage");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        if (fullname === "" || email === "" || password === "" || confirmPassword === "") {
            registerMessage.textContent = "❌ Please fill in all fields!";
            registerMessage.style.color = "red";
            return;
        }

        if (!validateEmail(email)) {
            registerMessage.textContent = "❌ Please enter a valid email address!";
            registerMessage.style.color = "red";
            return;
        }

        if (password.length < 6) {
            registerMessage.textContent = "❌ Password must be at least 6 characters!";
            registerMessage.style.color = "red";
            return;
        }

        if (password !== confirmPassword) {
            registerMessage.textContent = "❌ Passwords do not match!";
            registerMessage.style.color = "red";
            return;
        }

        registerMessage.textContent = "✅ Registration successful!";
        registerMessage.style.color = "green";

        // Redirect to login page after 2 seconds
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});

// Password Toggle Visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

function toggleConfirmPassword() {
    const confirmPasswordField = document.getElementById("confirmPassword");
    confirmPasswordField.type = confirmPasswordField.type === "password" ? "text" : "password";
}
