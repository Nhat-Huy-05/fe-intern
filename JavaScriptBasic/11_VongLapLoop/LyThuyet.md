 # **Lưu ý**:

 - For là một loại vòng lặp cụ thể, trong khi `Loop` là `thuật ngữ chung` chỉ tất cả các cấu trúc lặp `(bao gồm for, while, do-while)`
 - For thường dùng khi biết trước số lần lặp, còn loop nói chung (đặc biệt là while) dùng khi lặp dựa trên điều kiện.

 Sự khác biệt chi tiết:

- Vòng lặp For (for loop):

+,Mục đích: Thường dùng khi biết trước số lần lặp (duyệt mảng, danh sách, phạm vi cố định).

+,Cấu trúc: Nhỏ gọn, bao gồm khởi tạo, điều kiện và bước nhảy trong một dòng.

Ví dụ: for i in range(10): (lặp 10 lần).

- Vòng lặp nói chung (loop - vd: while):

+,Mục đích: Dùng khi số lần lặp không xác định trước, chỉ lặp cho đến khi điều kiện không còn đúng.

+,Cấu trúc: Linh hoạt, điều kiện có thể thay đổi phức tạp bên trong thân vòng lặp.

Ví dụ: while running: ...
## 1.Vòng lặp `for` - Lặp với điều kiện đúng.

- Dùng khi biết trước số lần muốn lặp.
```
for (khởi_tạo; điều_kiện; bước_nhảy) {
    // Khối lệnh thực thi
}
```

```javascript
//Vd: In ra các số từ 1 đến 5
for(var i = 1; i <= 5; i ++ ){
    console.log("Số thứ: "+ i);
} 
```
Giải thích:
- `var i = 1`: Khởi tạo biến đếm i bắt đầu từ 1.

- `i <= 5`: Điều kiện dừng. Nếu i vẫn nhỏ hơn hoặc bằng 5, vòng lặp tiếp tục chạy.

- `i++`: Sau mỗi lần chạy xong thân vòng lặp, `tăng i thêm 1 đơn vị`.

- console.log(...): Lệnh thực thi bên trong.

![alt text](VonglapFor.png)

**Lưu ý**:
```javascript
for (var i = 100; i > 0; i--){
    console.log(i); // in ra từ 100 tới 1, ngược lại so với i++
}

for (var i = 0; i <= 100; i+= 5){ //0,5,10,... in ra cộng 5 giá trị mỗi lần lặp.
    console.log(i);
}
```

## 2.Vòng lặp `for...in` - Lặp qua key của đối tượng.

- Dùng để duyệt qua các thuộc tính(key) của 1 đối tượng(object)
- Cú pháp:
```javascript
for (let biến_đại_diện in đối_tượng) {
    // Khối lệnh thực thi
}
```
Ví dụ: Giả sử ta có 1 đối tượng sinhVien. Ta muốn in ra toàn bộ thông tin của sv này.
```javascript
var sinhVien = {
    ten: "Nguyen Van A",
    tuoi: 20,
    khoa: "CNTT",
    diemTB: 8.0
}; //khai báo 1 object

//vong lap for..in
for (var thuocTinh in sinhVien){
    //thuocTinh lần lượt là ten,tuoi,khoa,diemTB
    //sinhvien[thuocTinh]: dùng để lấy gtri tương ứng với thuộc tính đó.
    console.log("Tên thuộc tính: " + thuocTinh + " | Giá trị: " + sinhVien[thuocTinh]);
}
// Tên thuộc tính: ten | Giá trị: Nguyen Van A
// Tên thuộc tính: tuoi | Giá trị: 20
// Tên thuộc tính: khoa | Giá trị: CNTT
// Tên thuộc tính: diemTB | Giá trị: 8
```
**Khi nào cần dùng**: 
- Khi cần kiểm tra 1 ob có những dữ liệu gì.
## 3. Vòng lặp `for..of` - Lặp qua value của đối tượng.
- Dùng để duyệt qua các giá trị(value) trong 1 mảng hoặc chuỗi.
- Cú pháp:
```javascript
for (var biến_đại_diện of đối_tượng){
    //khối mã sẽ được thực thi cho mỗi phần tử.
}
```
Ví dụ: Duyệt qua 1 mảng Array
```javascript
const fruits = ['Táo', 'Chuối', 'Xoài'];

for (const fruit of fruits) {
  console.log(fruit); 
}
// Kết quả: Táo, Chuối, Xoài
```
Ví dụ 2: Duyệt qua 1 chuỗi.
```javascript
const message = "Hello";

for (const char of message) {
  console.log(char);
}
// Kết quả: H, e, l, l, o
```
**Lưu ý**:
- **Không dùng cho Object thuần túy**: Vòng lặp for...of sẽ báo lỗi nếu bạn dùng nó để duyệt qua một Object thông thường {a: 1, b: 2}, vì Object không phải là "iterable". Để duyệt Object, bạn hãy dùng for...in.
- **Giá trị chứ không phải Chỉ số**: Khác với for...in (lấy ra key/index), for...of lấy ra value (giá trị).

- **Có thể dùng break và continue**: Giống như vòng lặp for truyền thống, bạn hoàn toàn có thể dừng vòng lặp nửa chừng bằng break hoặc nhảy qua bước lặp bằng continue (điều mà forEach không làm được).
## 4. `While` - Lặp khi điều kiện đúng.
- Thực thi 1 khối lệnh lặp đi lặp lại miễn là đk đầu còn `true`.
- Cú pháp:
```javascript
while (condition) {
  // Khối mã thực thi (code block)
  // Thường có bước thay đổi biến điều kiện ở đây
}
```
- Ví dụ:
```javascript
var myArray = ['JS','PHP','Ruby'];

var i = 0;
while(i < myArray.length) {
    console.log(myArray[i]);
    i++;
}
```
**Lưu ý**:
- Luôn đảm bảo điều kiện trong `while` sẽ trở thành `false` tại 1 thời điểm nào đó.
## 5. `Do..While` - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng.
- Luôn thực hiện khối lệnh ít nhất 1 lần trước khi kiểm tra điều kiện.
- Luôn chạy 1 lần dù điều kiện đúng hay sai.
- Cú pháp:
```
do {
    // Khối lệnh được thực thi
} while (điều kiện);
```
- Ví dụ:
```javascript
let password;
do {
    password = prompt("Nhập mật khẩu của bạn:");
} while (password !== "123456");

alert("Đăng nhập thành công!")
```
+,B1: Hiện bảng thông báo cho user nhập.

+,B2: Nếu người dùng nhập sai(khác 123456), điều kiện `while` là đúng, vòng lặp quay lại bắt nhập tiếp.

+,B3:Nếu nhập đúng, điều kiện thành sai, vòng lặp dừng lại.
## 6. `break` và `continue` trong Loop
- Break:
```javascript
for (let i = 1; i <= 20; i++) {
    if (i % 7 === 0) {
        console.log("Tìm thấy số chia hết cho 7 đầu tiên là: " + i);
        break; // Thoát khỏi vòng lặp ngay lập tức
    }
    console.log("Đang kiểm tra số: " + i);
}
// Kết quả: Kiểm tra từ 1 đến 6, gặp số 7 in ra thông báo và DỪNG LẠI.
```
- Continue: Không làm dừng vòng lặp, nó sẽ bỏ qua các câu lệnh còn lại trong lần lặp hiện tại và nhảy thẳng sang lần lặp kế tiếp.
- Ví dụ: In ra các số từ 1 đến 5 nhưng trừ 3.
```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Bỏ qua đoạn code phía dưới, nhảy sang i = 4 luôn
    }
    console.log("Số: " + i);
}
/* Kết quả: 
Số: 1
Số: 2
(Số 3 bị bỏ qua)
Số: 4
Số: 5
*/
```
## 7.Vòng lặp chồng vòng lặp.
```javascript
//Vẽ hình tam giác vuông bằng các dấu sao
var n = 5;
for (var i = 1; i <= n ; i++){
    //vòng lặp cha: quản lý số hàng( 1 đến 5)
    var row = "";
    for(var j = 1; j <= i; j++){
    //vòng lặp con: quản lý số dấu sao trên mỗi hàng.
    row += "* ";
    }
    console.log(row);
}
```