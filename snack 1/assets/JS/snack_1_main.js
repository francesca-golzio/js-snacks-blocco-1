// snack 1
/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

// Ask User to choose 2 numbers (2 different Q)
// Store the answers

const first_number = prompt('Write a number');
const second_number = prompt('Write another number');
// Ho dimenticato di trasformare in numeri le stringhe, così:
/* const first_number = Number(prompt('Write a number'));
const second_number = Number(prompt('Write another number')); */

console.log(first_number, second_number);

// Check whitch number is bigger
if (first_number > second_number) {
  console.log(first_number);
} else if (first_number < second_number) {
  console.log(second_number);
} else {
  console.log('The two numbers are equal');
}
// Ho dimenticato di usare una const
/* const message = ''
if (first_number > second_number) {
  message = first_number + " is bigger";
  } else if (first_number < second_number) {
    message = second_number + " is bigger";
    } else {
      message = 'The two numbers are equal';
} 
    console.log(message)  
*/


// Print output

