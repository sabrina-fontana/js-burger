// input nome hamburger
var burgerName = document.getElementById('burger-name');
var burgerError = document.getElementById('burger-error');
// checkbox ingredienti
var ingredientsCheckboxes = document.getElementsByClassName('ingredient-checkbox');
var ingredientsError = document.getElementById('ingredients-error');
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
  // // il prezzo totale iniziale e il counter ingredienti si ripristinano ogni volta che l'utente clicca il button
  total = 10;
  counterIngredients = 0;
  // controllo che l'utente dia u nome al suo hamburger
  if (burgerName.value === '') {
    burgerError.classList.add('burger-error-css');
    burgerError.innerHTML = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Devi dare un nome al tuo hamburger';
    totalPriceHTML.innerHTML = '€ ' + (10).toFixed(2);
  } else {
    burgerError.classList.remove('burger-error-css');
    burgerError.style.display = 'none';
    // aumento di 1 il counterIngredients ogni volta che l'utente checka un ingrediente
    for (var i = 0; i < ingredientsCheckboxes.length; i++) {
      if (ingredientsCheckboxes[i].checked) {
        counterIngredients += 1;
        total += parseInt(ingredientsCheckboxes[i].value);
      }
    }
    // controllo che l'utente selezioni almeno 2 ingredienti
    if (counterIngredients < 2) {
      ingredientsError.classList.add('ingredients-error-css');
      ingredientsError.innerHTML = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Devi selezionare almeno 2 ingredienti';
      totalPriceHTML.innerHTML = '€ ' + (10).toFixed(2);
    } else {
      ingredientsError.classList.remove('ingredients-error-css');
      ingredientsError.style.display = 'none';
      // se il codice sconto inserito è valido -> sconto 20%
      for (var i = 0; i < coupon.length; i++) {
        if (couponInserito.value === coupon[i]) {
          total = total * 0.8;
        }
        // else if (couponInserito.value.length > 1 && coupon.indexOf(couponInserito.value) === -1)
      }
    }
    totalPriceHTML.innerHTML = '€ ' + total.toFixed(2);
  }
});
