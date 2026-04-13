```javascript
var students = [
    {id: 100, name: "Nhat Huy", score: 8.0},
    {id: 101, name: "Michael Jackson", score: 9.0},
    {id: 102, name: "My Special", score: 7.0}
];
```
- Khai báo 1 biến tên là students chứa 1 mảng.
- Mỗi ptu trong mảng là 1 đối tượng đại diện cho 1 sinh viên với 3 thuộc tính.

```javascript
function reviewStudent(studentList){
    var studentXuatSac = [];
}
//hàm xử lý dữ liệu
```
- Khai báo 1 hàm tên là reviewStudent.
- tham số studentlist truyền vào hàm(ds sinh viên cần kiểm tra).
- var studentXuatSac = []: Tạo 1 mảng rỗng để chứa kết quả những sinh viên đủ điều kiện "Xuất sắc".

```javascript
for (var i = 0; i < studentList.length; i++) {
        var student = studentList[i];
        //Vòng lặp duyệt ds
```
- Vòng lặp chạy từ vị trí đầu tiên i = 0 đến hết danh sách studentList.length
-  var student = studentList[i] : Lấy ra sv tại vị trí thứ i để xử lý

```javascript 
var cleanName = student.name.trim().toUpperCase();
//Xử lý chuỗi, lọc điều kiện.
```
- trim(): loại bỏ khoảng trắng dư thừa.
- toUpperCase(): chữ hoa

```javascript
if (student.score >= 8.0) {
            studentXuatSac.push(cleanName + " Điểm: " + student.score);
        }
```
- Kiểm tra điều kiện sv >= 8.0
- push(): Nếu đúng đk, hàm sẽ tạo 1 chuỗi văn bản mới và thêm(push) vào mảng kết quả studentXuatSac.

```javascript
return studentXuatSac; 
```
- Trả về danh sách cuối cùng sau khi lọc xong.

```javascript
var result = reviewStudent(students);
console.log("Danh sach sinh vien xuat sac: ", result);
//Thực thi và hiển thị
```
- Gọi hàm và truyền mảng students ban đầu vào. Kết quả trả về được lưu vào biến result.
- In kq ra màn hình console.

Hello World