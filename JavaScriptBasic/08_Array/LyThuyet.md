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
```javascript
var number = [1, 2, 3, 4, 5 , 6 , 7 , 8 , 9 , 10];
number.forEach(num1 => {
    number.forEach(num => {
       if (num1 + num === 5){
        console.log(num1, num)
       }
});
})

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
- Thực thi 1 `hàm tích luỹ lên` từng phần tử để cuối cùng trả về `1 giá trị` duy nhất.
- Cú pháp:
```
array.reduce(function(accumulator, currentValue) { ... }, initialValue);
```
- Ví dụ:
```javascript
const prices = [10, 20, 30];
const total = prices.reduce((sum, p) => sum + p, 0); // Kết quả: 60
console.log(total);
```

# Bài tập thực tế:
```javascript
var courses = [
    {id: 1 , name: "JS Basic", coin: 250},
    {id: 2 , name: "HML, CSS", coin: 100},
    {id: 3 , name: "Ruby", coin: 200},
    {id: 4 , name: "PHP", coin: 400},
]

var giaTriBanDauCuaHoaDon = 0
function coinHandler(bienTam, khoaHocValue, khoaHocIndex, troToi_mang_courses){
    return bienTam + khoaHocValue.coin ;
}
var tongTienKhoaHoc = courses.reduce(coinHandler, giaTriBanDauCuaHoaDon); //lần chạy đầu tiên bienTam sẽ lấy giá trị của giaTriBanDauCuaHoaDon

console.log('Tổng tiền các khóa học là : ' + tongTienKhoaHoc); //> Tổng tiền các khóa học là : 950
```
- Nguyên lý hoạt động: Return 1 giá trị được cập nhật sau mỗi lần duyệt qua 1 index.

Giải thích ý nghĩa:
- Các tham số này có thể đặt tên tùy ý và có thể bỏ đi nếu thấy không cần thiết, ta chỉ cần nhớ chức năng của từng vị trí
- bienTam : Nơi lưu trữ giá trị của hàm reduce() sau mỗi lần duyệt qua từng index
- khoaHocValue : giá trị của index hiện tại
- khoaHocIndex : index hiện tại
- troToi_mang_courses: tham chiếu (trỏ tới) mảng gốc . Mọi sửa đổi với tham số này đều sẽ ảnh hưởng lên mảng gốc. (Ít được dùng)
- giaTriBanDauCuaHoaDon: giá trị ban đầu sẽ được gán cho bienTam .

# Bài tập 2:
Cho trước danh sách một số bộ phim, hãy viết hàm calculateRating để tính điểm trung bình IMDB của những bộ phim mà Christopher Nolan làm đạo diễn.

Gợi ý:

Dùng phương thức filter để lấy ra những bộ phim do Christopher Nolan làm đạo diễn

Dùng phương thức reduce để tính tổng điểm IMDB

Tính điểm IMDB trung bình
```javascript
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
  }
];
function calculateRating(watchList){
  var nolanFilms = watchList.filter(function(movie){
    return movie.Director === "Christopher Nolan"
  });
  var totalIMDB = nolanFilms.reduce(function(accumulator, movie){
    return accumulator + parseFloat(movie.imdbRating);
  }, 0);
  var averageRating = totalIMDB / nolanFilms.length;

  return averageRating;
}

console.log(calculateRating(watchList)); // Output: 8.675
```

## Tìm hiểu sâu về reduce() có logic như thế nào?
```javascript
//vd1
const numbers = [1, 2, 3, 4, 5]

const result = numbers.reduce((total, number) => {
  return total + number
  //cái biến tích trữ sẽ là giá trị khởi tạo(total = 5, currentValue = 1 nên 5 + 1 = 6, 6 + 2 = 8, 8 + 3 = 11, 11 + 4 = 15, 15 + 5 = 20)
},5) //giá trị khởi tạo là 5 -> 5 + 15 = 20
console.log(result)

//vd2
console.log("1. Đang nấu cơm...");

setTimeout(function() {
  console.log("2. Cơm chín rồi! (Đây là Callback)");
}, 2000); // Chờ 2000ms (2 giây)

console.log("3. Trong lúc chờ thì quét nhà.");
```
- Callback: hàm được gọi lại.
- Tự code ra 1 phương thức reduce():

```javascript
Array.prototype.reduce2 = function(callback, result){
  for(let i = 0; i < this.length;i++){
    result = callback(result, this[i], i , this)
  }
  return result
}
const numbers = [1, 2, 3, 4, 5]
const result = numbers.reduce2((total, number) => {
  return total + number
}, 5)
console.log(result);
```
- `Aray.prototype` : gán hàm vào `prototype` của Arr, nghĩa là cho phép tất cả các mảng trong ct có thể sử dụng phương thức `.reduce2()`.
- `callback`: hàm thực thi logic(ví dụ Cộng dồn)
- `result`: giá trị khởi tạo(initial value): đang mặc định người dùng sẽ truyền vào
- `this.length`: this chính là mảng đang gọi phương thức
- `callback(result, this[i], i, this)`: Tại mỗi vòng lặp, ta gọi hàm `callback` và truyền vào 4 tham số:

+, `result`: biến lưu trữ kq tích luỹ từ các bước trước.

+, `this[i]`: Ptu hiện tại của mảng

+, `i`: chỉ số (index) hiện tại

+,`this`: chính cái mảng đó.

+, `result = ...`: Quan trọng nhất là dòng này. Kết quả trả về từ hàm callback sẽ được cập nhật ngược lại vào biến result để dùng cho vòng lặp tiếp theo.

- Thực thi ví dụ:
```javascript
const numbers = [1, 2, 3, 4, 5]
const result = numbers.reduce2((total, number) => {
  return total + number
}, 5)
```
- Ở đây, quá trình tính toán sẽ diễn ra với giá trị khởi đầu = 5;

| Vòng lặp | total(result cũ) | number(this[i]) | Phép tính(callback) |
| :-- | :-- | :-- | :-- | 
| 1 | 5 | 1 | 5 + 1 |
| 2 | 6 | 2 | 6 + 2 |
| 3 | 8 | 3 | 8 + 3 |
| 4 | 11 | 4 | 11 + 4 |
| 5 | 15 | 5 | 15 + 5 |

## 8. includes()
1. Đối với mảng(array)
- Dùng để kiểm tra xem 1 mảng hoặc 1 chuỗi có chứa 1 ptu/kí tự nhất định không. Trả về giá trị `Boolean` 
- Cú pháp:
```
array.includes(valueToFind, fromIndex)
              //gtri muốn tìm, vị trí bắt đầu tìm kiếm(mặc định 0)
```
- Ví dụ:
```javascript
const hoaQua = ['Táo', 'Chuối', 'Xoài'];

console.log(hoaQua.includes('Chuối')); // true
console.log(hoaQua.includes('Lê'));    // false
```
2. Đối với chuỗi(string)
- Kiểm tra 1 chuỗi con có nằm trong chuỗi lớn không. Nó phân biệt chữ hoa chữ thường.
- Cú pháp:
```
string.includes(searchString, position)
```
- Ví dụ:
```javascript
const loiChao = "Chào mừng bạn đến với JavaScript";

console.log(loiChao.includes("Chào"));      // true
console.log(loiChao.includes("python"));    // false
console.log(loiChao.includes("Chào", 5));   // false (vì bắt đầu tìm từ vị trí index 5)
```
- **Lưu ý**:
```javascript
var khoaHoc = ['JS','PHP','Ruby']
console.log(khoaHoc.includes('JS', -3))
            //nghĩa là -3 + 3 = 0 -> ptu JS
```

- Các lưu ý:
```javascript
var khoaHoc = ['Toan','Van'];
khoaHoc.length = 10;
for(var index in khoaHoc){
  console.log(index);
  // thay vì trả về độ dài 10, nó sẽ chỉ lặp qua phần tử thực thôi(0, 1)
}
```


