# 📘 JavaScript: Data Types & Logical Operations

Nội dung này tổng hợp về các kiểu dữ liệu trong JavaScript và cách vận dụng logic điều kiện (Truthy/Falsy).

---

## 1. Kiểu dữ liệu (Data Types)

### A. Dữ liệu nguyên thủy (Primitive Data)
*Đặc điểm: Giá trị được lưu trực tiếp vào ô nhớ, không thể thay đổi (immutable).*

- **Number**: Số nguyên hoặc số thập phân. (VD: `10`, `3.14`)
- **String**: Chuỗi ký tự. (VD: `'Huy Nguyen'`)
- **Boolean**: Giá trị logic `true` hoặc `false`.
- **Undefined**: Biến đã khai báo nhưng chưa được gán giá trị.
- **Null**: Đại diện cho một giá trị "không có gì" hoặc rỗng.
- **Symbol**: Dùng để tạo ra các thực thể duy nhất.

### B. Dữ liệu phức tạp (Complex Data)
- **Function**: Một khối mã thực hiện một nhiệm vụ cụ thể.
- **Object**: Lưu trữ dữ liệu dưới dạng cặp `key: value`.
- **Array**: Một dạng đặc biệt của Object, lưu trữ danh sách theo thứ tự (index).
var moto(){
thuonghieu: yamaha,
giatien: 15000000,
di chuyen(), 
doxang()
};

> **💡 Mẹo:** Sử dụng toán tử `typeof` để kiểm tra kiểu dữ liệu của một biến.
> *Chú ý: `typeof null` sẽ trả về `"object"` (đây là một lỗi lịch sử của JS).*

---

## 2. Logic & Điều kiện (If-Else)

Cấu trúc điều kiện dùng để thực hiện các hành động khác nhau dựa trên các quyết định khác nhau.

```javascript
if (điều kiện) {
    // Thực thi nếu điều kiện đúng (true)
} else {
    // Thực thi nếu điều kiện sai (false)
}
```

# 📘 JavaScript: Data Types & Logical Operations (Phần 2)

Tiếp tục đi sâu vào các kiểu dữ liệu phức tạp và cơ chế chuyển đổi logic trong JavaScript.

---

## 1. Dữ liệu phức tạp (Complex Data)
Khác với dữ liệu nguyên thủy (lưu giá trị cụ thể), dữ liệu phức tạp lưu trữ **tham chiếu (reference)** đến vùng nhớ chứa dữ liệu đó.

### 🔹 Function (Hàm)
Là một khối mã được thiết kế để thực hiện một nhiệm vụ cụ thể. Hàm giúp tái sử dụng code và làm chương trình gọn gàng hơn.
- **Khai báo:** `function name() { ... }`
- **Thực thi:** Phải gọi tên hàm kèm cặp ngoặc `()` thì mã bên trong mới chạy.
- **Return:** Dùng để trả về giá trị sau khi xử lý.

### 🔹 Object (Đối tượng)
Dùng để mô tả một thực thể cụ thể với các đặc điểm (Properties) và hành động (Methods).
- **Cấu trúc:** `{ key: value }`.
- **Property:** Lưu trạng thái (Ví dụ: `name: 'Huy'`).
- **Method:** Lưu hành động (Ví dụ: `run: function() { ... }`).

Cú pháp:
```
var object{
    //kèm thêm dấu ; ở sau ngoặc nhọn
}; 
```
### 🔹 Array (Mảng)
Là một danh sách các phần tử được sắp xếp theo thứ tự. Bản chất Array cũng là một Object đặc biệt.
- **Cấu trúc:** `[item1, item2, ...]`.
- **Index:** Vị trí phần tử bắt đầu từ **0**.
- **Đặc điểm:** Có thể chứa mọi kiểu dữ liệu (Số, chuỗi, object, thậm chí là mảng khác).

---

## 2. Cơ chế Truthy & Falsy

Trong JavaScript, khi ta đặt một giá trị vào môi trường Boolean (như trong lệnh `if`), JS sẽ tự động ép kiểu giá trị đó về `true` hoặc `false`.



### ❌ Falsy (Luôn là False)
Chỉ có duy nhất **6 giá trị** sau đây được coi là Falsy. Hãy học thuộc lòng danh sách này:
1. `false`: Chính nó là sai.
2. `0`: Số không (bao gồm cả `-0`).
3. `''` hoặc `""`: Chuỗi rỗng (không có ký tự nào, kể cả dấu cách).
4. `null`: Giá trị rỗng có chủ đích.
5. `undefined`: Giá trị chưa xác định.
6. `NaN`: Not a Number (kết quả của phép toán sai, VD: `10 / 'abc'`).

### ✅ Truthy (Luôn là True)
Bất cứ thứ gì **KHÔNG** nằm trong danh sách 6 cái trên đều là Truthy. 
**Lưu ý các trường hợp dễ nhầm lẫn (đều là Truthy):**
- `'0'`: Chuỗi có chứa ký tự "0" (không phải số 0).
- `' '`: Chuỗi có một dấu cách.
- `[]`: Mảng rỗng.
- `{}`: Đối tượng rỗng.
- `true`: Chính nó là đúng.

---

## 3. Kỹ thuật Phủ định (The "Bang-Bang" Operator `!!`)

Toán tử `!` dùng để phủ định một giá trị. Khi dùng `!!`, ta thực hiện "phủ định của phủ định", giúp ép kiểu dữ liệu bất kỳ sang Boolean một cách nhanh nhất.

```javascript
var name = 'Huy';

console.log(!name);   // false (Phủ định của một chuỗi có giá trị là false)
console.log(!!name);  // true (Phủ định của false là true -> Xác nhận đây là Truthy)

// Ứng dụng: Kiểm tra nhanh xem mảng có dữ liệu không
var list = [];
console.log(!!list); // true (Mảng rỗng vẫn là Truthy!)
