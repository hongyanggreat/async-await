let add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a != "number" || typeof b !="number") {
        return reject(new Error ('Tham so phai la kieu number PHEP CONG'));
      }
      resolve(a + b);
    }, 2000);
  });
}
let multiply = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a != "number" || typeof b !="number") {
        return reject(new Error ('Tham so phai la kieu number PHEP NHAN'));
      }
      resolve(a * b);
    }, 1000);
  });
}

// Promise.all([multiply(4, '5'), add(4, '5')])
// .then(res => console.log(res))
// .catch(e => console.log(e + ''));

Promise.race([multiply(4, 5), add(4, '5')])
.then(res => console.log(res))
.catch(e => console.log(e + ''));
