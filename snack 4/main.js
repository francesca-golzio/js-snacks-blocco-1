/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

// Collect values
const odds = []
let numb;

// Ask 6 times to type a number
for(i=0; i < 6; i++){ 
  numb = prompt('Type a number');

  // Check if the number is odd
  if (numb % 2 == !0) {
    // if it is odd, push it to odds array
    odds.push(numb);
  } 

  console.log(numb);
  console.log(odds);
  
}


