let fs = require('fs');
fs.readFile('./a.txt', 'utf-8', (err, data) => {
    if (err) return console.log("Err:" + err);
    console.log("DU LIEU:" + data);
});
let data = fs.readFileSync('./a.txt', 'utf-8');
console.log("DU LIEU DONG BO:" + data);

console.log("Ket thuc");

let promiseRead = new Promise((resolve, reject) => {
    fs.readFile('./x.txt', 'utf-8', (err, data) => {
        if (err) return reject(new Error(err));
        return resolve(data);
    });
});

let promiseRead2 = new Promise((resolve, reject) => {
    fs.readFile('./a.txt', 'utf-8', (err, data) => {
        if (err) return reject(new Error(err));
        return resolve(data);
    });
});

promiseRead.then(data => console.log("Promise:" + data), err => console.log("Error In Promise:" + err));
promiseRead2.then(data => console.log("Promise:" + data), err => console.log("Error In Promise:" + err));

let readFile = (fileName)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) return reject(new Error(err));
            return resolve(data);
        });
    });
}
readFile("./b.txt").then(data => console.log("Promise:" + data), err => console.log("Error In Promise:" + err));