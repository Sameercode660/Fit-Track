document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
            loginMessage.textContent = "❌ Please fill in all fields!";
            loginMessage.style.color = "red";
            return;
        }

        if (!validateEmail(email)) {
            loginMessage.textContent = "❌ Please enter a valid email address!";
            loginMessage.style.color = "red";
            return;
        }

        if (password.length < 6) {
            loginMessage.textContent = "❌ Password must be at least 6 characters!";
            loginMessage.style.color = "red";
            return;
        }

        loginMessage.textContent = "✅ Login successful!";
        loginMessage.style.color = "green";

        // Redirect to dashboard after 1.5 seconds
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1500);
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
