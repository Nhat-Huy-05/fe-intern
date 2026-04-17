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
## 8.Rest Parameters
- `Lấy các phần tử còn lại` vào `1 mảng`.
- Khi không biết chắc có bao nhiêu tham số truyền vào
- Cú pháp:
```javascript
const logNumbers = (first, ...others) => {
  console.log(first);  // Số đầu tiên
  console.log(others); // Một mảng chứa tất cả các số còn lại
};
```
- Ví dụ:
```javascript
// ...numbers là Rest Parameters
function sum(...numbers) {
    // numbers bây giờ là một mảng: [1, 2, 3, 4, 5]
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2));             // Kết quả: 3
console.log(sum(1, 2, 3, 4, 5));    // Kết quả: 15
```
## 9.Spread
- Toán tử rải `...`(ngược với Rest)
- Sao chép mảng hoặc đối tượng. Dùng để cập nhật state mà không làm thay đổi state cũ.
- Bỏ ngoặc đi và lấy các phần tử vào trong.
```javascript
const oldList = [1, 2];
const newList = [...oldList, 3, 4]; 
// Lấy tất cả phần tử của oldList rồi thêm 3, 4 vào. Kết quả: [1, 2, 3, 4]
```
- Ví dụ:
```javascript
const laptop = ['Dell', 'HP'];
const mobile = ['iPhone', 'Samsung'];

// Nối mảng theo kiểu cũ: laptop.concat(mobile)
// Dùng Spread (ES6):
const devices = [...laptop, ...mobile, 'iPad'];

console.log(devices); 
// Kết quả: ['Dell', 'HP', 'iPhone', 'Samsung', 'iPad']
```
## 10.Enhanced Object Literals
- Viết đối tượng ngắn gọn
- giảm bớt code thừa khi viết tên biến trùng tên thuộc tính
```javascript
const price = 100;
consst product = {
    price,
    run(){
        console.log('Running...');
    }
}
console.log(product.run());
```
- Ví dụ: Khi tên biến và tên thuộc tính của ob giống hệt nhau, không cần phải viết lặp lại.
```javascript
const name = 'ReactJS';
const price = 500;

// CÁCH CŨ:
const courseOld = {
    name: name,
    price: price
};

// CÁCH MỚI (ES6):
const courseNew = {
    name,
    price
};

console.log(courseNew); // Kết quả: { name: 'ReactJS', price: 500 }
```
## 11.Tagged Template Literal
- Sử dụng 1 hàm để xử lý chuỗi.
```javascript
function highlight(strings, ...values) {
  return `<b>${values[0]}</b>`; // Xử lý biến bên trong chuỗi theo cách riêng
}
const user = "Admin";
const result = highlight`Chào ${user}`; // Hàm highlight sẽ xử lý chuỗi này.
```
- Ví dụ:
```javascript
function highlight(strings, ...values) {
    console.log("Mảng chuỗi (strings):", strings);
    console.log("Mảng biến (values):", values);
    //string: chứa các đoạn chữ tĩnh: [Khoá học, này là, !]
    //values: là 1 mảng chứa gtri các biến truyền vào:[ReactJS, Miễn phí]
    return "Kết quả tùy chỉnh";
}

const course = "ReactJS";
const price = "Miễn phí";

// Gọi hàm highlight bằng cú pháp Tagged Template
const message = highlight`Khóa học ${course} này là ${price}!`;
```
## 12.Modules
- Chia nhỏ code ra nhiều file(`import`: nạp vào, và `export`: xuất ra)
- Giúp quản lý dự án React lớn, mỗi Component là 1 file.
```javascript
// file Component.js
export const MyComponent = () => {}; 

// file App.js
import { MyComponent } from './Component.js'; 
// Import để sử dụng lại ở file khác.
```
## Ví dụ cụ thể về Modules.
- Giả sử ta có 2 file math.js (chứa các hàm tính toán) và main.js(file chính để chạy ứng dụng).
