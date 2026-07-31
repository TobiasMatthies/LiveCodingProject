function init() {
    renderMeals();
    renderBasket();

    //Alternative:
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
    meal = meals[category].find((meal) => meal.title == title);
    let basketItem = itemExistsInBasket(meal);

    if (basketItem) {
        basketItem.amount += 1;
    }
    else {
        basketItems.push({ amount: 1, ...meal });
    }

    renderBasket();
}

function itemExistsInBasket(meal) {
    return basketItems.find(basketItem => basketItem.title == meal.title);

    // Alternative:
    //return itemExistsInBasketForEach(meal);
}


function renderBasket() {
    document.getElementById('basket-meals').innerHTML = '';

    for (const basketItem of basketItems) {
        document.getElementById('basket-meals').innerHTML += getBasketDishHTML(basketItem);
    }
    updatePrice();
}


function updatePrice() {
    const initialValue = 0;
    const subtotal = basketItems.reduce(
        (sum, currentItem) => sum + currentItem.price * currentItem.amount,
        initialValue
    );

    document.getElementById('subtotal').innerHTML = subtotal;
    document.getElementById('total').innerHTML = subtotal + 5;
}



// --- ALTERNATIVE SOLUTIONS ---


function renderMealsAlt() {
    for (const category of categories) {
        document.getElementById('meals').innerHTML += getCategoryHTML(category);

        let mealsForCategory = meals2.filter((meal) => meal.category == category);
        for (const meal of mealsForCategory) {
            document.getElementById(category + '-container').innerHTML += getMealHTML(meal);
        }
    }
}


function itemExistsInBasketForEach(meal) {
    itemExists = false;
    basketItems.forEach(basketItem => {
        if (basketItem.title == meal.title) {
            itemExists = true
        }
    });
    return itemExists;
}
