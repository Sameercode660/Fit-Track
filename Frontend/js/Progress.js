document.addEventListener("DOMContentLoaded", function () {
    // Weight Progress Chart
    const weightCtx = document.getElementById('weightChart').getContext('2d');
    new Chart(weightCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Weight (kg)',
                data: [80, 78, 76, 75, 73],
                backgroundColor: 'rgba(0, 150, 36, 0.2)',
                borderColor: '#009624',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Calories Burned Chart
    const caloriesCtx = document.getElementById('caloriesChart').getContext('2d');
    new Chart(caloriesCtx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'Calories Burned',
                data: [200, 250, 300, 350, 400],
                backgroundColor: '#00c853',
                borderColor: '#009624',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
