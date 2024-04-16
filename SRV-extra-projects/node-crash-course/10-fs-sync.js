const {readFileSync, writeFileSync} = require('fs');

console.log('start');

const first = readFileSync('./content/first.txt' , 'utf8'); //utf8 je vec default pa ne treba nista
const second = readFileSync('./content/second.txt' , 'utf8'); //utf8 je vec default pa ne treba nista

// console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`); // ovo ce stvoriti/overwriteati result-sync.txt
writeFileSync('./content/result-sync.txt', `+++++++ dodatak`, {flag: 'a'}); // sada ce se appendati zbog zastavice 

// SINKRONO -- ide po redu sa izvodenjem i nece ici dalje dok se ove linije iznad ne dovrse 


console.log('done with the task');
console.log('onto the next one ');