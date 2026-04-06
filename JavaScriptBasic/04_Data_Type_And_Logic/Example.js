//Phần 1: Dữ liệu nguyên thuỷ(primitive data)

// 1. Number
var price = 500; // Số nguyên
var tax = 0.1;   // Số thập phân

// 2. String
var thuonghieu = 'May tinh MSI Gaming'; // Có thể dùng nháy đơn bao ngoài nháy kép

// 3. Boolean
var isFinished = true;
var isError = false;

// 4. Undefined (Biến chưa có giá trị)
var studentName; 
console.log(studentName); // Output: undefined

// 5. Null (Rỗng có mục đích)
var currentUser = null; // Hiện tại chưa có người dùng nào đăng nhập

// 6. Symbol (Tính duy nhất)
var id1 = Symbol('id');
var id2 = Symbol('id');
console.log(id1 === id2); // false (Dù cùng mô tả là 'id' nhưng chúng khác biệt hoàn toàn)

//Phần 2: Dữ liệu phức tạp (Complex data)

// 1. Function (Hàm)
// Node: Hàm giống như một cái máy, truyền nguyên liệu vào và nhận kết quả ra
var greeting = function() {
    console.log('Hello Guy');
};
// Phải gọi tên hàm mới thực thi
greeting(); 

// 2. Object (Đối tượng)
// Node: Dùng để mô tả một vật thể với nhiều thuộc tính 
var myLaptop = {
    thuonghieu: 'Dell',   //thuộc tính(có các đặc điểm gì?)
    ram: '16GB',        
    storage: '512GB',
    turnOn: function() { //phương thức(hành động gì?)
        console.log('Laptop đang khởi động...');
    }
};
console.log(myLaptop.brand); // Truy cập thuộc tính bằng dấu chấm (.)

// 3. Array (Mảng)
// Node: Một danh sách chứa nhiều phần tử, vị trí (index) bắt đầu từ 0
var languages = ['HTML', 'CSS', 'JavaScript', 'React'];
console.log(languages[2]); // Lấy phần tử thứ 3: 'JavaScript'

//Phần 3: Truthy và Falsy trong thực tế

// Ví dụ 1: Kiểm tra chuỗi rỗng (Falsy)
var message = ''; 
if (message) {
    console.log('Có tin nhắn');
} else {
    console.log('Không có tin nhắn'); // Chạy vào đây vì '' là Falsy
}

// Ví dụ 2: Kiểm tra mảng rỗng (Mảng rỗng là Truthy!)
var cart = [];
if (cart) {
    console.log('Giỏ hàng tồn tại (dù trống)'); // Truthy
}

// Ví dụ 3: Sử dụng !! để ép kiểu nhanh
var myName = 'Huy';
console.log(!!myName); // true (Vì 'Huy' là Truthy)

var zero = 0;
console.log(!!zero); // false (Vì 0 là Falsy)

//Phần 4: Toán tử TypeOf (Kiểm tra kiểu dữ liệu).

console.log(typeof 100);        // "number"git push -u origin main
console.log(typeof 'Hello');    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (Lưu ý: Lỗi huyền thoại của JS)
console.log(typeof []);         // "object" (Mảng cũng là một loại object)
console.log(typeof function(){}); // "function"

/**
 * NODE CUỐI CÙNG:
 * - Primitive Data: Lưu giá trị thực (Value).
 * - Complex Data: Lưu địa chỉ vùng nhớ (Reference).
 * - Luôn dùng === để so sánh để đảm bảo độ chính xác tuyệt đối.
 */
