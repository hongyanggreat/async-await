let square = (a, b, h) => (a + b) * h / 2;

// console.log('Dien tich: ' + square(2, 3, 2));

let add = (a, b, cb) => {
  setTimeout(() => {
    if(typeof a != 'number' || typeof b != 'number'){
      return cb(new Error('Tham so phai co kieu number'));
    }
    cb(undefined, a + b);
  }, 1000);
}
let multiply = (a, b, cb) => {
  setTimeout(() => {
    if(typeof a != 'number' || typeof b != 'number'){
      return cb(new Error('Tham so phai co kieu number'));
    }
    cb(undefined, a * b);
  }, 1000);
}
let divide = (a, b, cb) => {
  setTimeout(() => {
    if(typeof a != 'number' || typeof b != 'number'){
      return cb(new Error('Tham so phai co kieu number'));
    }
    if(b == 0) return cb(new Error('Chia cho 0'));
    cb(undefined, a / b);
  }, 1000);
}

// add(4, '5', (e, res) => {
//   if(e) return console.log('Loi: ' + e);
//   console.log('Ket qua: ' + res);
// });

let tinhDienTichHinhThang = (a, b, h, cb) => {
  add(a, b, (err, result) => {
    if(err) return cb(err);
    multiply(result, h, (err, result) => {
      if(err) return cb(err);
      divide(result, 2, (err, square) => {
        if(err) return cb(err);
        cb(undefined, square);
      });
    });
  });
}

tinhDienTichHinhThang(2, 3, '2', (err, result) => {
  if(err) return console.log(err.toString());
  console.log('Dien tich hinh thang la: ', result);
});
