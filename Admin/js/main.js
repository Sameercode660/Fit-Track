document.addEventListener("DOMContentLoaded", function () {
    const darkModeSwitch = document.getElementById("darkModeSwitch");

    // Load user preference from local storage
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeSwitch.checked = true;
    }

    // Toggle dark mode
    darkModeSwitch.addEventListener("change", function () {
        if (this.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const darkModeSwitch = document.getElementById("darkModeSwitch");

    // Load dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    // Toggle dark mode
    darkModeSwitch?.addEventListener("change", function () {
        if (this.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const featureCards = document.querySelectorAll(".feature-card");

    featureCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const footerLinks = document.querySelectorAll(".footer-links a");

    footerLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
