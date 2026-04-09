# Mảng (array)
1. Tạo mảng
- Cách tạo
- Sử dụng cách nào? Tại sao?
- Kiểm tra data type?
2. Truy xuất mảng
- Độ dài mảng
- Lấy phần tử theo index
## 1.Tạo mảng

Mảng(Array): Giúp lưu trữ danh sách các giá trị trong 1 biến duy nhất.

Khi lưu 1 item trong mảng sẽ được gọi là `một phần tử trong mảng`.

- Cách tạo:

+, Cách 1: Sử dụng ngoặc vuông `[]`.

+, Cấch 2: sử dụng từ khoá `new Array()`.
```javascript
//Cách 1: []
var code = ["JS", "PHP", "C++"]; 

var code = [
        "JS",
        "PHP",
        "C++"
];

//Cách 2:
var code = new Array("JS", "PHP", "C++"); 
```

- Sử dụng cách nào? why? 

Sử dụng `Cách 1[]`: tốc độ thực thi nhanh,tránh nhầm lẫn(ví dụ: new Array(5) sẽ tạo ra 1 mảng có 5 phần tử trống chứ k phải mảng có số 5).

- Kiểm tra Data Type:

Dùng `typeof`, sẽ trả về là `object`.
```javascript
var code = ["JS", "PHP"];
console.log(typeof code); //"object"

//Kiểm tra mảng chính xác:
console.log(Array.isArray(code)); //true(true là mảng)
```
## 2.Truy xuất mảng

- Độ dài mảng (Length): sử dụng `.length`.
```javascript
var code = ["JS", "PHP", "Ruby"];
console.log(code.length);
```
- Lấy phần tử theo index

Mảng trong JS bắt đầu đếm từ số 0
```javascript
var languages = ['JavaScript', 'PHP', 'Ruby'];

// Lấy phần tử đầu tiên
console.log(languages[0]); // "JavaScript"

// Lấy phần tử thứ hai
console.log(languages[1]); // "PHP"

// Nếu lấy index không tồn tại
console.log(languages[10]); // undefined
```
# Tổng kết:
```javascript
/* MẢNG TRONG JAVASCRIPT
*/

// 1. Tạo mảng
var fruits = ['Táo', 'Chuối', 'Cam']; // Tạo mảng bằng cách tối ưu nhất

// Kiểm tra kiểu dữ liệu
if (Array.isArray(fruits)) {
    console.log('Đây là một mảng!');
}

// 2. Truy xuất mảng
console.log('Số lượng trái cây:', fruits.length); // 3

// Truy cập phần tử cuối cùng của mảng một cách linh hoạt
var lastIndex = fruits.length - 1;
console.log('Trái cây cuối cùng là:', fruits[lastIndex]); // "Cam"
```
# Làm việc với mảng (Work in Array)

1. To string
2. Join
3. Pop
4. Push
5. Shift
6. Unshit
7. Splicing
8. Concat
9. Slicing
## 1.To String
- Chuyển mảng thành chuỗi, các phần tử ngăn cách bởi dấu phẩy.
```javascript
var food = ["Apple","Melon","Banana"];
console.log(food.toString());
```
## 2.Join
- Tương tự toSTring nhưng tự chọn ký tự ngăn cách.
```javascript
var food = ["Apple","Melon","Banana"];
console.log(food.join(' - '));
```
## 3.Pop
- 

