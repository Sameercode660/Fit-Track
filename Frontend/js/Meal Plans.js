document.addEventListener("DOMContentLoaded", function () {
    const mealPlans = {
        breakfast: [
            { name: "Oatmeal with Fruits", calories: "250 kcal", img: "/Frontend/img/Oatmeal with Fruits.jpg" },
            { name: "Scrambled Eggs & Toast", calories: "300 kcal", img: "/Frontend/img/Scrambled Eggs & Toast.jpg" }
        ],
        lunch: [
            { name: "Grilled Chicken Salad", calories: "400 kcal", img: "/Frontend/img/salad.jpg" },
            { name: "Brown Rice & Veggies", calories: "500 kcal", img: "/Frontend/img/Brown Rice & Veggies.jpg" }
        ],
        dinner: [
            { name: "Quinoa & Steamed Veggies", calories: "350 kcal", img: "/Frontend/img/Quinoa & Steamed Veggies.jpg" },
            { name: "Baked Fish & Spinach", calories: "450 kcal", img: "/Frontend/img/Baked Fish & Spinach.jpg" }
        ],
        snacks: [
            { name: "Banana & Peanut Butter", calories: "200 kcal", img: "/Frontend/img/Banana & Peanut Butter.jpg" },
            { name: "Greek Yogurt & Berries", calories: "180 kcal", img: "/Frontend/img/Greek Yogurt & Berries.jpg" }
        ]
    };

    const mealBtns = document.querySelectorAll(".meal-btn");
    const mealPlansContainer = document.getElementById("mealPlans");

    mealBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const category = btn.getAttribute("data-category");
            displayMeals(mealPlans[category]);
        });
    });

    function displayMeals(meals) {
        mealPlansContainer.innerHTML = "";
        meals.forEach(meal => {
            const mealCard = document.createElement("div");
            mealCard.classList.add("meal-card");
            mealCard.innerHTML = `
                <img src="${meal.img}" alt="${meal.name}">
                <h3>${meal.name}</h3>
                <p>${meal.calories}</p>
            `;
            mealPlansContainer.appendChild(mealCard);
        });
    }

    // Display default meals (Breakfast)
    displayMeals(mealPlans.breakfast);
});
