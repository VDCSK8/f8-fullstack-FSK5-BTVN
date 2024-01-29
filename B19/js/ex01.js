function fibonacci(n, a = 0, b = 1, result = []) {
    if (n > 0) {
        result.push(a);
        fibonacci(n - 1, b, a + b, result);
    }
    return result;
}

// Gán giá trị N
var n = 10;

// Hiển thị N số Fibonacci đầu tiên
var fibonaciList = fibonacci(n);
console.log(
    "Danh sách " + n + " số Fibonacci đầu tiên: " + fibonaciList.join(", ")
);
