let fs = require('fs');

fs.readFile('./a.txt', 'utf-8', (err, data) => {
    if (err) return console.log("Err:" + err);
    console.log("DU LIEU:" + data);
});

let data = fs.readFileSync('./a.txt', 'utf-8');

console.log("DU LIEU DONG BO:" + data);

console.log("Ket thuc");
