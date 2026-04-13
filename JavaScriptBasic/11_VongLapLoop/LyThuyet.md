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

```
## 3. Vòng lặp `for..of` - Lặp qua value của đối tượng.
## 4. `While` - Lặp khi điều kiện đúng.
## 5. `Do..While` - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng.