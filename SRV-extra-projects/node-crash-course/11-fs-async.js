const {readFile, writeFile} = require('fs');

/* readFile('./content/first.txt', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
}) //dobijamo buffer jer nismo provideali utf kodiranje  */

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result; 
    readFile('./content/second.txt', 'utf8',(err, result) => {
        if(err){
        console.log(err);
        return;
    }
    const second = result; 
    writeFile('./content/result-async.txt', `Here is the result ${first}, ${second}`, (err, result) => {
        if(err){
            console.log(err);
            return; 
        }
        console.log('done with this task');
    });
    })
}) 
// stvorili smo callback hell

console.log('starting the next task');

//ASINKRONO -- prije ce ispisati starting the next task, cim pocne dio readFile ce se samo offloadati i nastaviti dalje 

