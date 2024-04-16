// Modules - enkapsulirani kod (only share minimum)
//      u commonJSu je svaki file modul po defaultu 

const names = require('./4-names'); // kad su vlastiti moduli uvijek mora poceti sa ./, kada vanjske module onda bez
const sayHi = require('./5-utils');
//console.log(names); --> svaki je objekt po defaultu modul, ispisat ce se sve one gluposti 

const data = require('./6-alternative-flavor'); // doslovno je isto ono napravljeno u 4 i u 6

require('./7-mind-grenade.js'); // ako imamo funkciju unutar modula koju smo pozvali u modulu, ona ce se pokrenuti iako je nismo pozvali u ovom programu

sayHi('susan');
sayHi(names.john);
sayHi(names.peter); 