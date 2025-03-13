document.addEventListener("DOMContentLoaded", function () {
    const workoutForm = document.getElementById("workoutForm");
    const workoutList = document.getElementById("workoutList");

    // Sample Data
    let workouts = [
        { name: "Push-ups", category: "Strength", duration: 15 },
        { name: "Running", category: "Cardio", duration: 30 },
    ];

    // Function to Display Workouts
    function renderWorkouts() {
        workoutList.innerHTML = "";
        workouts.forEach((workout, index) => {
            workoutList.innerHTML += `
                <tr>
                    <td>${workout.name}</td>
                    <td>${workout.category}</td>
                    <td>${workout.duration}</td>
                    <td>
                        <button class="edit-btn" onclick="editWorkout(${index})">✏️ Edit</button>
                        <button class="delete-btn" onclick="deleteWorkout(${index})">❌ Delete</button>
                    </td>
                </tr>
            `;
        });
    }

    // Add Workout
    workoutForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let newWorkout = {
            name: workoutForm.workoutName.value,
            category: workoutForm.workoutCategory.value,
            duration: workoutForm.workoutDuration.value
        };
        workouts.push(newWorkout);
        renderWorkouts();
        workoutForm.reset();
    });

    // Delete Workout
    window.deleteWorkout = function (index) {
        workouts.splice(index, 1);
        renderWorkouts();
    };

    // Initial Load
    renderWorkouts();
});
