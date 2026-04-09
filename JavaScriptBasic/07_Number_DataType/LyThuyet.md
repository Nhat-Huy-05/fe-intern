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
# Kiểu số(Number) trong JS.

1.  Tạo giá trị Number

- Các cách tạo

- Dùng cách nào? Tại sao?

- Kiểm tra data type

2. Làm việc với Number

- To string

- To Fixed
## 1.Tạo giá trị Number

- Các cách tạo:

+, **Cách 1**: Khai báo trực tiếp giá trị (Literal)

+, **Cách 2**: Sử dụng từ khoá `new Number()`: khởi tạo dưới dạng 1 đối tượng.

Ví dụ:
```javascript
// Cách 1: 
var age = 25;
var pi = 3.14;

// Cách 2: Object (Không khuyến khích)
var otherNumber = new Number(25);
```
- Dùng cách nào?

Nên dùng Literal (Cách 1):

Vì cách dùng `new Number()` sẽ tạo ra 1 object, làm chậm tốc độ thực thi code, gây ra lỗi khi so sánh = toán tử

Ví dụ: `25 == new Number(25)` là `true` nhưng `25 === new Number(25)` lại là `false`.
| Biến | Giá trị | Kiểu dữ liệu (Typeof) |
| :-- | :-- | :-- |
|25 | 25 | number |
|new Number(25) | 25 | object |

- Kiểm tra Data Type: `typeof`
```javascript
console.log(typeof age); // "number"
console.log(typeof pi);  // "number"

// Lưu ý về giá trị đặc biệt NaN (Not a Number)
var invalid = 10 / "Apple"; 
console.log(invalid);        // NaN
console.log(typeof invalid); // Vẫn là "number"!
```
Giải thích về `NaN`: Là 1 giá trị số k hợp lệ, kết quả của 1 phép toán số học thất bại.

khi lấy 10 / "Apple", JS cố gắng thực hiện phép chia.

"Apple" k thể chuyển thành số để chia được.

JS trả về 1 giá trị đặc biệt (NAN).

## 2.Làm việc với number

- To string (`toString()`)

Phương thức này chuyển đổi số thành 1 chuỗi(string). Dùng khi muốn nối chuỗi hoặc sử dụng các hàm của string.
```javascript
var myNumber = 100;
var myString = myNumber.toString();

console.log(myString); // "100"
console.log(typeof my String); //"String"
```
- To Fixed (`toFixed()`)

Dùng để làm tròn số thập phân.

 +, Nếu phần thập phân tiếp theo >= 5, nó sẽ làm tròn.

 +, Kết quả trả về là 1 chuỗi(string).
 ```javascript
 var price = 12,5678;
 
 console.log(price.toFixed()); //"13" Làm tròn thành số nguyên.
 console.log(price.toFixed(1)); //"12.6"
 console.log(price.toFixed(2)); //"12.57"

 var money = 10.5;
 console.log(money.toFixed(2)); //"10.50"
 ```


