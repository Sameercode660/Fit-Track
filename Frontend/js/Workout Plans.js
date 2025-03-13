document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const workoutCards = document.querySelectorAll(".workout-card");
    const searchInput = document.getElementById("searchWorkout");

    // Filter workouts based on category
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filter = this.getAttribute("data-filter");
            workoutCards.forEach(card => {
                if (filter === "all" || card.getAttribute("data-category") === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Search workouts
    searchInput.addEventListener("keyup", function () {
        const searchText = searchInput.value.toLowerCase();
        workoutCards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            if (title.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
