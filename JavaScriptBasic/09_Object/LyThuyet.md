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

