// Bài 3: Tính giá trị biểu thức

//S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)

var total = 0;
var n = 20;
for (; n > 0; n--) {
    total += n * (n + 1);
}

console.log(total);
