// Bài 5: Vẽ tam giác số
// Vẽ tam giác số sau với N dòng

// 1

// 2 3

// 4 5 6

// 7 8 9 10

// 11 12 13 14 15

function veTamGiacSo(N) {
    let soHienTai = 1;

    for (let i = 1; i <= N; i++) {
        let hang = "";

        for (let j = 1; j <= i; j++) {
            hang += soHienTai + " ";
            soHienTai++;
        }

        console.log(hang);
    }
}

// Gọi hàm với N là số dòng của tam giác
veTamGiacSo(5);
