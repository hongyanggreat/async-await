let add = (a, b) => {
    console.log("Thuc hiện phép cộng");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                // return cb("Tham số truyền vào không hợp lệ");
                return reject(new Error('Tham số truyền vào không hợp lệ'));
            }
            return resolve(a + b);
        }, 1000);
    });

}
let multiply = (a, b) => {
    console.log("Thuc hiện phép nhân");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                // return cb("Tham số truyền vào không hợp lệ");
                return reject(new Error('Tham số truyền vào không hợp lệ'));
            }
            return resolve(a * b);
        }, 1000);
    });

}
let divide = (a, b) => {
    console.log("Thuc hiện phép chia");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                // return cb("Tham số truyền vào không hợp lệ");
                return reject(new Error('Tham số truyền vào không hợp lệ'));
            }
            if (b == 0) {
                return reject(new Error('Chia cho 0'));
            }
            return resolve(a / b);
        }, 1000);
    });
}

let tinhDienTichHinhThang = (a, b, h) => {
    return new Promise((resolve,reject) => {
        add(a, b).then((res) => {
            multiply(res, h).then((res) => {
                divide(res, 2).then((res) => {
                    return resolve(res);
                }, (err) => {
                    return reject(new Error(err));
                });
            }, (err) => {
                return reject(new Error(err));
            });
        }, (err) => {
            return reject(new Error(err));
        });
    });
}

tinhDienTichHinhThang(5, 6, 7).then(data => console.log("Kết Quả:" + data), err => console.log("Lỗi:" + err));