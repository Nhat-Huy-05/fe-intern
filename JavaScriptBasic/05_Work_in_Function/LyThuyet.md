# 1,Kiến thức cơ bản về Hàm (Function)

## 1. Hàm là gì?
Hàm là một **khối mã (block of code)** được thiết kế để thực hiện một **nhiệm vụ cụ thể**. Thay vì viết đi viết lại một đoạn mã nhiều lần, ta gom chúng vào một hàm để tái sử dụng.



---

## 2. Các loại hàm
Trong lập trình, hàm thường được chia làm hai nhóm chính:

* **Built-in (Hàm có sẵn):** Là những hàm đã được ngôn ngữ lập trình (như JavaScript) xây dựng sẵn.
    * *Ví dụ:* `console.log()`, `alert()`, `prompt()`.
* **User-defined (Hàm tự định nghĩa):** Là những hàm do người lập trình tự viết ra để giải quyết các bài toán riêng biệt.

---

## 3. Tính chất của hàm
Hàm có các đặc điểm vận hành sau:

1.  **Tính trì hoãn:** Hàm không thực thi ngay khi được định nghĩa.
2.  **Tính thực thi:** Mã bên trong hàm chỉ chạy khi hàm được **gọi** (invoke).
3.  **Tính linh hoạt:** Có thể nhận dữ liệu đầu vào thông qua **tham số** (parameters).
4.  **Tính trả về:** Có thể trả về một giá trị sau khi xử lý xong bằng từ khóa `return`.

---

## 4. Cách tạo hàm đầu tiên

### Cú pháp cơ bản
```javascript
function tenHam() {
    // Khối mã xử lý công việc cụ thể
}
```
# 2,Tham số(Parameters)

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

# 3, Arguments

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

Ví dụ về for of:
```javascript
function writeLog(){
  for (var param of arguments){
    console.log(param);
  }
}
writeLog('hello 1','hello 2','hello 3');
```
Giải thích:

-Đối tượng arguments: Mặc dù không khai báo tham số, nhưng bên trong mỗi hàm JS luôn tồn tại 1 đối tượng ngầm tên `arguments`

+,Khi gọi writelog...., đối tượng này chứa cả 3 chuỗi đó như 1 danh sách: ['hello 1',....].

-Vòng lặp for.. of:

`for (var param of arguments)`: Duyệt mảng/đối tượng.

+,Cơ chế : nhấc từng giá trị trong `argu` ra, đặt vào biến tạm tên `param`, rồi thực hiện lệnh bên trong khối `{}`.

- Lần 1: `param` : `'hello 1 '`.

- Lần 2: `param` : `'hello 2 '`.

- Lần 3: `param` : `'hello 3 '`.
 
# Bài tập về tạo hàm sum:

1. Hãy tạo 1 hàm có tên là sum có 2 tham số:

Tham số thứ 1 là a

Tham số thứ 2 là b
```javascript
function sum(a, b){
    console.log(a +b);
}
sum(1, 2);
```
2. Hãy tạo 1 hàm có tên là triple có 1 tham số x:
```javascript
function triple(x){
    console.log(x);
}
triple(); //in ra undefined vì chưa truyền gtri vào.
```
# 4,Return trong hàm:

-`return`:kết quả đầu ra.

+,`trả về giá trị`

+,`dừng hàm ngay lập tức`

## Trường hợp không có `return`(chỉ in ra)
```javascript
function tinhTong(a, b) {
    console.log(a + b);
}

let ketQua = tinhTong(5, 10); 
// Màn hình hiện: 15
// Nhưng biến ketQua lúc này là: undefined (vì hàm không trả về gì cả)
```
## Trường hợp có `return`(Lấy giá trị để dùng)
```javascript
function tinhTong(a, b) {
    return a + b; // Nhả kết quả ra ngoài
}

let ketQua = tinhTong(5, 10); 
// ketQua bây giờ bằng 15.
// Bạn có thể dùng nó để tính tiếp:
console.log(ketQua * 2); // Kết quả: 30
```

### Hoàn thành thử thách này bằng cách tạo hàm sum, hàm có 2 tham số a, b và trả về tổng của 2 tham số.
```javascript
function sum(a,b){
    return a + b;
}
console.log(sum);
```
### Sử dụng hàm sum đã cho, hãy tạo biến result để lưu kết quả của phép cộng 2 số là 20 và 10.
```javascript
function sum(a, b) {
        return a + b;
}
var result = sum(20, 10);
console.log(result);
```
### Hoàn thành thử thách này bằng cách tạo hàm triple, hàm có 1 tham số x và trả về giá trị gấp 3 lần x. Ví dụ, x = 3 thì hàm triple sẽ trả về 9.
```javascript
function triple(x){
 return x * 3;
}
var x = 3;
console.log(x);
```
### Sử dụng hàm triple đã cho, hãy tạo biến result để lưu kết quả của 10 * 3.
```javascript
function triple(x) {
    return x * 3;
}

// Gọi hàm triple với đối số là 10
var result = triple(10); 

console.log(result);
```
## Một số lưu ý trong Function

### 1. Khi function đặt trùng tên?
```javascript
function showMessage(){
  console.log('Message  1');
}

```
Khi định nghĩa 2 function trùng tên,thì function định nghĩa sau sẽ `ghi đè` function định nghĩa trước.

### 2. Khai báo biến trong hàm?
```javascript
function showMessage(){
  var fullName ='Riyu';
  console.log(fullName);
}
showMessage(); //Output: Riyu
```
Có thể khai báo(chỉ nằm trong `khối lệnh {}` đó thôi)

### 3. Định nghĩa hàm trong hàm?
```javascript
function showMessage(){
  function showMessage2(){
    console.log('Mess 2');
  }
  showMessage2(); //showMessage2 đưa ra ngoài không thể gọi được
}
showMessage();
//Định nghĩa 1 fun trong 1 fun(phạm vi sử dụng chỉ trong fun đó)
//Định nghĩa trong 1 hàm được thực thi chỉ khi được gọi hàm đó.
```
# Các loại function

## Declaration function
```javascript
function showMessage(){

} //định nghĩa bằng fun
```
Hoisting.
Bạn có thể gọi hàm này trước khi nó được định nghĩa trong code. JavaScript engine sẽ "nhấc" các khai báo hàm lên trên cùng của scope trước khi thực thi.

## Expression function (được gán )
```javascript
var showMessage2 = function(){

} //được gán cho 1 biến 
```
```javascript
var myObject = {
  myFunction: function(){

  }
};
```
Không có Hoisting: Bạn phải định nghĩa hàm trước khi gọi nó, nếu không sẽ bị lỗi ReferenceError.

Bài tập:

Tạo 2 hàm declarationFunction và expressionFunction thỏa mãn các yêu cầu sau đây:

declarationFunction là 1 declaration function

expressionFunction là 1 expression function
```javascript
function declarationFunction(){

}
var expressionFunction = function(){

}
```





