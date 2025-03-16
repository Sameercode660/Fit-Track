document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const heroButtons = document.querySelectorAll(".btn-primary, .btn-secondary");

    // heroButtons.forEach(button => {
    //     button.addEventListener("click", (e) => {
    //         e.preventDefault();
    //         alert("Feature coming soon!");
    //     });
    // });
});

document.addEventListener("DOMContentLoaded", () => {
    const featureBoxes = document.querySelectorAll(".feature-box");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    featureBoxes.forEach(box => {
        box.style.opacity = "0";
        box.style.transform = "translateY(30px)";
        observer.observe(box);
    });
});

function togglePlayPause() {
    const video = document.getElementById("demoVideo");
    const playIcon = document.getElementById("playIcon");

    if (video.paused) {
        video.play();
        playIcon.style.display = "none";
    } else {
        video.pause();
        playIcon.style.display = "block";
    }
}

let currentIndex = 0;

function moveSlide(index) {
    const slider = document.querySelector(".testimonial-slider");
    const dots = document.querySelectorAll(".dot");

    if (index >= dots.length) index = 0;
    if (index < 0) index = dots.length - 1;

    slider.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

    currentIndex = index;
}

// Auto-slide every 5 seconds
setInterval(() => {
    moveSlide(currentIndex + 1);
}, 5000);

document.getElementById("billingToggle").addEventListener("change", function() {
    const prices = document.querySelectorAll(".price");

    prices.forEach(price => {
        if (this.checked) {
            price.textContent = price.getAttribute("data-yearly");
        } else {
            price.textContent = price.getAttribute("data-monthly");
        }
    });
});

document.querySelector(".btn-primary").addEventListener("click", function() {
    this.textContent = "Joining...";
    this.style.background = "lightgray";

    setTimeout(() => {
        this.textContent = "Welcome to FitTrack!";
        this.style.background = "green";
        this.style.color = "white";
    }, 2000);
});

// Show/Hide Back to Top Button
window.onscroll = function () {
    let backToTop = document.querySelector(".back-to-top");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

// Smooth Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
