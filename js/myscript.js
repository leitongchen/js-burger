// listener per permettere il caricamento della pagina html prima dello script
window.addEventListener('load', function () {

    // salvo il button "calculate" in una variabile
    var calculateBtn = document.getElementById('button');

    calculateBtn.addEventListener('click', onCalculate);

})

// funzione che contiene il codice che verrà eseguito solo dopo il caricamento della pagina
function onCalculate(event) {

    event.preventDefault();

    // salvo gli elementi 'ingredients' in un "array"
    var arrayIngredients = document.querySelectorAll('.ingredient .ingredient-checkbox');

    // salvo in una var ID per inserire prezzo nella pagina 
    var priceHere = document.getElementById('price');


    // array in cui pushare gli ingredienti checked
    var arrayChosenIngredients = []
    // variabile che contiene il calcolo del prezzo finale del burger
    var finalPrice = 50;
    for (var i = 0; i < arrayIngredients.length; i++) {
        var singleIngredient = arrayIngredients[i];

        if (isChecked(singleIngredient)) {

            arrayChosenIngredients.push(singleIngredient);

            finalPrice += parseInt(singleIngredient.value); 
        }
    }

    priceHere.textContent = finalPrice;

    

}

// funzione che verifica se l'ingrediente [checkbox] è checked
function isChecked(ingredient) {

    if (!ingredient.checked) {
        return false;
    }
    return true;

}