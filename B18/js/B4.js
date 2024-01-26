// Bài 4: Viết hàm kiểm tra số nguyên tố
// Viết 1 hàm kiểm tra 1 số có phải số nguyên tố hay không?

// Hàm có 1 tham số là số cần kiểm tra
// Hàm có giá trị trả về
// Gọi hàm trong câu điều kiện if else

function checkPrime(number) {
    var result;
    if (number < 1) {
        result = `${number} không phải là số nguyên tố`;
    } else {
        var check = false;
        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                check = true;
                break;
            }
        }
        result = check
            ? `${number} không phải là số nguyên tố`
            : `${number} là số nguyên tố`;
    }
    return result;
}
console.log(checkPrime(2));
