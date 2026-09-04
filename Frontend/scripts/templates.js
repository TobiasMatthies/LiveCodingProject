const categoryLabels = {
    mainDishes: { icon: '🍔', label: 'Hauptgerichte' },
    desserts: { icon: '🍰', label: 'Desserts' },
    drinks: { icon: '🥤', label: 'Getränke' },
};

function getCategoryHTML(category) {
    const { icon, label } = categoryLabels[category] ?? { icon: '🍽️', label: category };
    return /*html*/`
        <h2 class="meal-category">${icon} ${label}</h2>
        <div id="${category}-container" class="meal-list"></div>
        `;
}

function getMealHTML(meal) {
    return `
                <div class="meal" id="${meal.title}-container">
                    <div class="meal-info">
                        <span class="meal-title">${meal.title}</span>
                        <span class="meal-price">${meal.price}$</span>
                    </div>

                    <button class="add-to-basket-button" onclick="addToBasket('${meal.id}')">+</button>
                </div>
            `;
}

function getBasketMealHTML(basketItem, index) {
    return `
        <div class="basketRow">
            <div class="basket-meal-info">
                <h4>${basketItem.title}</h4>
                <span>${basketItem.amount} × ${basketItem.price}$</span>
                <span class="line-total">Gesamt: ${basketItem.price * basketItem.amount}$</span>
            </div>
            <div class="basket-meal-controls">
                <button onclick="decreaseAmount(${index})">−</button>
                <button onclick="increaseAmount(${index})">+</button>
                <button class="remove-button" onclick="removeFromBasket(${index})">✕</button>
            </div>
        </div>
        `;
}
