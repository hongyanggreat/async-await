let fs = require('fs');

fs.readFile('./a.txt', 'utf8', (err, data) => {
  if(err) return console.log('Loi: ' + err);
  console.log('DU LIEU: ', data);
});

// let data = fs.readFileSync('./a.txt', 'utf8');
console.log(data);
console.log('Ket thuc');
