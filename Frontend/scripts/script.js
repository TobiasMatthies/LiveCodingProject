async function init() {
    renderMeals();
    renderBasket();


    let meals = await fetch('http://127.0.0.1:8000/api/meals/')
    let mealsJson = await meals.json()
    console.log(mealsJson);
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

    if (basketItems.length === 0) {
        document.getElementById('basket-meals').innerHTML = '<p class="basket-empty">Dein Warenkorb ist leer</p>';
    }

    basketItems.forEach((basketItem, index) => {
        document.getElementById('basket-meals').innerHTML += getBasketMealHTML(basketItem, index);
    });
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

function order() {
    basketItems = [];
    renderBasket();

    document.getElementById('basket-meals').innerHTML = '<p class="order-confirmation">✅ Vielen Dank für deine Bestellung!</p>';
    setTimeout(() => {
        renderBasket();
    }, 2000);
}

function increaseAmount(basketIndex) {
    let basketItem = basketItems[basketIndex];
    basketItem.amount += 1;
    renderBasket();
}

function decreaseAmount(basketIndex) {
    let basketItem = basketItems[basketIndex];
    basketItem.amount -= 1;

    if (basketItem.amount < 1) return removeFromBasket(basketIndex);
    renderBasket();
}

function removeFromBasket(basketIndex) {
    basketItems.splice(basketIndex, 1);
    renderBasket();
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
