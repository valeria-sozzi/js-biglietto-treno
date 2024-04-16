//chiedere all'utente i chilometri
const km = parseInt(prompt('Inserire i km da percorrere'));

//chiedere l'età
const age = parseInt(prompt('inserire la tua età'));

//0,21€ a km
const price = km * 0.21;

// se minorenni -20%
const price_underage = price - (price * 20 / 100);

// se over 65 -40%
const price_over_65 = price - (price * 40 / 100);

if (age > 65) {
    document.getElementById('cost').innerHTML = `Il prezzo del biglietto calcolato è: ${price_over_65.toFixed(2)} €`
} else if (age < 18){
    document.getElementById('cost').innerHTML = `Il prezzo del biglietto calcolato è: ${price_underage.toFixed(2)}  €`
}else {
    document.getElementById('cost').innerHTML = `Il prezzo del biglietto calcolato è: ${price.toFixed(2)} €`
}





// prezzo con massimo 2 decimali