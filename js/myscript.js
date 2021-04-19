// listener per permettere il caricamento della pagina html prima dello script
window.addEventListener('load', function () {

    // salvo il button "calculate" in una variabile
    var calculateBtn = document.getElementById('button');

    calculateBtn.addEventListener('click', onCalculate);
})

// funzione che contiene il codice che verrà eseguito solo dopo il caricamento della pagina
function onCalculate(event) {

    //event.preventDefault();

    // salvo gli elementi 'INGREDIENTS' in un "array"
    var arrayIngredients = document.querySelectorAll('.ingredient .ingredient-checkbox');
    // salvo in una var ID per inserire prezzo nella pagina 
    var priceHere = document.getElementById('price');


    // raggiungo lo spazio input dove l'user inserisce il prezzo
    var discountBox = document.getElementById('coupon');

    var messageBox = document.getElementById('message-box');
    var discountMessageBox = document.getElementById('discound-message');


    // array in cui pushare gli ingredienti checked
    //var arrayChosenIngredients = []

    // variabile che contiene il calcolo del prezzo finale del burger
    var finalPrice = 50;
    for (var i = 0; i < arrayIngredients.length; i++) {
        var singleIngredient = arrayIngredients[i];

        if (isChecked(singleIngredient)) {

            //arrayChosenIngredients.push(singleIngredient);

            finalPrice += parseInt(singleIngredient.value);
        }
    }

    //DISCOUNT

    // salvo in una var il CODICE DISCOUNT inserito dall'utente 
    var userDiscountCode = discountBox.value.toUpperCase();

    if (inputDetected(userDiscountCode)) {

        clearMessages(discountMessageBox, messageBox);

        if (verifiedDiscountCode(userDiscountCode)) {
            discountMessageBox.innerHTML = "È stato applicato uno sconto di $10."
            priceHere.textContent = finalPriceDiscount(finalPrice);
        } else {
            messageBox.innerHTML = "Your discount code is expired or invalid. <br> Please double check for typing errors."
            priceHere.textContent = finalPrice;
        }

    } else {

        priceHere.textContent = finalPrice;
        clearMessages(discountMessageBox, messageBox);

    }
}

// funzione che verifica se l'ingrediente [checkbox] è checked
function isChecked(ingredient) {

    if (!ingredient.checked) {
        return false;
    }
    return true;

}

// funzione che verifica se è stato inserito un codice sconto 
function inputDetected(textSpace) {

    if (textSpace !== "") {
        return true;
    }
    return false;
}

// function che calcola lo sconto con l'inserimento del coupon
// sconto di 10$ 
function finalPriceDiscount(inizialAmount) {

    var finalPrice = inizialAmount - 10;

    return finalPrice;

}

//funzione che verifica il discount code con quelli accettati nell'array
function verifiedDiscountCode(discountCode) {

    // array che contiene i DISCOUNT COUPONS ACCETTATI
    var discountCoupons = ['APRILEDOLCEDORMIRE', 'HAMBURGERBUONITUTTOLANNO', 'ABOLIAMOLASENAPE', 'MAIOMESETUTTI I MESI']

    for (var i = 0; i < discountCoupons.length; i++) {
        var acceptedCode = discountCoupons[i];

        if (discountCode === acceptedCode) {

            return true;
        }
    }
    return false;
}


// funzione che resetta i messaggi 
function clearMessages(firstMsg, secondMsg) {

    firstMsg.innerHTML = "";
    secondMsg.innerHTML = "";

}