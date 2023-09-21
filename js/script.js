/*
  4. parte una funzione che dopo 5 secondi
    1. i numeri scompaiono
    2. compaiono 5 prompt dove inserire i numeri (crea un array)
  5. controlla se i numeri sono inclusi, quanti e quali e stmapa il messaggio
*/


const game = document.getElementById('game');
const result = document.getElementById('result');
const message = document.getElementById('message');
const btn = document.querySelector('.btn');

const limit = 99;
const howMuchNumbers = 5
let numbArr = []; 

reset();


// 1. Salvo il bottone in una variabile e gli associo un evento click
btn.addEventListener('click', init);


// 2. Al click partirà la funzione 
function init() {

  reset();

  numbsRandom();
  console.log(numbArr);



};

// 3. Costruisco una funzione reset per poter rigiocare il gioco 
function reset() {

  game.innerHTML = '';
  message.innerHTML = '';
  result.classList.add('hide');
  numbArr = [];

}


// 4. Costruisco una funzione che calcola 5 numeri random (crea un array) che inserisce nel div game
function numbsRandom () {

  for ( let i = 0; i < howMuchNumbers; i++ ) {

    let numb = randomize();
    numbArr.push(numb);

    game.innerHTML += `
    <span class="game m-0">${numb}</span>
    `;

  };

  return numbArr;

}

// 4.a.
function randomize() {

  return Math.ceil(Math.random() * (limit));

};


// 5. 