const path = require('path'); 
console.log(path.sep);


const filePath = path.join('/content', 'subfolder', 'nesto', 'test.txt')
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'extra_work', 'subfolder', 'text.txt');
console.log(absolute);