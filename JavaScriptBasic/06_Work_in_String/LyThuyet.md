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

- Chèn dấu nháy vào chuỗi cùng loại:

Ví dụ: 'It\'s a sunny day'(không có  `\`,JS sẽ hiểu là chuỗi kết thúc ở chữ t).

- Dòng mới: `\n`(Newline).

- Tab: `\t`.

- Chèn chính dấu blackslash: `\\`.

## 5.Xem độ dài chuỗi.

- Dùng `.length`(Lưu ý: length đếm cả khoảng trắng và ký tự đặc biệt).
```javascript
var text = "Hello!";
console.log(text.length); //outp: 6
```
## 6.Chú ý độ dài khi viết code.

Để code dễ bảo trì, đọc tốt trên nhiều màn hình:

- Độ dài tối đa: không quá 80-100 ký tự trên 1 line.

- Cách xử lý: Nếu chuỗi quá dài, hãy ngắt dòng bằng cách sử dụng dấu +.

## 7.Template String ES6

- Interpolation(Truyền biến): sử dụng cú pháp `${variable}`.

- Multi-line: Cho phép viết chuỗi trên nhiều dòng mà không cần dùng `\n`.

Ví dụ:
```javascript
var user ="Học viên";
var exercise = "JavaScript";
//Cách cũ: "Chào " + user + ", bạn đang học " + exercise
//Cách ES6:
var mess = `Chào ${user}, Đang học ${exercise} tại đây`;
console.log(mess);
```
BT:

Cho trước một biến email, hãy gán giá trị cho nó là một chuỗi.
```javascript
const email = "hello everyone";
```

# Làm việc với chuỗi

1. Length
2. Find index
3. Cut string
4. Replace
5. Convert to upper case
6. Convert to lower case 
7. Trim
8. Split
9. Get a character by index

## 1.Length(Độ dài chuỗi)

- Trả về số lượng ký tự trong chuỗi
```javascript
    var myString ="Hoc Tap!";
    console.log(myString.length) //8
```
## 2.Find Index(Tìm vị trí)

- Tìm vị trí xuất hiện `đầu tiên` của 1 chuỗi con(bắt đầu = 0)

- Nếu ghi chuỗi không có trong chuỗi đó sẽ in ra `-1`.
```javascript
    var pos = "Let learn code";
    console.log(pos.indexOf("learn")); //4
    //Lưu ý:gặp chuỗi không có sẽ ra -1
    //trường hợp trùng chữ sẽ ghi('chuỗi', vị trí) (tức là sẽ bắt đầu ở vị trí đó để đi tìm)
                        //learn("learn", 4)
```   
## 3.Cut String(Cắt chuỗi)

- Trích xuất 1 đoạn chuỗi từ `vị Trí A` tới `vị trí B`.
```javascript

``` 










