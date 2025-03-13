document.addEventListener("DOMContentLoaded", function () {
    // Fake API Data (Replace with real API calls)
    const dashboardData = {
        totalUsers: 1200,
        totalWorkouts: 350,
        totalRevenue: 150000,
        totalSubscriptions: 450
    };

    // Updating Dashboard Stats
    document.getElementById("totalUsers").textContent = dashboardData.totalUsers;
    document.getElementById("totalWorkouts").textContent = dashboardData.totalWorkouts;
    document.getElementById("totalRevenue").textContent = "₹" + dashboardData.totalRevenue.toLocaleString();
    document.getElementById("totalSubscriptions").textContent = dashboardData.totalSubscriptions;

    // Chart.js for Revenue Graph
    var ctx = document.getElementById('revenueChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: 'Monthly Revenue (₹)',
                data: [20000, 25000, 40000, 35000, 45000, 50000],
                borderColor: '#00c853',
                borderWidth: 2,
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
