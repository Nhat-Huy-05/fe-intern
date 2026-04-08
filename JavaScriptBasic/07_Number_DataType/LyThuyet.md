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
| :-- | :-- |
| Number.isFinite() |
| Number.isInteger() |
| Number.parseFloat() |
| Number.parseInt() |
| Number.prototype.toFixed() |
| Number.prototype.toString() |
