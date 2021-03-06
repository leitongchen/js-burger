// listener per permettere il caricamento della pagina html prima dello script
window.addEventListener('load', function () {

    // salvo il button "calculate" in una variabile
    var calculateBtn = document.getElementById('button');

    calculateBtn.addEventListener('click', onCalculate);
})

// funzione che contiene il codice che verrà eseguito solo dopo il caricamento della pagina
function onCalculate() {

    // salvo gli elementi 'INGREDIENTS' in un "array"
    var arrayIngredients = document.querySelectorAll('.ingredient .ingredient-checkbox');
    // salvo in una var ID per inserire prezzo nella pagina 
    var priceHere = document.getElementById('price');


    // raggiungo lo spazio input dove l'user inserisce il prezzo
    var discountBox = document.getElementById('coupon');
    // raggiungo i box dove inserire i messaggi output
    var messageBox = document.getElementById('message-box');
    var discountMessageBox = document.getElementById('discound-message');

    // variabile che contiene il calcolo del prezzo finale del burger
    var finalPrice = 50;
    for (var i = 0; i < arrayIngredients.length; i++) {
        var singleIngredient = arrayIngredients[i];

        if (isChecked(singleIngredient)) {

            finalPrice += parseInt(singleIngredient.value);
        }
    }

    // array che contiene i DISCOUNT COUPONS ACCETTATI
    var discountCoupons = ['APRILEDOLCEDORMIRE', 'HAMBURGERBUONITUTTOLANNO', 'ABOLIAMOLASENAPE', 'MAIOMESETUTTIIMESI'];

    //DISCOUNT
    // salvo in una var il CODICE DISCOUNT inserito dall'utente 
    var userDiscountCode = discountBox.value.toUpperCase();

    if (inputDetected(userDiscountCode)) {

        clearMessages(discountMessageBox, messageBox);

        if (verifiedDiscountCode(userDiscountCode, discountCoupons)) {
            discountMessageBox.innerHTML = "$10 discount applied."
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
function verifiedDiscountCode(discountCode, discountCouponsList) {


    for (var i = 0; i < discountCouponsList.length; i++) {
        var acceptedCode = discountCouponsList[i];

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