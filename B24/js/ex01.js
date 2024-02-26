//Bài 1
console.log("Bài 1:");
function tinhTong(...numbers) {
    let sum = 0;

    for (const num of numbers) {
        if (typeof num !== "number") {
            return "Lỗi: Các tham số phải là số";
        }

        sum += num;
    }

    return sum;
}

console.log(tinhTong(1, 2, 3));
console.log(tinhTong(1, "abc", 3));

//Bài 2
console.log("Bài 2:");
Number.prototype.getCurrency = function (currencySymbol) {
    return (
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "VND",
        }).format(this) +
        " " +
        currencySymbol
    );
};

String.prototype.getCurrency = function (currencySymbol) {
    const numberValue = parseFloat(this);
    if (isNaN(numberValue)) {
        return "Lỗi: Giá trị không hợp lệ";
    }

    return numberValue.getCurrency(currencySymbol);
};

var price1 = 12000;
console.log(price1.getCurrency("đ"));

var price2 = "12000000";
console.log(price2.getCurrency("đ"));

//Bài 4
console.log("Bài 4:");
Array.prototype.reduce2 = function (callback, initialValue) {
    if (this.length === 0 && initialValue === undefined) {
        throw new TypeError("Reduce of empty array with no initial value");
    }

    let accumulator = initialValue !== undefined ? initialValue : this[0];

    const startIndex = initialValue !== undefined ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce2((acc, current) => acc + current, 0);

console.log(sum);
