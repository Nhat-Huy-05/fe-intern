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
# Làm việc với mảng (Work in Array) - PHẦN 1

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
## 8.Concat (Nối mảng)

- Dùng để `hợp nhất` hoặc nhiều mảng với nhau.
```javascript
var food = ["Táo","Chuỗi","Cam"," Bưởi"];
var code = ["C++","PHP","JS","HTML"];
var arr = food.concat(code);
console.log(arr);
```
## 9.Slicing(Cắt mảng)

- Dùng để lấy ra `một phần` của mảng mà `không làm thay đổi` mảng gốc.

- Cú pháp: `slice(start, end)`.
```javascript
var food = ["Táo","Chuối","Cam"," Bưởi"];
var food1 = food.slice(1,3);
console.log(food1);
//Outp: "Chuối","Cam" (nó chỉ tới cam chứ k lấy bưởi).

var languages = [
    'JS',
    'PHP',
    'Ruby'
];
console.log(languages.slice(0));
//Outp: 'JS','PHP','Ruby'

var languages = [
    'JS',
    'PHP',
    'Ruby'
];
console.log(languages.slice(1));
//Outp: 'PHP','Ruby'
```

**Lưu ý**:
```javascript
//            0         1        2        3        4
var cars = ['Toyota', 'BMW', 'Audi', 'Honda', 'Kia'];

var result = cars.slice(1, 3); 

console.log(result); // Kết quả: ['BMW', 'Audi']
```

Giải thích:
- Nó bắt đầu từ index 1 ('BMW').
- Nó lấy tiếp index 2 ('Audi').
- Nó dừng lại trước index 3 (Không lấy 'Honda').
- SỐ lượng phần tử lấy được sẽ bằng `end - start` (3 - 1 = 2 phần tử).

# Làm việc với mảng - PHẦN 2

1. forEach()
2. every()
3. some()
4. find()
5. filter()
6. map()
7. reduce()
## 1.forEach()
- Dùng để duyệt qua từng phần tử của mảng và thực hiện 1 hành động nào đó. Nó k trả về mảng mới.
- Cú pháp:
```
array.forEach(function(item, index, array){...});
```
- Ví dụ:
```javascript
var numbers = [1,2,3];
numbers.forEach(num => console.log(num * 2));
//KQ: 2,4,6
```
- Không trả về mảng mới(trả về undefined).
## 2.every()
- Kiểm tra xem `tất cả phần tử trong mảng` có thoả mãn `1 điều kiện` nào đó không.
- Cú pháp:
```
const allPass = array.every(function(item){return condition; });
```
- Ví dụ:
```javascript
const ages = [18, 20, 25];
const isAdult = ages.every(age => age >= 18); // Kết quả: true
console.log(isAdult);
```
- **Lưu ý**: Trả về kiểu Boolean(true/false). `Chỉ cần 1 phần tử sai`, nó sẽ dừng và trả về `false`.
## 3.some()
- Kiểm tra xem có `ít nhất 1 phần tử trong mảng` thoả mãn điều kiện không. (khác với every() là ít nhất 1 thôi).
- Cú pháp:
```
const onePass = array.some(function(item) { return condition; });
```
- Ví dụ:
```javascript
const scores = [4, 5, 9];
const hasExcellent = scores.some(score => score >= 9); // Kết quả: true
console.log(hasExcellent);
```
- **Ghi chú**: Ngược lại với `every()`. Chỉ cần 1 phần tử đúng, nó sẽ dừng và trả về `true`.
## 4.find()
- Tìm và `trả về phần tử đầu tiên thoả mãn điều kiện`.
- Cú pháp:
```
const foundItem = array.find(function(item) { return condition; });
```
- Ví dụ:
```javascript
const users = [{id: 1, name: 'An'}, {id: 2, name: 'Bình'}];
const user = users.find(u => u.id === 2); // Kết quả: {id: 2, name: 'Bình'}
```
- Nếu không tìm thấy, trả về `undefined`. Chỉ tìm duy nhất 1 phần tử rồi dừng.
## 5.filter()
- Lọc ra tất cả các phần tử `thoả mãn điều kiện` và đưa vào `mảng mới`.
- Cú pháp:
```
const newArray = array.filter(function(item) { return condition; });
```
- Ví dụ:
```javascript
const nums = [1, 2, 3, 4];
const evens = nums.filter(n => n % 2 === 0); // Kết quả: [2, 4]
```
- **Lưu ý**: Trả về mảng mới. Nếu không có phần tử nào thoả mãn, trả về mảng rỗng `[]`.
## 6.map()
- Tạo ra 1 mảng mới bằng cách `thực thi 1 hàm` lên từng `phần tử của mảng cũ`.
- Cú pháp:
```
const newArray = array.map(function(item) { return transformation; });
```
- Ví dụ:
```javascript
const names = ['an', 'binh'];
const upperNames = names.map(name => name.toUpperCase()); // Kết quả: ['AN', 'BINH']
```
- Luôn trả về mảng mới có độ dài bằng với mảng gốc.
## 7.reduce()
- Thực thi 1 hàm tích luỹ lên từng phần tử để cuối cùng trả về 1 giá trị duy nhất.