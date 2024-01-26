function tinhGiaTriBieuThuc(N) {
    if (N === 1) {
        return 1;
    } else {
        return 1 / N + tinhGiaTriBieuThuc(N - 1);
    }
}

// Gọi hàm để tính giá trị của biểu thức với N là số phần tử
let N = 5; // Thay đổi giá trị của N nếu muốn tính với số phần tử khác
let ketQua = tinhGiaTriBieuThuc(N);

console.log("Giá trị của biểu thức với N =", N, "là", ketQua);
