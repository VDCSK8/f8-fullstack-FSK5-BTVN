function soThanhChu(so) {
    const donVi = [
        "",
        "một",
        "hai",
        "ba",
        "bốn",
        "năm",
        "sáu",
        "bảy",
        "tám",
        "chín",
    ];
    const hangChuc = [
        "",
        "mười",
        "hai mươi",
        "ba mươi",
        "bốn mươi",
        "năm mươi",
        "sáu mươi",
        "bảy mươi",
        "tám mươi",
        "chín mươi",
    ];

    if (so === 0) {
        return "Không";
    }

    let chuoiChu = "";

    if (so >= 1000) {
        chuoiChu += donVi[Math.floor(so / 1000)] + " nghìn ";
        so %= 1000;
    }

    if (so >= 100) {
        chuoiChu += donVi[Math.floor(so / 100)] + " trăm ";
        so %= 100;
    }

    if (so >= 10 && so <= 19) {
        chuoiChu += "mười " + donVi[so % 10];
    } else {
        chuoiChu += hangChuc[Math.floor(so / 10)];
        if (so % 10 !== 0) {
            chuoiChu += " " + donVi[so % 10];
        }
    }

    return chuoiChu.trim();
}

// Ví dụ: Chuyển số 4298 thành chữ
let soCanChuyen = 4298;
let ketQua = soThanhChu(soCanChuyen);
console.log("Kết quả chuyển đổi: " + ketQua);
