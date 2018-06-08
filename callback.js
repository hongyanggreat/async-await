//muốn tính diện tích hình thang : Đáy lơn đáy nhỏ ta đêm cộng vào ,công vào nhân với chiều cao,chia đôi lấy nửa thể nào cũng ra

// let trapezium = (a, b, h) => (a + b) * h / 2;
// console.log("Diện tích hình thang:" + trapezium(4, 6, 8));


let add = (a, b, cb) => {
    console.log("Thuc hiện phép cộng");
    
    setTimeout(() => {
        if (typeof a != "number" || typeof b != "number") {
            // return cb("Tham số truyền vào không hợp lệ");
            return cb(new Error('Tham số truyền vào không hợp lệ'));
        }
        return cb(undefined, a + b);
    }, 1000);
    
}
let multiply = (a, b, cb) => {
    console.log("Thuc hiện phép nhân");
    setTimeout(() => {
        if (typeof a != "number" || typeof b != "number") {
            return cb(new Error('Tham số truyền vào không hợp lệ'));
        }
        return cb(undefined, a * b);
    }, 1000);
    
}
let divide = (a, b, cb) => {
    console.log("Thuc hiện phép chia");
    setTimeout(() => {
        if (typeof a != "number" || typeof b != "number") {
            return cb(new Error('Tham số truyền vào không hợp lệ'));
        }
        if (b == 0) {
            return cb(new Error('Chia cho 0'));
        }
        return cb(undefined, a / b);
    }, 1000);

}

// add(4, "9", (err, res) => {
//     if (err) return console.log("Lỗi:" + err);
//     return console.log("kết quả:" + res);
// });
// add(4, 7, (err, res) => {
//     if (err) return console.log("Lỗi:" + err);
//     return console.log("kết quả:" + res);
// });
let tinhDienTichHinhThang = (a, b, h, cb) => {
    add(a, b, (err, res) => {
        if (err) return cb(err);
        multiply(res, h, (err, res) => {
            if (err) return cb(err);
            divide(res, 2, (err, square) => {
                if (err) return cb(err);
                cb(undefined,square);
            })
        })
    })
}

tinhDienTichHinhThang(5, 6, 7, (err, res) => {
    if (err) return console.log("Lỗi :" + err);
    console.log("Diện tích hình thang:" + res);

})