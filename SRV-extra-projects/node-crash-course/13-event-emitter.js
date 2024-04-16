const EventEmitter = require('events'); 

const customEmitter = new EventEmitter();
// on - listen for event, emit - emit the event

customEmitter.on('response', () => {
    console.log('data received ');
})
// mozemo imati neograniceno mnogo metoda za isti trigger
customEmitter.on('response', () => {
    console.log('some other logic here ');
})

// drugi argument je callback funkcija, odnosno ono sto ce se dogoditi kada se triggera response 

customEmitter.emit('response'); // ovim smo emitirali response i triggerali ga
// da smo stavili emitiranje iznad slusanja ne bi se nista dogodilo jer ga emitiramo prije nego sto ga krenemno slusati 

// mozemo slati argumente pri emitiranju 

customEmitter.on('response2', (name, id) => {
    console.log(`user ${name} with id: ${id}`);
})

customEmitter.emit('response2', 'john', 34)

