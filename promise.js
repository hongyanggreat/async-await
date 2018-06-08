let aPromise = new Promise((resolve, reject) => {
    // resolve("thanh cong");
    setTimeout(() => {
        reject(new Error("Không thể kết nối"));
    }, 2000)
});

aPromise.then((data) => {
    console.log(data);
}, (errMess) => {
    console.log(errMess + "");
});