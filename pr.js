let aPromise = new Promise((resolve, reject) => {
  // resolve("Thanh cong");
  setTimeout(() => {
    //reject(new Error('Khong the ket noi toi server'));
    resolve('Thanh cong')
  }, 2000);
});

aPromise.then((msg) => console.log('Da thuc thi:' + msg),
(errMsg) => console.log(errMsg + ''));
