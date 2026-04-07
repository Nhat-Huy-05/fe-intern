# Chuỗi trong JS

1. Tạo chuỗi
    - Các cách tạo chuỗi
    - Nên dùng cách nào? Lý do?
    - Kiểm tra data type
2. Một số case sử dụng backslash(\)
3. Xem độ dài chuỗi
4. Chú ý độ dài viết code
5. Template string ES6

## 1.Các cách tạo chuỗi

Trong JS, ta có 3 cách chính khởi tạo chuỗi:

- Nháy đơn: `'Hello World'`
- Nháy kép: `"Hello World"`
- Template String(Backticks): \`Hello World` (Dấu huyền)

**Lưu ý**: có cách sử dụng từ khoá `new String()`,nhưng sẽ tạo ra 1 `Object`, không phải kiểu dl
nguyên thuỷ, ít khi sử dụng.

Ví dụ:
```javascript
var fullName = 'Nhat Huy'; //1.
var fullName = new String('Nhat Huy'); //2.
alert(fullName);
console.log(typeof fullName);
/*Sự khác nhau giữa 2 cách: cách 2 dài dòng hơn, sẽ khác kiểu dl
 nó sẽ khác nhau giữa kiểu dl, cái 1 sẽ là string,
 còn cái 2 được hiểu là object 
 Recommend: xài cách 1
 */
```
## 2.Nên dùng cách nào? Lý do?
1. Nháy đơn (`'`): Code sạch, dễ đọc.
2. Backticks (\` `): Xuống dòng và truyền biến.

## 3.Kiểm tra Data Type

Kiểm tra biến đó có phải chuỗi không, sử dụng `typeof`.
```javascript
var name = 'Huy';
console.log(typeof name); //Outp: "String"
```
## 4.Một số case sử dụng Backslash(\)

Backslash(Dấu gạch chéo ngược) 



