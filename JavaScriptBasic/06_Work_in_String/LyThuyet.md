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

- Dùng `.length`.
```javascript
    var myString ="Hoc Tap!";
    console.log(myString.length) //8
```
## 2.Find Index(Tìm vị trí)

- Tìm vị trí xuất hiện `đầu tiên` của 1 chuỗi con(bắt đầu = 0)

- Nếu ghi chuỗi không có trong chuỗi đó sẽ in ra `-1`.

- Nếu cần tìm chuỗi con cuối, dùng: `.lastIndexOf()`.
```javascript
    var pos = "Let learn code";
    console.log(pos.indexOf("learn")); //4
    //Lưu ý:gặp chuỗi không có sẽ ra -1
    //trường hợp trùng chữ sẽ ghi('chuỗi', vị trí) (tức là sẽ bắt đầu ở vị trí đó để đi tìm)
                        //learn("learn", 4)
```   
## 3.Cut String(Cắt chuỗi)

- Trích xuất 1 đoạn chuỗi từ `vị Trí A` tới `vị trí B`.

- Dùng `slice(vị trí đầu, cuối)` hoặc `slice(vị trí)`(cắt từ vị trí đó và lấy đoạn còn lại).
```javascript
    var myString = "Hoc Tap Code!";
    console.log(myString.slice(4, 7));//Tap  
```
## 4.Replace(ghi đè)

- Thay thế 1 cụm từ bằng 1 cụm từ khác.

- Dùng `.replace("chuỗi cần thay thế", "chuỗi mới bỏ vào")`.
```javascript
var newString = "Học C++";
console.log(newString.replace("C++", "Java"));
//Học Java 
```

## 5. Convert to Upper Case(Viết hoa)

- Chuyển tất cả ký tự sang chữ in hoa.

- Dùng `.toUpperCase()`.
```javascript
var newString = "Học tập tại git";
console.log(newString.toUpperCase());
//HỌC TẬP TẠI GIT
```
## 6.Convert to Lower Case(Viết thường)

- Chuyển tất cả ký tự sang chữ in thường.

- Dùng `.toLowerCase()`.
```javascript
var newString = "HELLO WORLD";
console.log(newString.toLowerCase());
//hello world
```
## 7.Trim(Cắt khoảng trắng)

- Xoá khoảng trắng dư thừa ở 2 đầu chuỗi(đầu, cuối)

- Dùng `.trim()`.
```javascript
var clean = "  Hi  ";
console.log(clean.trim());//"Hi" 
```
## 8.Split(Tách chuỗi)

- Cắt chuỗi thành 1 mảng dựa trên ký tự phân tách.

- Dùng `.split()`.
```javascript
var array ="Cơm, Cháo, Gạo, Măng";
console.log(array.split());
//['Cơm, Cháo, Gạo, Măng']

var array ="JavaScript";
console.log(array.split(""));
//['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
```
## 9.Get character by Index(Lấy ký tự).

- Lấy ra 1 ký tự duy nhất tại vị trí chỉ định.

- Dùng `"Chuỗi"[vị trí] `.
```javascript
var char = "Hello";
console.log("Hello"[2]);
//l
```
Bài tập về làm việc với chuỗi:

      Cho trước chuỗi coursesStr chứa tên các khóa học cách nhau bởi dấu ,.

     Bạn hãy viết hàm strToArray nhận vào 1 tham số là str và trả về 1 mảng chứa tên các khóa học.

     Gợi ý: Bạn có thể sử dụng phương thức split đã được học ở bài trước.
```javascript
var coursesStr = 'HTML & CSS, JavaScript, ReactJS';
 
function strToArray(str) {
    return str.split(", ");//", " nhằm không dính khoảng trắng thừa.
}
console.log(strToArray(coursesStr)) 

// Output: ['HTML & CSS', 'JavaScript', 'ReactJS']
```













