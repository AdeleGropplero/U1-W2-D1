/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* I principali datatype sono 3: Stringhe, numeri e booleani.
   1) La stringa indica, sempre all'interno degli apici singoli o doppi (' ' o " "),
      o un singolo carattere o un insieme di caratteri. 
      Per es. ("3", "b", "Ciao!", "0.5", "-12", "Ciao, mi chiamo Adele", " ") 
      (nell'ultimo esempio vediamo come anche lo spazzio sia un carattere purchè sia dentro gli apici)
      
   2) Il dato numerico invece viene inserito SENZA apici e non c'è distinzione tra numero intero (es. 5) 
      e decimale (es. 4.89). Per indicare il decimale usiamo SEMPRE il punto (.) e mai la virgola,
      la quale ha un altro tipo di funzione.

   3) Il Boolean o Booleano rispetto ai primi due esempi ha due soli valori: True or False (Vero o Falso).
      In genere il boolean risulta come conseguenza di alcuni "statement" o al verificarsi di alcune 
      condizioni che posso risultare appunto vere o false. Li vedremo utilizzati più avanti per far 
      prendere delle decisioni al nostro codice.
      Per fare alcuni esempi: */
const myAge = 26;
console.log("Is my age greater than 25?", myAge > 25);
/* Nella console del browser visualizzeremo: Is my age greater than 25? true */
console.log("Is my age less than 25?", myAge < 25);
/* Nella console del browser visualizzeremo: Is my age less than 25? false
   Fine esempio. */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myName = "Adele";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* Oggi a lezione abbiamo visto 2 modi per eseguire questa operazione: la versione estesa e "abbreviata" */
const number1 = 12;
let number2 = 20; /* in questo caso ho usato -let- perchè l'esempio successivo 
                                      va a cambiare il valore di numberSum, cosa non possibile 
                                      con la variabile -const- */
/* Versione estesa */
const numberSum = number1 + number2;
console.log("Sum between number1 + number2: ", numberSum);
/* Versione "abbreviata" con operatore aritmetico avanzato di somma += */
/* Per fare questo esempio andiamo a sovrascrivere il valore di number2 */
number2 += number1;
console.log(
  "Nuovo number2 dopo addizione con operatore numerico avanzato: ",
  number2
);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const x = number1;
console.log("Valore di x: ", number1);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA
   Non posso riassegnare un valore con variabile Const, poichè è appunto costante. */
//myName = Gropplero;
/* Uncaught ReferenceError: Gropplero is not defined
    <anonymous> http://127.0.0.1:5500/U1-W2-D1/D1.js:79     tipo di errore dato dal tentativo,
                                                             ho poi proceduto a commentarlo 
                                                             per rimuovere l'errore*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numberSub = 4 - x;
console.log("4 - variabile x: ", numberSub); /* da come risultato -8 */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name1 = "john";
const name2 = "John";
console.log(
  name1 === name2
); /* Ho verificato se fossero STRETTAMENTE uguali e l'output in console
                                  è risultato giustamente falso. Provando la disuguaglianza stretta (!==) 
                                  il risultato sarebbe stato vero. */

console.log(
  name1 !== name2.toLowerCase()
); /* Aggiungendo ".toLowerCase" lo statement risulta falso, 
                                             in quanto mi ha modificato il secondo nome tutto in minuscolo. */
