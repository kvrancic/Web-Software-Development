/* GLOBALS - NO WINDOW jer nismo u browseru!! -- medutim imamo neke varijable koje uvijek oznacavaju isto 
__dirname - path to current directory 
__filename 
require - funkcija za koristenje modula 
module - info o trenutnim modulima 
process - info o environmentu gdje se program izvrsava */

console.log(__dirname);
setInterval(() => {
    console.log('hello world')
}, 1000)
