function getCategoryHTML(category) {
    return /*html*/`
        <div id="${category}-container">
            <h2 class="meal-category">${category}</h2>
        </div>
        `;
}

function getMealHTML(category, meal) {
    return `
                <div class="dish" id="${meal.title}-container">
                    <div>
                        <span style="margin-right: 10px">${meal.title}</span>
                        <span>${meal.price}</span>
                    </div>

                    <button class="add-to-basket-button" onclick="addToBasket('${category}', '${meal.title}')">+</button>
                </div>
            `;
}
