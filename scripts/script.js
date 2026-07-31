function init() {
    renderMeals();
    //renderMealsAlt();
}

function renderMeals() {
    for (const category in meals) {
        document.getElementById('meals').innerHTML += getCategoryHTML(category);

        for (const meal of meals[category]) {
            document.getElementById(category + '-container').innerHTML += getMealHTML(category, meal);
        }
    }
}

function addToBasket(category, title) {
    meal = meals[category].find((dish) => dish.title == title)
    basketDishes.push({ amount: 1, ...meal });

    renderBasket();
}

function renderBasket() {
    document.getElementById('basket-meals').innerHTML = '';

    for (const basketDish of basketDishes) {
        document.getElementById('basket-meals').innerHTML += `
        <div>
        <span>${basketDish.title}</span>
        <span>${basketDish.price}</span>
        <span>${basketDish.amount}</span>
        </div>
        `;
    }
}


// ALTERNATIVE
function renderMealsAlt() {
    for (const category of categories) {
        document.getElementById('meals').innerHTML += getCategoryHTML(category);

        let mealsForCategory = meals2.filter((meal) => meal.category == category);
        for (const meal of mealsForCategory) {
            document.getElementById(category + '-container').innerHTML += getMealHTML(meal);
        }
    }
}
