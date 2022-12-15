
const A1 = document.querySelector('#A1');
const windownotice = document.querySelector('#window-notice');
const cerrar = document.querySelector('#cerrar');




fA1 = function(){
  windownotice.style.display = 'flex';
}

A1.addEventListener=("click", fA1);


fcerrar = function(){
  windownotice.style.display = 'none';
}

cerrar.addEventListener=("click", fcerrar);

