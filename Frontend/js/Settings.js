document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("change", function () {
        if (this.checked) {
            document.body.style.background = "#222";
            document.body.style.color = "#fff";
        } else {
            document.body.style.background = "#f4f4f4";
            document.body.style.color = "#000";
        }
    });

    // Profile Update
    document.getElementById("profileForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Profile updated successfully!");
    });

    // Password Change
    document.getElementById("passwordForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match!");
        } else {
            alert("Password updated successfully!");
        }
    });
});
