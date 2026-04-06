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

2, Arguments

Khi thực hiện gọi hàm, những giá trị cụ thể mà bạn bỏ vào trong ngoặc được gọi là `Đối số`(Arguments).

Ví dụ:

Truyền 1 tham số:

hello("Huy"); // "Huy" là đối số truyền cho tham số "name"

Truyền nhiều tham số:

tinhTong(5, 10); // a = 5, b = 10

*Vòng for:

-Dùng để lặp đi lặp lại 1 đoạn mã trong 1 số lần nhất định.

Cú pháp:
```javascript
for (khởi_tạo; điều_kiện; bước_nhảy) {
    // Đoạn mã sẽ được thực thi mỗi lần lặp
}
``` 

Ví dụ:
```javascript
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
```

Khởi tạo (var i = 1): Tạo ra một biến chạy i và gán giá trị bắt đầu là 1. Nó chỉ chạy duy nhất 1 lần khi bắt đầu vòng lặp.

Điều kiện (i <= 5): Trước mỗi lần lặp, máy tính sẽ kiểm tra: "i có còn nhỏ hơn hoặc bằng 5 không?". Nếu Đúng thì chạy tiếp, nếu Sai thì dừng vòng lặp ngay lập tức.

Bước nhảy (i++): Sau khi thực hiện xong đoạn mã bên trong {}, biến i sẽ được tăng lên 1 đơn vị (i++ tương đương i = i + 1).




