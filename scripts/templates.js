function getCategoryHTML(category) {
    return /*html*/`
        <div id="${category}-container">
            <h2 class="meal-category">${category}</h2>
        </div>
        `;
}

function getMealHTML(category, meal) {
    return `
                <div class="meal" id="${meal.title}-container">
                    <div>
                        <span style="margin-right: 10px">${meal.title}</span>
                        <span>${meal.price}</span>
                    </div>

                    <button class="add-to-basket-button" onclick="addToBasket('${category}', '${meal.title}')">+</button>
                </div>
            `;
}

function getBasketMealHTML(basketItem, index) {
    return `
        <div class="basketRow">
            <div class="basket-meal-info">
                <h4>${basketItem.title}</h4>
                <span style="margin-right: 10px">Price: ${basketItem.price}$</span>
                <span>Amount: ${basketItem.amount}</span>

                <br/>
                <span>Gesamt: ${basketItem.price * basketItem.amount}$</span>
            </div>
            <div class="basket-meal-controls">
                <button onclick="decreaseAmount(${index})">-</button>
                <button onclick="increaseAmount(${index})">+</button>
                <button onclick="removeFromBasket(${index})">X</button>
            </div>
        </div>
        `;
}
