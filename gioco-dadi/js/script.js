// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// -generare numero random per giocatore
let randomPlayer = Math.floor(Math.random()*6 + 1);
console.log(randomPlayer);
// -generare n random per computer
let randomComputer = Math.floor(Math.random()*6 + 1);
console.log(randomComputer);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// -creare una condizione per stabilire il vincitore

if (randomComputer > randomPlayer) {
    console.log(`Computer ${randomComputer} VS TE ${randomPlayer} :-( hai perso`);
} else if (randomComputer === randomPlayer) {
    console.log(`Computer ${randomComputer} e TE ${randomPlayer} :-| pari`);
} else {
    console.log(`Computer ${randomComputer} VS TE ${randomPlayer} ;-) HAI VINTO!`);
}

