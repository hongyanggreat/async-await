let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                return reject(new Error("Lỗi truyền tham số"));
            }
            resolve(a + b);
        }, 2000);
    });
}
add('5', 1).then((res) => {
    console.log("kết quả là:" + res);
}, (err) => {
    console.log("Lỗi:" + err);
});
add(7, 6).then(res => console.log("kết quả là:" + res), err => console.log("Lỗi:" + err));