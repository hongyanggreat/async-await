let add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a != "number" || typeof b !="number") {
        return reject(new Error ('Tham so phai la kieu number'));
      }
      resolve(a + b);
    }, 2000);
  });
}
let multiply = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a != "number" || typeof b !="number") {
        return reject(new Error ('Tham so phai la kieu number'));
      }
      resolve(a * b);
    }, 2000);
  });
}
let divide = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a != "number" || typeof b !="number") {
        return reject(new Error ('Tham so phai la kieu number'));
      }
      if(b === 0) return reject (new Error('Chia cho so 0'))
      resolve(a / b);
    }, 2000);
  });
}

//async await babel

let tinhDienTich = (a, b, h) => {
  return add(a, b)
  .then(res => multiply(res, h))
  .then(result => divide(result, 2))
}

tinhDienTich(6, 4, '5')
.then(square => console.log('Dien tich hinh thang = ' + square))
.catch(err => console.log(err + ''))
(4 + 5) + 6

// add('4', 5)
// .then(res => add(res, 6))
// .then(result => console.log('ket qua la:' + result))
// .catch(err => console.log('Loi: ' + err))
