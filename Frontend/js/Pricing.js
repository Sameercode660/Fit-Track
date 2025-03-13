document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("togglePricing");
    const monthlyPrices = document.querySelectorAll(".monthly");
    const yearlyPrices = document.querySelectorAll(".yearly");

    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            // Show yearly prices
            monthlyPrices.forEach(price => price.style.display = "none");
            yearlyPrices.forEach(price => price.style.display = "block");
        } else {
            // Show monthly prices
            monthlyPrices.forEach(price => price.style.display = "block");
            yearlyPrices.forEach(price => price.style.display = "none");
        }
    });
});
