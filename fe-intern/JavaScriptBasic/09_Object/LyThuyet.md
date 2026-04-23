# Đối tượng trong JS.
```javascript
var person = {
  name: "Nguyễn Văn A", // 'name' là key, "Nguyễn Văn A" là value
  age: 25,
  isStudent: false,
  "home address": "Hà Nội" // Key có khoảng trắng phải đặt trong ngoặc kép
};

// Truy cập
console.log(person.name); // Output: Nguyễn Văn A
console.log(person["home address"]); // Output: Hà Nội

// Thêm hoặc thay đổi thuộc tính
person.age = 26; // Đổi tuổi thành 26
person.job = "Developer"; // Thêm thuộc tính mới là job

// Xóa một thuộc tính
delete person.isStudent;


//2.Phương thức của Object(Methods)
var car = {
  brand: "Toyota",
  model: "Camry",
  startEngine: function() {
    console.log(`Động cơ của xe ${this.brand} ${this.model} đã khởi động!`);
  }
};

car.startEngine(); // Output: Động cơ của xe Toyota Camry đã khởi động!
```

## Object là kiểu dữ liệu tham chiếu
- Object chỉ lưu trữ địa chỉ bộ nhớ.
- Nếu gán 1 object cho 1 biến khác, cả 2 biến sẽ cùng trỏ về 1 địa chỉ. Thay đổi biến sẽ làm thay đổi biến kia.
```javascript
var obj1 = { name: "Mèo" };
var obj2 = obj1; // obj2 đang tham chiếu đến cùng địa chỉ bộ nhớ với obj1

obj2.name = "Chó";

console.log(obj1.name); // Output: "Chó" (obj1 cũng bị thay đổi!)
```
## Các hàm tích hợp sẵn (Built-in Methods)

- `Object.keys(obj)`: Trả về 1 mảng chứa tất cả các keys.
- `Object.values(obj)`: Trả về 1 mảng chứa tất cả các values.
- `Object.entries(obj)`: Trả về 1 mảng chứa các mảng con `[key, value]`.
```javascript
var user = { id: 1, role: "admin" };

console.log(Object.keys(user));   // ["id", "role"]
console.log(Object.values(user)); // [1, "admin"]
console.log(Object.entries(user)); // [["id", 1], ["role", "admin"]]
```
# Object Constructor
- Object Constructor là `cái khuôn`(blueprint). Giúp tạo ra nhiều object có cùng cấu trúc(cùng các key, method) 1 cách nhanh chóng.
## 1.Cách tạo 1 Object Constructor

- Để tạo 1 cái khuôn, ta cần định nghĩa 1 hàm(function).
- Có 1 quy ước bắt buộc: Tên của hàm khởi tạo `viết hoa chữ cái đầu tiên` để phân biệt với hàm thông thường.
- Bên trong hàm sử dụng từ khoá `this` để đại diện cho object sắp tạo ra.
```javascript
//Đây là khuôn cho đối tượng Người dùng (user)
function user(firstName, lastName, age){
    //Định nghĩa thuộc tính.
 this.firstName =  firstName;
 this.lastName = lastName;
 this.age = age;
 
 //Định nghĩa phương thức (method)
 this.getFullName = function(){
    return this.firstName +' '+ this.lastName;
 };
}
```
## 2.Cách sử dụng(Tạo object từ khuôn)

- Khi đã có khuôn, dùng từ khoá `new` để tạo các object mới.
```javascript
// Dùng khuôn để tạo ra các object cụ thể
const user1 = new User("Nguyễn", "Văn A", 25);
const user2 = new User("Trần", "Thị B", 22);

console.log(user1.firstName); // Output: Nguyễn
console.log(user2.getFullName()); // Output: Trần Thị B
```
## 3. Bổ sung thuộc tính sau khi đã có khuôn.

- Nếu đã tạo các object, có thể thêm thuộc tính cho 1 ob cụ thể mà k ảnh hưởng các ob khác.
```javascript
user1.email = "vana@gmail.com";
//Chỉ user1 có email, user2 không có.
```
**Lưu ý**: Làm sao để thêm 1 thuộc tính mới vào khuôn để tất cả các object đều có?

Không thể viết thẳng user.email = "..." được. Phải sử dụng `Prototype`.
```javascript
user.prototype.nationality = "Việt Nam";
console.log(user1.nationality); //VN
console.log(user2.nationality); //VN
```
# Đối tượng Date

- Làm việc với các giá trị thời gian.
```javascript
var date = new Date();
console.log(date); // trả về thời gian hiện tại
```
- Các phương thức Get(lấy thông tin)

| Phương thức | Ý nghĩa | Giá trị trả về |
| :- | :- | :- |
| getFullyear() | Lấy năm | 2026 |
| getMonth() | Lấy tháng | 0 - 11 (Tháng 1 là 0) |
| getDate() | Lấy ngày trong tháng | 1 - 31 |
| getDay() | Lấy thứ trong tuần | 0 - 6(Chủ nhật là 0) |
| getHours() | Lấy giờ | 0 - 23 |
| getTime() | Lấy timestamp | Tính bằng miligiay |
**Lưu ý**: Tháng trong JS bắt đầu từ 0(T1) đến 11(T12). Phải cộng thêm 1
VD: getMonth() + 1;
## 1.Các phương thức set
- `date.setFullYear(2027)`;
- `date.setMonth(5)`; //Đổi sang tháng 6
- `date.setDate(25)`;
## Ví dụ thực tế: (Hiển thị ngày/tháng/năm hiện tại)
```javascript
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
console.log(`${day}/${month}/${year}`);
```
# Đối tượng math
## 1.`Math.PI` (Số Pi)
- Trả về giá trị xấp xỉ số pi.
```javascript
console.log(Math.PI); /3,14....
```
## 2.`Math.round()` (Làm tròn số)
- Làm tròn số nguyên gần nhất ( từ `.5 trở lên` là làm tròn.)
```javascript
console.log(Math.round(4.4));//4
console.log(Math.round(4.5)); //5
```
## 3.`Math.abs()` (Giá trị tuyệt đối)
- Biến mọi số thành số dương ( `bỏ dấu âm`)
```javascript
console.log(Math.abs(-10)); //10
```
## 4.`Math.ceil()` (Làm tròn lên)
- Luôn làm tròn lên số nguyên, dù `phần thập phân rất nhỏ`
```javascript
console.log(Math.ceil(4.1));//5
```
## 5.`Math.floor()` (Làm tròn xuống)
- Luôn làm tròn xuống số nguyên phía dưới, vứt phần thập phân.
```javascript
console.log(Math.floor(4.9)); //4
```
## 6.`Math.random()` (Số ngẫu nhiên)
- Trả về 1 số thập phân ngẫu nhiên từ 0 đến sát 1 (`không bao giờ bằng 1`).
```javascript
console.log(Math.random()); //VD: 0.8234
```
## 7.`Math.min()` và `Math.max()`
- `min`: Tìm số nhỏ nhất trong dãy.
- `max`: Tìm số lớn nhất trong dãy.
```javascript
console.log(Math.min(10, 20, 5, -1));// -1
console.log(Math.max(10, 20, 5, -1));// 20
```

**Lưu ý**:
- Kết hợp `random` và `floor`: Lấy số ngẫu nhiên.
- Ví dụ: Lấy số ngẫu nhiên từ 0 đến 9.
```javascript
var randomInt = Math.floor(Math.random() * 10);
```
