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
