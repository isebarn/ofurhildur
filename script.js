const trails = [
    "https://www.ahotu.com/event/the-puffin-run",
    "https://www.ahotu.com/event/dyrfjallahlaup", 
    "https://www.ahotu.com/event/laugavegur-ultra-marathon",
    "https://www.ahotu.com/event/fire-and-ice-iceland"
];

const recipes = [
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/microwave-chocolate-cake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/mary-berrys-orange-layer-cake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/lemon-drizzle-cake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/grannys-victoria-sponge",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/chococcino-cake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/sponge-cake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/microwave-mug-cake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/orange-drizzle-cake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/cherry-bakewell-cake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/fruity-sponge-cake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/naughty-chocolate-fudge-cake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/microwave-peanut-butter-and-jam-brownies",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/raspberry-cake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/coffee-cake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/tottenham-cake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/blood-orange-poppy-drizzle-muffins",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/lemon-curd-orange-cake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/vegan-lemon-cake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/microwave-coffee-walnut-cake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/lindas-fruity-traybake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/vegan-banana-peanut-butter-cupcakes",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/vegan-mug-cake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/raspberry-bakewell-cake",
    "https://www.justtherecipe.com/?url=https://www.bbcgoodfood.com/recipes/cappuccino-cake"
    ]

function showMessage() {
    const randomIndex = Math.floor(Math.random() * trails.length);
    const randomTrail = trails[randomIndex];
    window.open(randomTrail, '_blank');
}

function showRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];
    window.open(randomRecipe, '_blank');
}
