function daoNguocSo(so) {
    // Chuyển số thành chuỗi để có thể sử dụng các phương thức chuỗi
    let chuoiSo = so.toString();

    // Sử dụng phương thức Array.reverse để đảo ngược chuỗi
    let chuoiDaoNguoc = Array.from(chuoiSo).reverse().join("");

    // Chuyển chuỗi đã đảo ngược thành số và trả về
    return parseInt(chuoiDaoNguoc, 10);
}

// Ví dụ: Đảo ngược số 12345
let soCanDaoNguoc = 12345;
let ketQua = daoNguocSo(soCanDaoNguoc);
console.log("Kết quả sau khi đảo ngược: " + ketQua);
