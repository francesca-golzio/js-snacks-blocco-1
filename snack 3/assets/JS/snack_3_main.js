/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


// Ask the User 10 times to type a number
// and store the values

let numbers = [];
console.log(numbers)

let newNumber

for(i=0; i<5; i++) {
  newNumber = Number(prompt('Type a number'));
  /*   console.log(newNumber); */  
  numbers.push(newNumber);
  console.log(numbers)
}

// Sum together all the numbers
// Print the sum

let summing;

for(let i = 0; i < numbers.length; i++) {

  summing = summing + numbers[i];

  console.log(numers[1]);
  console.log(summing);
  
   
}
 














