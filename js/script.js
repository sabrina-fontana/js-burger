// input nome hamburger
var burgerName = document.getElementById('burger-name');
// checkbox ingredienti
var ingredientsCheckboxes = document.getElementsByClassName('ingredient-checkbox');
// button calculate
var button = document.getElementById('button-calculate');
var counterIngredients = 0;
// prezzo totale
var total = 10;
var totalPriceHTML = document.getElementById('total-price');
totalPriceHTML.innerHTML = '€ ' + 10;
// ! AL CLICK SU BUTTON
button.addEventListener('click', function() {
  // controllo che l'utente dia nome al suo hamburger
  if (burgerName.value === '') {
    alert('Devi dare un nome al tuo hamburger');
  }
  // // il prezzo totale si ripristina a 10 ogni volta che l'utente clicca il button
  total = 10;
  // aumento di 1 il counterIngredients ogni volta che l'utente checka un ingrediente
  for (var i = 0; i < ingredientsCheckboxes.length; i++) {
    if (ingredientsCheckboxes[i].checked) {
      counterIngredients += 1;
      total += parseInt(ingredientsCheckboxes[i].value);
    }
  }
  totalPriceHTML.innerHTML = '€ ' + total;
  // controllo che l'utente selezioni almeno 2 ingredienti
  if (counterIngredients < 2) {
    alert('Devi selezionare almeno 2 ingredienti');
  }
});
