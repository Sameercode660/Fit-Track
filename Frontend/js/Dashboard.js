document.addEventListener("DOMContentLoaded", function () {
    // Simulated user data
    const userData = {
        username: "Rutuja",
        workoutCount: 15,
        caloriesBurned: "4,200 kcal",
        activeDays: 20,
        progressPercentage: 85,
        upcomingWorkouts: ["🏃 Running - 40 min", "💪 Weight Training - 60 min", "🧘 Meditation - 15 min"]
    };

    // Update user data dynamically
    document.getElementById("username").textContent = userData.username;
    document.getElementById("workoutCount").textContent = userData.workoutCount;
    document.getElementById("caloriesBurned").textContent = userData.caloriesBurned;
    document.getElementById("activeDays").textContent = userData.activeDays;

    // Update progress bar
    const progressBar = document.getElementById("progress");
    progressBar.style.width = userData.progressPercentage + "%";
    progressBar.textContent = userData.progressPercentage + "%";

    // Update upcoming workouts
    const workoutList = document.getElementById("workoutList");
    workoutList.innerHTML = userData.upcomingWorkouts.map(workout => `<li>${workout}</li>`).join("");
});
