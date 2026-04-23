# Thuộc tính và phương thức trong Object.

- Thuộc tính(Property/Attribute) và phương thức(Method)
- Thuộc tính: Lưu trữ thông tin, đặc điểm(dữ liệu).
- Phương thức: Định nghĩa các hành động, thao tác mà đối tượng có thể thực hiện.

| Đặc điểm | Thuộc tính(Attribute) | Phương thức(Method) |
| :-- | :-- | :-- |
| Bản chất | Biến lưu trữ dữ liệu | Hàm thực hiện logic/ hành động |
| Vai trò | Mô tả trạng thái, đặc điểm | Mô tả hành vi, thao tác | 
| Ví dụ(Xe) | mauSac, tocDo, hangSX | tangToc(), phanh(), khoiDong() | 
|Cách dùng | xe.mauSac | xe.tangToc() |
|Giá trị | Là 1 dữ liệu (số, chuỗi,..) | Thường chứa lệnh xử lý |
**Ví dụ minh hoạ**:
```javascript
var oto = {
    //Thuộc tính
    thuongHieu: "Toyota",
    mau: "Đỏ",
    //Phương thức (hành động)
    khoidong: function(){
        console.log("Xe đã khởi động");
    }
};
```
- `oto.mau` -> Trả về "Đỏ" (Dữ liệu).
- `oto.khoidong()`-> Thực hiện lệnh in ra màn hình (Hành động).