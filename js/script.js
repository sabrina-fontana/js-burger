// input nome hamburger
var burgerName = document.getElementById('burger-name');
// checkbox ingredienti
var ingredientsCheckboxes = document.getElementsByClassName('ingredient-checkbox');
// button calculate
var button = document.getElementById('button-calculate');
var counterIngredients = 0;
// controllo che l'utente dia nome al suo hamburger
button.addEventListener('click', function() {
  if (burgerName.value === '') {
    alert('Devi dare un nome al tuo hamburger');
  }
  // aumento di 1 il counterIngredients ogni volta che l'utente checka un ingrediente
  for (var i = 0; i < ingredientsCheckboxes.length; i++) {
    if (ingredientsCheckboxes[i].checked) {
      counterIngredients += 1;
    }
  }
  // controllo che l'utente selezioni almeno 2 ingredienti
  if (counterIngredients < 2) {
    alert('Devi selezionare almeno 2 ingredienti');
  }
});
