function organizeChristmasDinner(dishes) {
    let ingredientMap = [],
        orderedResult = [];

    for (let i = 0; i < dishes.length; i++) {
        let dish = dishes[i][0];

        for (let j = 1; j < dishes[i].length; j++) {
            let ingredient = dishes[i][j];
            if (ingredientMap[ingredient]) {
                ingredientMap[ingredient].push(dish);
            } else {
                ingredientMap[ingredient] = [dish];
            }
        }
    }

    for (let ingredient of Object.keys(ingredientMap).sort()) {
        if (ingredientMap[ingredient].length >= 2) {
            let ri = [ingredient];
            ingredientMap[ingredient].sort();
            ri = ri.concat(ingredientMap[ingredient]);
            orderedResult.push(ri);
        }
    }

    return orderedResult;
}