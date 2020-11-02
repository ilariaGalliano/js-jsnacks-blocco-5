/**
 *
 * Jsnacks 5
 *
 */

 // JSnack 1

 // Creare un array di oggetti
 // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
 $(document).ready(function() {

   var bicycle = [
   {
     name: 'Mountain bike',
     weight: 12
   },
   {
     name:'Bmx',
     weight: 10
   },
   {
     name:'Downhill',
     weight: 15
   }
   ];

  // Compara bici
   var smallBicycle = bicycle[0];
   for (var i = 1; i < bicycle.length; i++) {

     if (bicycle[i].weight < smallBicycle.weight) {
       smallBicycle = bicycle[i];
     }
   }
   console.log(smallBicycle);

  // Stampare a schermo la bici con peso minore con handlebars.
  var source = $("#bicycle-template").html();
  var template = Handlebars.compile(source);

  var data = {
      name: smallBicycle.name,
      weight: smallBicycle.weight,
  };

  var html = template(data);
  $('.bicycles').append(html)

// JSnack 2

  // Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
  // Chiedere due numeri all'utente per definire la posizione iniziale
  var names = ['Luca','Marta','Lucia','Sara','Daniele','Eleonora'];
  var fix = names.length -1;
  var min = parseInt( prompt('inserisci un numero tra 0 e ' + fix).trim());
  var max = parseInt( prompt('inserisci un numero (più alto rispetto a prima) tra 0 e ' + fix).trim());

 // Il nuovo array deve contenere gli elementi dell'array originale
 // aventi la posizione (indice array) compresa tra i due numeri inseriti dall'utente.
  var newNames = [];
  for (var i = 0; i < names.length; i++) {
    if (min <= i && max >= i ) {
      newNames.push(names[i]);
    }
  }

  // Risultato
  console.log('Lista nomi completa : ' , names);
  console.log('Lista nomi posizioni richiste : ' , newNames);
  console.log('Posizioni richieste : ' , min , max);

// JSnack 3

// Creiamo un array di oggetti (scelti da voi)
var bicycle = [
 {
   name: 'Mountain bike',
   weight: 12
 },
 {
   name:'Bmx',
   weight: 10
 },
 {
   name:'Downhill',
   weight: 15
 }
 ];

console.table(bicycle);
// Creiamo una copia da questo array di partenza
// e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
// Non dobbiamo modificare l'array iniziale.
var newBicycle = [];

for (var i = 0; i < bicycle.length; i++) {
  var copyBicycle = {
    name: bicycle[i].name,
    weight: bicycle[i].weight,
    position: generatePosition()
  }
  newBicycle.push(copyBicycle);
};
  console.table(newBicycle);

  }); // <-- end doc ready

// Funzione per generare una lettera casuale
function generatePosition(){
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var letter = letters[getRandomInt(0, letters.length -1)];

  return letter;
}

// Funzione per generare un numero casuale
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
