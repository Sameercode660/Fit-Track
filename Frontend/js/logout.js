document.addEventListener("DOMContentLoaded", function () {
    // Get buttons
    const confirmLogout = document.getElementById("confirmLogout");
    const cancelLogout = document.getElementById("cancelLogout");

    // Logout function
    confirmLogout.addEventListener("click", function () {
        alert("You have been logged out successfully!");
        localStorage.removeItem("userSession"); // Remove user session
        window.location.href = "login.html"; // Redirect to login page
    });

    // Cancel logout
    cancelLogout.addEventListener("click", function () {
        window.history.back(); // Go back to the previous page
    });
});
