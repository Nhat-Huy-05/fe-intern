# ES6+ là gì?
ES là viết tắt của ECMAScript — một tiêu chuẩn cho ngôn ngữ JavaScript. ES6 (ra mắt năm 2015) là một "cuộc cách mạng" lớn với cực nhiều tính năng mới. Dấu "+" ám chỉ các phiên bản sau đó (ES7, ES8, ES9...) cho đến tận bây giờ.

1. Let, const
2. Template Literals (nối chuỗi sử dụng `(``)`) backtick
3. Multi -line String
4. Arrow function
5. Classes
6. Default parameter values
7. Destructuring
8. Rest parameters
9. Spread 
10. Enhanced object literals
11. Tagged template literal
12. Modules
## 1.Let,const
```javascript
const pi = 3.14; // Khai báo hằng số, không thể gán lại giá trị khác.
let age = 25;    // Khai báo biến có thể thay đổi giá trị.

if (true) {
    let name = "React"; 
    // name chỉ tồn tại trong cặp ngoặc nhọn này (block scope).
}
// console.log(name); // Lỗi! name không tồn tại ở đây.
```
## 2.Template Literals
```javascript
const name = "Gemini";
const greeting = `Chào mừng ${name} đến với thế giới React!`; 
// ${name}: Chèn giá trị biến name trực tiếp vào chuỗi.
```
## 3. Multi-line String
```javascript
const name = "Nhat Huy";
const greeting = `Chào mừng ${name} đến với thế giới React!`; 
// ${name}: Chèn giá trị biến name trực tiếp vào chuỗi.
alert(greeting);
```
## 4.Arrow function
- Khái niệm: Là hàm mũi tên, cách viết hàm rút gọn.
- Thay vì viết:
```javascript
function myFunc(){

}
```
Ta viết:
```javascript
const sum = (a, b) => a + b; 
// const sum: tên hàm.
// (a, b): tham số đầu vào.
// => a + b: trả về tổng (không cần chữ return nếu chỉ có 1 dòng).
alert(sum(2, 3))
```
- Lưu ý: nếu không khai báo dấu {return } thì nó sẽ được hiểu là return luôn
## 5.Classes
- Cách viết hướng đối tượng trong JS
```javascript
class Car{
    constructor(brand){
        this.name = brand;
    }
show() {
    return 'I want a car ' + this.name;
    } 
}
const myCar = new Car('Dream') //Tạo đối tượng từ class Car
console.log(myCar.show()) //Gọi hàm show()
```
## 6.Default Parameter Values
- Giá trị mặc định cho tham số của hàm
```javascript
const welcome = (user = "Khách") => `Chào ${user}`; 
// user = "Khách": Nếu không truyền user, nó sẽ tự lấy là "Khách".
console.log(welcome()); // Kết quả: Chào Khách
```
## 7.Destructuring
- Phân rả mãng hoặc đối tượng thành các biến riêng lẻ.
```javascript
const colors = ['Red', 'Green', 'Blue'];

// CÁCH CŨ:
// const red = colors[0];
// const green = colors[1];

// CÁCH ES6 (Destructuring):
const [r, g, b] = colors;

console.log(r); // Kết quả: Red
console.log(g); // Kết quả: Green
```