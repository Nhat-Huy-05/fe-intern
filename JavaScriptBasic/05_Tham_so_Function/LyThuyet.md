1,Tham số(Parameters)

*,Định nghĩa:
```
/*
 Tham số là các biến được khai báo bên trong dấu ngoặc đơn () khi định nghĩa một hàm,
 đóng vai trò như người giữ chỗ
 cho dữ liệu sẽ được truyền vào. Khi hàm được gọi, 
 các giá trị thực tế được truyền vào gọi là đối số (Arguments)
*/
```

Ví dụ:
```javascript
// 'name' là tham số
function sayHello(name) {
  console.log("Hello, " + name);
}

// "Alice" và "Bob" là đối số
sayHello("Alice"); // In ra: Hello, Alice
sayHello("Bob");   // In ra: Hello, Bob
```

Phân biệt Tham số và Đối số:

`Tham số (Parameter)`: Biến trong phần định nghĩa hàm (name).

`Đối số (Argument)`: Giá trị thực tế khi gọi hàm ("Alice").

*,Kiểu dữ liệu(Data Type)

-Có các kiểu dữ liệu:

`Number`: Kiểu số(1,2,...)

`String`:Kiểu chuỗi ("Hello",...)

`Boolean`:True, False

`Array`:Mảng [0],[1],...

`Object`:Đối tượng(Thuộc tính, phương thức)

`Function`:Hàm

*,Tính Private:

Các tham số có tính local scope. Chỉ tồn tại và chỉ sử dụng trong cặp dấu ngoặc nhọn {} của hàm đó. Bên ngoài hàm sẽ không biết các tham số này là gì.

Ví dụ:
```javascript
function writeLog(message){
  console.log(message) //chỉ có thể chạy trong{}
}
writeLog('Test');
```
*,Một tham số && Nhiều tham số.
```javascript
function writeLog(mess, mess2) {
  console.log(mess)
  console.log(mess2) //không truyền sẽ chỉ hiện ra undefined 
}
writelog('TEST'); //nếu không truyền vào đối số sẽ là 2 undefined
```
Ví dụ: 
```javascript
// 1 tham số: name
function hello(name) {
    console.log("Xin chào " + name);
}

// Nhiều tham số: a, b
function tinhTong(a, b) {
    console.log("Tổng là: " + (a + b));
}
```

2,Truyền tham số