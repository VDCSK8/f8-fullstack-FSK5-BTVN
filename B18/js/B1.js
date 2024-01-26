/*
        Bài 1: Tính tiền taxi
    Tính tiền cước taxi dựa vào các điều kiện sau
    Số km ≤ 1 giá 15000đ
    1 < số km ≤ 5 giá 13500đ
    Số km > 5 giá 11000đ
    Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền
 **/

var km = 121;
var money = 0;

if (km <= 1) {
    money = 15000 * km;
    console.log(`Số tiên taxi là: ${money}`);
} else if (1 < km && km <= 5) {
    money = 13500 * km;
    console.log(`Số tiên taxi là: ${money}`);
} else if (5 < km && km <= 120) {
    money = 11000 * km;
    console.log(`Số tiên taxi là: ${money}`);
} else {
    money = (11000 * km * 9) / 10;
    console.log(`Số tiên taxi là: ${money}`);
}
