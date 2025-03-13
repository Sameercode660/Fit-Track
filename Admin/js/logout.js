document.getElementById("confirmLogout").addEventListener("click", function() {
    // Clear session storage or authentication token
    sessionStorage.clear();

    // Redirect to login page
    window.location.href = "login.html";
});

document.getElementById("cancelLogout").addEventListener("click", function() {
    // Redirect back to the admin dashboard
    window.location.href = "dashboard.html";
});
