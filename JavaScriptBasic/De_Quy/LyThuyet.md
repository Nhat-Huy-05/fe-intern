# ĐỆ QUY (RECURSION) TRONG JAVASCRIPT

## 📖 1. ĐỊNH NGHĨA

**Đệ quy** là một kỹ thuật lập trình trong đó một hàm **tự gọi lại chính nó** để giải quyết bài toán.

### Ví dụ đời thường:
Tưởng tượng bạn đứng giữa 2 gương đối diện nhau. Bạn sẽ thấy hình ảnh của mình lặp lại vô tận trong gương. Đó chính là đệ quy - một thứ lặp lại chính nó!

### Khi nào nên dùng đệ quy?
- Khi bài toán có thể chia nhỏ thành các bài toán con giống nhau
- Khi có cấu trúc lặp lại (như cây, danh sách liên kết)
- Ví dụ: Tính giai thừa, duyệt cây thư mục, tìm kiếm nhị phân

---

## 🔑 2. HAI PHẦN QUAN TRỌNG CỦA ĐỆ QUY

Mọi hàm đệ quy **BẮT BUỘC** phải có 2 phần:

### ① Điểm dừng (Base Case)
- Là điều kiện để hàm **NGỪNG** gọi chính nó
- **QUAN TRỌNG**: Không có điểm dừng → Vòng lặp vô tận → Treo chương trình!

### ② Bước đệ quy (Recursive Step)
- Phần hàm gọi lại chính nó
- Mỗi lần gọi phải với giá trị **nhỏ hơn** hoặc **đơn giản hơn**
- Cuối cùng phải đến được điểm dừng

---

## 📝 3. CÚ PHÁP TỔNG QUÁT

```javascript
function tenHam(thamSo) {
    // ① ĐIỂM DỪNG (Base Case)
    if (điều_kiện_dừng) {
        return giá_trị_cơ_bản;
    }
    
    // ② BƯỚC ĐỆ QUY (Recursive Step)
    return tenHam(thamSo_nhỏ_hơn);
}
```

---

## 💡 4. VÍ DỤ 1: TÍNH GIAI THỪA (FACTORIAL)

### Khái niệm:
Giai thừa của n (ký hiệu n!) là tích của tất cả các số từ 1 đến n.
- 5! = 5 × 4 × 3 × 2 × 1 = 120
- 3! = 3 × 2 × 1 = 6
- 1! = 1
- 0! = 1 (quy ước)

### Code:
```javascript
function factorial(n) {
    // ① ĐIỂM DỪNG: Nếu n là 0 hoặc 1, trả về 1
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // ② BƯỚC ĐỆ QUY: n! = n × (n-1)!
    return n * factorial(n - 1);
}

// Sử dụng:
console.log(factorial(5)); // Kết quả: 120
console.log(factorial(3)); // Kết quả: 6
console.log(factorial(0)); // Kết quả: 1
```

### 🔍 Giải thích chi tiết cách hoạt động:

Khi gọi `factorial(5)`, máy tính sẽ xử lý như sau:

```
factorial(5)
│
├─ 5 === 0 || 5 === 1? → KHÔNG
├─ return 5 * factorial(4)
│              │
│              ├─ 4 === 0 || 4 === 1? → KHÔNG
│              ├─ return 4 * factorial(3)
│              │              │
│              │              ├─ 3 === 0 || 3 === 1? → KHÔNG
│              │              ├─ return 3 * factorial(2)
│              │              │              │
│              │              │              ├─ 2 === 0 || 2 === 1? → KHÔNG
│              │              │              ├─ return 2 * factorial(1)
│              │              │              │              │
│              │              │              │              ├─ 1 === 0 || 1 === 1? → CÓ!
│              │              │              │              └─ return 1 ✓
│              │              │              │
│              │              │              └─ return 2 * 1 = 2
│              │              │
│              │              └─ return 3 * 2 = 6
│              │
│              └─ return 4 * 6 = 24
│
└─ return 5 * 24 = 120
```

### 📊 Bảng theo dõi từng bước:

| Bước | Lời gọi hàm | Điều kiện dừng? | Trả về |
|------|-------------|-----------------|--------|
| 1 | factorial(5) | KHÔNG | 5 × factorial(4) |
| 2 | factorial(4) | KHÔNG | 4 × factorial(3) |
| 3 | factorial(3) | KHÔNG | 3 × factorial(2) |
| 4 | factorial(2) | KHÔNG | 2 × factorial(1) |
| 5 | factorial(1) | **CÓ** | **1** |
| 6 | ← Tính ngược | - | 2 × 1 = 2 |
| 7 | ← Tính ngược | - | 3 × 2 = 6 |
| 8 | ← Tính ngược | - | 4 × 6 = 24 |
| 9 | ← Tính ngược | - | 5 × 24 = **120** |

---

## 💡 5. VÍ DỤ 2: TÍNH TỔNG TỪ 1 ĐẾN N

### Bài toán:
Tính tổng các số từ 1 đến n.
- sum(5) = 1 + 2 + 3 + 4 + 5 = 15
- sum(3) = 1 + 2 + 3 = 6

### Code:
```javascript
function sum(n) {
    // ① ĐIỂM DỪNG: Nếu n = 1, trả về 1
    if (n === 1) {
        return 1;
    }
    
    // ② BƯỚC ĐỆ QUY: sum(n) = n + sum(n-1)
    return n + sum(n - 1);
}

// Sử dụng:
console.log(sum(5)); // Kết quả: 15
console.log(sum(3)); // Kết quả: 6
```

### 🔍 Giải thích:

```
sum(5)
= 5 + sum(4)
= 5 + (4 + sum(3))
= 5 + (4 + (3 + sum(2)))
= 5 + (4 + (3 + (2 + sum(1))))
= 5 + (4 + (3 + (2 + 1)))      ← Chạm điểm dừng!
= 5 + (4 + (3 + 3))
= 5 + (4 + 6)
= 5 + 10
= 15
```

---

## 💡 6. VÍ DỤ 3: DÃY FIBONACCI

### Khái niệm:
Dãy Fibonacci: Mỗi số là tổng của 2 số trước nó.
- F(0) = 0
- F(1) = 1
- F(n) = F(n-1) + F(n-2)
- Dãy: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

### Code:
```javascript
function fibonacci(n) {
    // ① ĐIỂM DỪNG: F(0) = 0, F(1) = 1
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    // ② BƯỚC ĐỆ QUY: F(n) = F(n-1) + F(n-2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Sử dụng:
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(5)); // 5
console.log(fibonacci(7)); // 13
```

### 🔍 Giải thích fibonacci(5):

```
                    fibonacci(5)
                   /            \
          fibonacci(4)          fibonacci(3)
         /          \           /          \
   fibonacci(3)  fibonacci(2)  fibonacci(2)  fibonacci(1)
    /      \       /      \      /      \         |
  f(2)    f(1)   f(1)    f(0)  f(1)    f(0)      1
  / \      |      |       |     |       |
f(1) f(0)  1      1       0     1       0
 |    |
 1    0

Kết quả: 5
```

---

## 💡 7. VÍ DỤ 4: ĐẾM NGƯỢC

### Code:
```javascript
function countdown(n) {
    // ① ĐIỂM DỪNG: Nếu n < 1, dừng lại
    if (n < 1) {
        console.log("Hết!");
        return;
    }
    
    // In ra số hiện tại
    console.log(n);
    
    // ② BƯỚC ĐỆ QUY: Gọi lại với n-1
    countdown(n - 1);
}

// Sử dụng:
countdown(5);
```

### 📤 Kết quả in ra:
```
5
4
3
2
1
Hết!
```

---

## ⚠️ 8. LƯU Ý QUAN TRỌNG

### ❌ Lỗi thường gặp: KHÔNG CÓ ĐIỂM DỪNG

```javascript
// SAI - Vòng lặp vô tận!
function badRecursion(n) {
    return n + badRecursion(n - 1); // Không có điểm dừng!
}

// badRecursion(5) → Lỗi: Maximum call stack size exceeded
```

### ✅ Cách sửa: LUÔN CÓ ĐIỂM DỪNG

```javascript
// ĐÚNG
function goodRecursion(n) {
    if (n === 0) return 0; // ← Điểm dừng
    return n + goodRecursion(n - 1);
}
```

### 🎯 Checklist khi viết đệ quy:

- [ ] Có điểm dừng (base case) chưa?
- [ ] Mỗi lần gọi đệ quy có tiến gần đến điểm dừng không?
- [ ] Điểm dừng có trả về giá trị đúng không?
- [ ] Có xử lý trường hợp đặc biệt (n = 0, n âm...) chưa?

---

## 🆚 9. SO SÁNH ĐỆ QUY VS VÒNG LẶP

### Cùng bài toán: Tính tổng từ 1 đến n

**Cách 1: Dùng đệ quy**
```javascript
function sumRecursive(n) {
    if (n === 1) return 1;
    return n + sumRecursive(n - 1);
}
```

**Cách 2: Dùng vòng lặp**
```javascript
function sumLoop(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
```

### So sánh:

| Tiêu chí | Đệ quy | Vòng lặp |
|----------|--------|----------|
| **Dễ hiểu** | ✅ Dễ hiểu với bài toán phức tạp | ⚠️ Khó với bài toán phức tạp |
| **Hiệu suất** | ⚠️ Chậm hơn (nhiều lời gọi hàm) | ✅ Nhanh hơn |
| **Bộ nhớ** | ⚠️ Tốn nhiều bộ nhớ (call stack) | ✅ Ít tốn bộ nhớ |
| **Code** | ✅ Ngắn gọn, thanh lịch | ⚠️ Dài dòng hơn |
| **Rủi ro** | ⚠️ Stack overflow nếu đệ quy sâu | ✅ An toàn |

### Khi nào dùng đệ quy?
- ✅ Bài toán có cấu trúc đệ quy tự nhiên (cây, đồ thị)
- ✅ Code ngắn gọn, dễ hiểu hơn nhiều so với vòng lặp
- ✅ Độ sâu đệ quy không quá lớn (< 1000 lần)

### Khi nào dùng vòng lặp?
- ✅ Cần hiệu suất cao
- ✅ Số lần lặp rất lớn
- ✅ Bài toán đơn giản

---

## 🎓 10. BÀI TẬP THỰC HÀNH

### Bài 1: Tính lũy thừa
Viết hàm `power(x, n)` tính x^n bằng đệ quy.
```javascript
// Ví dụ: power(2, 3) = 2 * 2 * 2 = 8
function power(x, n) {
    // Viết code ở đây
}
```

<details>
<summary>💡 Xem đáp án</summary>

```javascript
function power(x, n) {
    // Điểm dừng
    if (n === 0) return 1;
    
    // Bước đệ quy
    return x * power(x, n - 1);
}

console.log(power(2, 3)); // 8
console.log(power(5, 2)); // 25
```
</details>

### Bài 2: Đảo ngược chuỗi
Viết hàm `reverse(str)` đảo ngược chuỗi bằng đệ quy.
```javascript
// Ví dụ: reverse("hello") = "olleh"
function reverse(str) {
    // Viết code ở đây
}
```

<details>
<summary>💡 Xem đáp án</summary>

```javascript
function reverse(str) {
    // Điểm dừng: chuỗi rỗng hoặc 1 ký tự
    if (str.length <= 1) return str;
    
    // Bước đệ quy: lấy ký tự cuối + đảo phần còn lại
    return str[str.length - 1] + reverse(str.slice(0, -1));
}

console.log(reverse("hello")); // "olleh"
console.log(reverse("abc"));   // "cba"
```
</details>

### Bài 3: Tìm số lớn nhất trong mảng
Viết hàm `findMax(arr)` tìm số lớn nhất bằng đệ quy.
```javascript
// Ví dụ: findMax([3, 7, 2, 9, 1]) = 9
function findMax(arr) {
    // Viết code ở đây
}
```

<details>
<summary>💡 Xem đáp án</summary>

```javascript
function findMax(arr) {
    // Điểm dừng: mảng chỉ có 1 phần tử
    if (arr.length === 1) return arr[0];
    
    // So sánh phần tử đầu với max của phần còn lại
    const maxOfRest = findMax(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

console.log(findMax([3, 7, 2, 9, 1])); // 9
```
</details>

---

## 📚 11. TÓM TẮT

✅ **Đệ quy** = Hàm tự gọi lại chính nó

✅ **2 phần bắt buộc**:
   1. Điểm dừng (Base case)
   2. Bước đệ quy (Recursive step)

✅ **Ưu điểm**: Code ngắn gọn, dễ hiểu với bài toán phức tạp

✅ **Nhược điểm**: Chậm hơn, tốn bộ nhớ, có thể stack overflow

✅ **Lưu ý**: Luôn đảm bảo có điểm dừng và tiến gần đến điểm dừng!

---
