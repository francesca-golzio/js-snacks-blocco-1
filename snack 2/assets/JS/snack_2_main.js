// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga. 

/* Ask User to type 2 words (two prompst one for each word) */
/* Save answers in a var */

const word_1 = prompt('Type a word');
const word_2 = prompt('Type another word');
console.log(word_1, word_2);


/* Compare strings length */
let message = ''
if(word_1.length > word_2.length) {
  message = '"' + word_1 + '"' + ' is longer than ' + '"' + word_2 + '"';
} else if(word_1.length < word_2.length) {
  message = word_2 + ' is longer than ' + word_1;
} else {
  message = 'The two words have the same length'
}

/* Print the longest word, then print the shortest one */

console.log(message);

// Nota post correzione:
// potevo usare i backtick e i $ per generare il message