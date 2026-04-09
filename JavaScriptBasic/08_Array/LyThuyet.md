# Mảng (array)
1. Tạo mảng
- Cách tạo
- Sử dụng cách nào? Tại sao?
- Kiểm tra data type?
2. Truy xuất mảng
- Độ dài mảng
- Lấy phần tử theo index
## Tạo mảng

Mảng(Array): Giúp lưu trữ danh sách các giá trị trong 1 biến duy nhất.
- Cách tạo:

+, Cách 1: Sử dụng ngoặc vuông `[]`.

+, Cấch 2: sử dụng từ khoá `new Array()`.
```javascript
//Cách 1: []
var code = ["JS", "PHP", "C++"]; 

//Cách 2:
var code = new Array("JS", "PHP", "C++"); 
```

- Sử dụng cách nào? why? 

Sử dụng `Cách 1[]`: tốc độ thực thi nhanh,tránh nhầm lẫn(ví dụ: new Array(5) sẽ tạo ra 1 mảng có 5 phần tử trống chứ k phải mảng có số 5).

- Kiểm tra Data Type: