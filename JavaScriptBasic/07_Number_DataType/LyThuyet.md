# Kiểu số - Number:

- `Number`: Dùng cho tất cả các số(số nguyên, số thập phân).
- `Bigint`: Dùng cho các số nguyên cực kỳ lớn mà kiểu `Number` không thể biểu diễn chính xác được(thêm chữ `n` ở cuối số).

## Cách khai báo:
```javascript
var number = 123;

//có thể thêm chữ e vào sau số đó để chỉ định số không sau chữ e:
var number = 2e3;
console.log(number);// thêm 3 số 0 vào.
```
## Đối tượng Number:
| Phương thức | Vai trò |
| :- | :- |
| Number.isFinite() | Xác định xem gtri đó là số hữu hạn hay không. Trả về Boolean(T/F) |
| Number.isInteger() | Xác định gtri đó là số nguyên hay không. Trả về Boolean(T/F) |
| Number.parseFloat() | Chuyển đổi chuỗi đã cho thành số dấu phẩy động |
| Number.parseInt() | Chuyển đổi chuỗi đã cho thành số nguyên |
| Number.prototype.toFixed() | Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân |
| Number.prototype.toString() | Chuyển đổi và trả về số dưới dạng chuỗi |
Ví dụ:
```javascript
Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

Number.parseInt('10') // 10
Number.parseInt('10.00') // 10
Number.parseInt('238,21') // 238
Number.parseInt('237.22') // 237
Number.parseInt('34 56 78') // 34
Number.parseInt(' 37 ') // 37
Number.parseInt('18 is my age') // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString();    // '11'
(18).toString();     // '18'
(17.3).toString();   // '17.3'
```
