# Variable (Giá trị) và Comment


- **Khai báo:(có 3 biến)**
  - `var`: Khai báo biến (phạm vi global/function).
  - `let`: Khai báo biến hiện đại, có phạm vi khối (block scope). (chỉ tồn tại trong dấu {})
  - `const`(hằng số): khai báo 1 biến và không thể thay đổi

  Ví dụ:
```
const pi = 3.14; //Không thể gán lại giá trị.
pi = 3.15; // ❌ Lỗi

const age; // ❌ Lỗi, phải gán giá trị sau khi khai báo 
const birthYear = 2000; // ✅ Đúng

if (true) {
    const message = "Chào bạn!";
}   //Phạm vi khối: chỉ tồn tại bên trong dấu ngoặc nhọn {} nơi nó được khai báo.
console.log(message); // ❌ Lỗi: message is not defined (vì nó nằm trong if)
```

- **Comment:**
  - `//`: Comment một dòng.
  - `/* */`: Comment nhiều dòng/khối code.

# So sánh var và const trong JavaScript

Dưới đây là bảng so sánh chi tiết giữa cách khai báo biến bằng `var` và hằng số bằng `const`.

| Đặc điểm | `var` (Variable) | `const` (Constant) |
| :--- | :--- | :--- |
| **Gán lại giá trị** | Có thể gán lại thoải mái. | **Không thể** gán lại. |
| **Phạm vi (Scope)** | **Function scope:** Có tác dụng trong toàn bộ hàm. | **Block scope:** Chỉ có tác dụng trong cặp ngoặc `{ }` chứa nó. |
| **Hoisting** | Có (được đưa lên đầu nhưng giá trị là `undefined`). | Có, nhưng không thể truy cập trước khi khai báo (Temporal Dead Zone). |
| **Khai báo lại** | Có thể khai báo trùng tên nhiều lần. | **Lỗi** nếu khai báo trùng tên trong cùng một phạm vi. |

## Giải thích chi tiết bằng Code

### 1. Gán lại giá trị
```javascript
var a = 10;
a = 20; // Hợp lệ

const b = 10;
b = 20; // LỖI: Assignment to constant variable.