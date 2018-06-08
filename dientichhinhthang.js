let add = (a, b) => {
    console.log("Thuc hiện phép cộng");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                // return cb("Tham số truyền vào không hợp lệ");
                return reject(new Error('Tham số truyền vào không hợp lệ : cộng'));
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
                return reject(new Error('Tham số truyền vào không hợp lệ : nhân'));
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
                return reject(new Error('Tham số truyền vào không hợp lệ : chia'));
            }
            if (b == 0) {
                return reject(new Error('Chia cho 0'));
            }
            return resolve(a / b);
        }, 1000);
    });
}

let tinhDienTichHinhThang = (a, b, h) => {
    return new Promise((resolve, reject) => {
        add(a, b).then(res => multiply(res, h), (err) => {
            return reject(new Error(err));
        }).then(res1 => divide(res1, 2), (err) => {
            return reject(new Error(err));
        }).then(square => resolve("Kết Quả :::: " + square), (err) => {
            return reject(new Error(err));
        });
    });
}

let tinhDienTichHinhThang2 = (a, b, h) => {
    return new Promise((resolve, reject) => {
        add(a, b)
            .then(res => multiply(res, h))
            .then(res1 => divide(res1, 2))
            .then(square => resolve("Kết Quả :::: " + square)
            ).catch(err => reject(new Error(err)));
    });
}
let tinhDienTichHinhThang3 = (a, b, h) => {
    add(a, b)
        .then(res => multiply(res, h))
        .then(res => divide(res, 2))
        .then(square => console.log("Kết quả 3 : Diện tích hình thang là " + square))
        .catch(err => console.log("Lỗi:" + err));
}
let tinhDienTichHinhThang4 = (a, b, h) => {
    return add(a, b)
        .then(res => multiply(res, h))
        .then(res => divide(res, 2));
}

// tinhDienTichHinhThang(5, 6, 7).then(data => console.log("Kết Quả:" + data), err => console.log("Lỗi:" + err));
// tinhDienTichHinhThang2(5, "6", 7).then(data => console.log("Kết Quả:" + data), err => console.log("Lỗi:" + err));
// tinhDienTichHinhThang2("5", 6, 7).then(data => console.log("Kết Quả:" + data), err => console.log("Lỗi:" + err));
// tinhDienTichHinhThang2(5, 6, 7).then(data => console.log("Kết Quả:" + data), err => console.log("Lỗi:" + err));
tinhDienTichHinhThang3(5, 6, 7);
tinhDienTichHinhThang4('5', 6, 7)
    .then(square => console.log("Kết quả 4: Diện tích hình thang là " + square))
    .catch(err => console.log("Lỗi:" + err));