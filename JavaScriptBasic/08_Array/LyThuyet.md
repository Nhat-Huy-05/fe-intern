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
## 1.To string & 2. Join (Chuyển mảng thành chuỗi)
- `toString()`: Chuyển mảng thành chuỗi, các phần tử ngăn cách bởi dấu phẩy.

- `join()`: Tương tự toString có thể tự chọn ký tự ngăn cách.
```javascript
var languages = ['JavaScript', 'PHP', 'Ruby'];

console.log(languages.toString()); // "JavaScript,PHP,Ruby"
console.log(languages.join(' - ')); // "JavaScript - PHP - Ruby"
```
## 3.Pop & 4. Push (Làm việc với cuối mảng)
- `Pop`: `Xóa` phần tử `cuối mảng` và trả về chính phần tử đó.

- `Push`: `Thêm` một hoặc nhiều phần tử vào `cuối mảng` và trả về `độ dài mới` của mảng.
```javascript
var languages = ['JavaScript', 'PHP'];

console.log(languages.pop());  // "PHP" (lấy ra phần tử cuối)
console.log(languages);        // ["JavaScript"]

languages.push('Java', 'Dart'); 
console.log(languages);        // ["JavaScript", "Java", "Dart"]
```
## 5.Shift & 6.Unshift (Làm việc với đầu mảng)
- `Shift`: `Xóa` phần tử `đầu mảng` và trả về phần tử đó (giống pop nhưng ở `đầu`).

- `Unshift`: `Thêm` một hoặc nhiều phần tử vào `đầu mảng` (giống push nhưng ở `đầu`).
```javascript
var languages = ['JavaScript', 'PHP'];

console.log(languages.shift()); // "JavaScript"
languages.unshift('Python');    
console.log(languages);         // ["Python", "PHP"]
```
## 7.Splicing (Cắt, Chèn, Xoá đa năng)

- Cú pháp `splice(vị trí bắt đầu, số lượng cần xoá, các ptu thêm vào)`.
```javascript
var languages = ['JavaScript', 'PHP', 'Ruby'];

// Xóa: Bắt đầu từ index 1, xóa 1 phần tử
languages.splice(1, 1); 
console.log(languages); // ["JavaScript", "Ruby"]

// Chèn: Bắt đầu từ index 1, không xóa cái nào, chèn thêm 'Dart'
//
languages.splice(1, 0, 'Dart');
console.log(languages); // ["JavaScript", "Dart", "Ruby"]
```