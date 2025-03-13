document.addEventListener("DOMContentLoaded", function () {
    // Analytics Data
    let analyticsData = {
        totalUsers: 500,
        activeUsers: 350,
        newSignups: 50,
        workoutsCompleted: 1200
    };

    // Update Analytics Cards
    document.getElementById("totalUsers").textContent = analyticsData.totalUsers;
    document.getElementById("activeUsers").textContent = analyticsData.activeUsers;
    document.getElementById("newSignups").textContent = analyticsData.newSignups;
    document.getElementById("workoutsCompleted").textContent = analyticsData.workoutsCompleted;

    // User Growth Chart
    let userGrowthChart = new Chart(document.getElementById("userGrowthChart"), {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "User Growth",
                data: [50, 80, 150, 200, 350, 500],
                borderColor: "#00c853",
                backgroundColor: "rgba(0, 200, 83, 0.2)",
                fill: true
            }]
        }
    });

    // Workout Trends Chart
    let workoutTrendsChart = new Chart(document.getElementById("workoutTrendsChart"), {
        type: 'bar',
        data: {
            labels: ["Yoga", "Cardio", "Strength", "HIIT", "Pilates"],
            datasets: [{
                label: "Workouts Completed",
                data: [200, 400, 300, 250, 150],
                backgroundColor: ["#00c853", "#ffeb3b", "#ff5722", "#03a9f4", "#e91e63"]
            }]
        }
    });
});
