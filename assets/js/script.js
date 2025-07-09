const lamp = document.getElementById('lamp');

const button = document.querySelector('.btn');

const text = button.querySelector('.text');

button.addEventListener('click', function() {

  if (button.classList.contains('btn-secondary')) {

button.classList.add('btn-warning');
button.classList.remove('btn-secondary');
lamp.src= './assets/img/lampon.png';
text.textContent = 'Spegni'; }

else {
button.classList.add('btn-secondary');
button.classList.remove('btn-warning');
lamp.src='./assets/img/lampoff.png';
text.textContent = 'Accendi';

}




} )