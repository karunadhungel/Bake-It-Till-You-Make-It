function addIngredient() {

    let ingredient = document.createElement("div");

    ingredient.className = "ingredient";

    ingredient.innerHTML = `
        <input type="text" placeholder="Ingredient" class="name">
        <input type="number" placeholder="Quantity" class="quantity">
        <input type="text" placeholder="Unit" class="unit">
    `;

    document.getElementById("ingredients").appendChild(ingredient);
}


function getEmoji(name) {

    name = name.toLowerCase();

    if (name.includes("butter")) {
        return "🧈";
    }

    if (name.includes("egg")) {
        return "🥚";
    }

    if (name.includes("flour")) {
        return "🌾";
    }

    if (name.includes("sugar")) {
        return "🍚";
    }

    if (name.includes("milk")) {
        return "🥛";
    }

    if (name.includes("chocolate")) {
        return "🍫";
    }

    if (name.includes("strawberry")) {
        return "🍓";
    }

    if (name.includes("salt")) {
        return "🧂";
    }

    if (name.includes("vanilla")) {
        return "🍦";
    }

    return "🥣";
}

function toFraction(number) {

    let whole = Math.floor(number);
    let decimal = number - whole;

    let fraction = "";

    if (decimal == 0) {
        return whole;
    }

    if (decimal == 0.25) {
        fraction = "¼";
    } 
    else if (decimal == 0.5) {
        fraction = "½";
    } 
    else if (decimal == 0.75) {
        fraction = "¾";
    } 
    else if (decimal == 0.33) {
        fraction = "⅓";
    } 
    else if (decimal == 0.67) {
        fraction = "⅔";
    } 
    else {
        return number.toFixed(2);
    }

    if (whole == 0) {
        return fraction;
    }

    return whole + " " + fraction;
}
function scaleRecipe() {

    let originalServings = Number(
        document.getElementById("originalServings").value
    );

    let newServings = Number(
        document.getElementById("newServings").value
    );

    let ingredients = document.querySelectorAll(".ingredient");

    let results = document.getElementById("results");

    results.innerHTML = "";

    let scalingFactor = newServings / originalServings;

    ingredients.forEach(function(ingredient) {

        let name = ingredient.querySelector(".name").value;

        let quantity = Number(
            ingredient.querySelector(".quantity").value
        );

        let unit = ingredient.querySelector(".unit").value;

      let newQuantity = quantity * scalingFactor;

      newQuantity = toFraction(newQuantity);

        let emoji = getEmoji(name);

        results.innerHTML +=
            "<p>" + emoji + " " + newQuantity + " " + unit + " " + name + "</p>";
    });
}
