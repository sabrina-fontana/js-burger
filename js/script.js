// input nome hamburger
var burgerName = document.getElementById('burger-name');
// checkbox ingredienti
var ingredientsCheckboxes = document.getElementsByClassName('ingredient-checkbox');
// codici sconto
var coupon = ['coupon2020', 'sconto20', 'coupon20%'];
var couponInserito = document.getElementById('coupon-inserito');
// button calculate
var button = document.getElementById('button-calculate');
var counterIngredients = 0;
// prezzo totale iniziale
var total = 10;
var totalPriceHTML = document.getElementById('total-price');
totalPriceHTML.innerHTML = '€ ' + (10).toFixed(2);
// ! AL CLICK SU BUTTON
button.addEventListener('click', function() {
  // controllo che l'utente dia nome al suo hamburger
  if (burgerName.value === '') {
    alert('Devi dare un nome al tuo hamburger');
  } else {
    // // il prezzo totale iniziale si ripristina a 10 ogni volta che l'utente clicca il button
    total = 10;
    // aumento di 1 il counterIngredients ogni volta che l'utente checka un ingrediente
    for (var i = 0; i < ingredientsCheckboxes.length; i++) {
      if (ingredientsCheckboxes[i].checked) {
        counterIngredients += 1;
        total += parseInt(ingredientsCheckboxes[i].value);
      }
    }
    // controllo che l'utente selezioni almeno 2 ingredienti
    if (counterIngredients < 2) {
      alert('Devi selezionare almeno 2 ingredienti');
    }
    // se il codice sconto inserito è valido -> sconto 20%
    for (var i = 0; i < coupon.length; i++) {
      if (couponInserito.value === coupon[i]) {
        total = total * 0.8;
      }
    }
    totalPriceHTML.innerHTML = '€ ' + total.toFixed(2);
  }
});
