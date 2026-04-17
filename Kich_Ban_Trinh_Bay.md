# 🎤 KỊCH BẢN TRÌNH BÀY BÁO CÁO HỌC TẬP

---

## 🎯 PHẦN MỞ ĐẦU (30 giây)

**Lời chào:**
> "Xin chào mọi người! Hôm nay mình xin phép chia sẻ về những gì mình đã học được trong tuần này. Tuần này mình tập trung chủ yếu vào JavaScript cơ bản và bắt đầu làm quen với ReactJS."

**Giới thiệu tổng quan:**
> "Cụ thể, mình đã học 4 phần chính:
> 1. Vòng lặp và Đệ quy
> 2. Các phương thức xử lý mảng
> 3. Callback function
> 4. Và bắt đầu tìm hiểu ReactJS cùng ES6+
> 
> Giờ mình sẽ đi vào chi tiết từng phần nhé!"

---

## 📚 PHẦN 1: VÒNG LẶP VÀ ĐỆ QUY (3-4 phút)

### Giới thiệu:
> "Đầu tiên là về Vòng lặp. Vòng lặp là gì? Đơn giản là khi bạn muốn làm một việc lặp đi lặp lại nhiều lần, thay vì viết code nhiều lần, bạn dùng vòng lặp."

### Trình bày các loại vòng lặp:

**1. Vòng lặp FOR:**
> "Vòng lặp đầu tiên là `for`. Dùng khi bạn biết trước số lần lặp.
> 
> Ví dụ: Mình muốn in ra các số từ 0 đến 4."

```javascript
for(let i = 0; i < 5; i++) {
    console.log(i);
}
```

> "Kết quả sẽ in ra: 0, 1, 2, 3, 4. Rất đơn giản phải không?"

**2. Vòng lặp FOR...IN:**
> "Tiếp theo là `for...in`, dùng để lặp qua các thuộc tính của một object.
> 
> Ví dụ: Mình có một object person với tên và tuổi."

```javascript
const person = {name: "An", age: 20};
for(let key in person) {
    console.log(key);
}
```

> "Nó sẽ in ra: name, age - tức là các key của object."

**3. Vòng lặp FOR...OF:**
> "Còn `for...of` thì ngược lại, nó lặp qua các giá trị trong mảng."

```javascript
const arr = ['a', 'b', 'c'];
for(let value of arr) {
    console.log(value);
}
```

> "Kết quả: a, b, c - chính là các giá trị trong mảng."

**4. WHILE và DO...WHILE:**
> "Còn `while` thì lặp khi điều kiện còn đúng. Còn `do...while` đặc biệt hơn, nó chạy ít nhất 1 lần trước khi kiểm tra điều kiện."

### Đệ quy:
> "Phần thú vị là Đệ quy. Đệ quy là gì? Là hàm tự gọi lại chính nó!
> 
> Nghe có vẻ kỳ lạ nhỉ? Nhưng nó rất hữu ích. Ví dụ tính giai thừa:"

```javascript
function factorial(n) {
    if(n === 0 || n === 1) return 1;  // Điểm dừng
    return n * factorial(n - 1);       // Gọi lại chính nó
}
```

> "Khi gọi factorial(5), nó sẽ tính 5 × 4 × 3 × 2 × 1 = 120.
> 
> Điều quan trọng là phải có điểm dừng, không thì nó sẽ lặp mãi!"

**Kết phần 1:**
> "Vậy là mình đã hiểu về các loại vòng lặp và đệ quy. Giờ chuyển sang phần 2."

---

## 🔧 PHẦN 2: TỐI ƯU HÓA VỚI ARRAY METHODS (4-5 phút)

### Giới thiệu:
> "Phần 2 là về các phương thức xử lý mảng. Tại sao cần học cái này?
> 
> Vì thay vì viết vòng lặp for dài dòng, mình có thể dùng các phương thức có sẵn, code ngắn gọn và dễ đọc hơn nhiều!"

### Trình bày từng phương thức:

**1. forEach():**
> "Đầu tiên là `forEach`, dùng để duyệt qua từng phần tử."

```javascript
[1,2,3].forEach(num => console.log(num * 2));
// In ra: 2, 4, 6
```

> "Nó sẽ nhân mỗi số với 2 rồi in ra."

**2. map():**
> "Tiếp theo là `map`, nó tạo ra một mảng mới."

```javascript
const doubled = [1,2,3].map(num => num * 2);
// Kết quả: [2, 4, 6]
```

> "Khác với forEach, map trả về một mảng mới chứ không chỉ in ra."

**3. filter():**
> "Còn `filter` thì lọc các phần tử thỏa điều kiện."

```javascript
const filtered = [1,2,3,4].filter(num => num > 2);
// Kết quả: [3, 4]
```

> "Nó chỉ giữ lại những số lớn hơn 2."

**4. reduce():**
> "Phương thức mạnh nhất là `reduce`. Nó tích lũy thành một giá trị duy nhất."

```javascript
const sum = [1,2,3].reduce((total, num) => total + num, 0);
// Kết quả: 6
```

> "Ở đây nó cộng dồn tất cả các số lại: 0 + 1 = 1, 1 + 2 = 3, 3 + 3 = 6."

**5. find(), some(), every():**
> "Còn một số phương thức khác như:
> - `find`: Tìm phần tử đầu tiên thỏa điều kiện
> - `some`: Kiểm tra có ít nhất 1 phần tử thỏa điều kiện không
> - `every`: Kiểm tra tất cả phần tử có thỏa điều kiện không"

**Kết phần 2:**
> "Vậy là mình đã biết cách tối ưu code bằng các Array Methods. Sang phần 3!"

---

## 🔄 PHẦN 3: CALLBACK FUNCTION (3-4 phút)

### Giới thiệu:
> "Phần 3 là về Callback. Callback là gì?
> 
> Đơn giản là một hàm được truyền vào như đối số của hàm khác, và hàm đó sẽ 'gọi lại' nó."

### Ví dụ đơn giản:
> "Để dễ hiểu, mình có ví dụ này:"

```javascript
function xinChao(ten, callback) {
    console.log("Chuẩn bị...");
    callback(ten);  // Gọi lại hàm callback
}

function hienThi(ten) {
    console.log("Xin chào " + ten);
}

xinChao("An", hienThi);
```

> "Khi chạy, nó sẽ in ra:
> - 'Chuẩn bị...'
> - 'Xin chào An'
> 
> Hàm `hienThi` được truyền vào như một callback và được gọi lại bên trong hàm `xinChao`."

### Thực hành xây dựng map2():
> "Phần thú vị là mình đã thực hành tự xây dựng phương thức `map2()` giống như `map()` gốc.
> 
> Điều này giúp mình hiểu sâu hơn cách hoạt động bên trong của các Array Methods."

```javascript
Array.prototype.map2 = function(callback) {
    const result = [];
    for(let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i));
    }
    return result;
}
```

> "Và nó hoạt động giống hệt map() gốc!"

**Kết phần 3:**
> "Callback rất quan trọng trong JavaScript, đặc biệt khi làm việc với bất đồng bộ. Giờ sang phần cuối!"

---

## ⚛️ PHẦN 4: REACTJS VÀ ES6+ (5-6 phút)

### Giới thiệu:
> "Phần cuối cùng, mình bắt đầu tìm hiểu về ReactJS và các tính năng ES6+ của JavaScript hiện đại."

### SPA vs MPA:
> "Đầu tiên là phân biệt SPA và MPA.
> 
> **SPA** - Single Page Application:
> - Chỉ tải 1 trang HTML duy nhất
> - Chuyển trang không reload trình duyệt
> - Ví dụ: Gmail, Facebook
> - Ưu điểm: Mượt mà, nhanh
> - Nhược điểm: SEO kém
> 
> **MPA** - Multi-Page Application:
> - Mỗi trang là 1 file HTML riêng
> - Chuyển trang phải reload
> - Ví dụ: Website tin tức
> - Ưu điểm: SEO tốt
> - Nhược điểm: Chuyển trang chậm hơn"

### ES6+ Features:

**1. Let và Const:**
> "Với ES6+, mình có `let` và `const` thay cho `var`.
> - `let`: Biến có thể thay đổi
> - `const`: Hằng số không đổi"

```javascript
let age = 20;
age = 21;  // OK

const pi = 3.14;
pi = 3.15;  // LỖI!
```

**2. Template Literals:**
> "Template Literals giúp nối chuỗi dễ dàng hơn với dấu backtick."

```javascript
const name = "An";
console.log(`Xin chào ${name}`);
// Kết quả: "Xin chào An"
```

> "Không cần dùng dấu + nữa, rất tiện!"

**3. Arrow Function:**
> "Arrow function giúp viết hàm ngắn gọn hơn."

```javascript
// Cách cũ
function sum(a, b) {
    return a + b;
}

// Cách mới
const sum = (a, b) => a + b;
```

> "Ngắn gọn và dễ đọc hơn nhiều!"

**4. Destructuring:**
> "Destructuring giúp tách mảng hoặc object thành các biến riêng."

```javascript
const [a, b] = [1, 2];  // a=1, b=2
const {name, age} = {name: "An", age: 20};
```

> "Rất hữu ích khi làm việc với dữ liệu phức tạp!"

**5. Spread Operator:**
> "Spread operator (...) giúp rải mảng hoặc object ra."

```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];  // [1,2,3,4]
```

> "Dùng để sao chép hoặc nối mảng rất tiện!"

**6. Modules:**
> "Cuối cùng là Modules, giúp chia code thành nhiều file."

```javascript
// file math.js
export const sum = (a,b) => a + b;

// file main.js
import { sum } from './math.js';
```

> "Giúp code dễ quản lý hơn khi dự án lớn!"

---

## 🎬 PHẦN KẾT THÚC (1 phút)

**Tổng kết:**
> "Vậy là mình đã chia sẻ xong những gì học được trong tuần này:
> 
> 1. ✅ Vòng lặp và Đệ quy - Giúp lặp code hiệu quả
> 2. ✅ Array Methods - Tối ưu hóa xử lý mảng
> 3. ✅ Callback - Hiểu cách hàm hoạt động
> 4. ✅ ReactJS và ES6+ - Bắt đầu với công nghệ hiện đại
> 
> Tuần tới mình sẽ tiếp tục đi sâu hơn vào ReactJS!"

**Lời cảm ơn:**
> "Cảm ơn mọi người đã lắng nghe! Nếu có câu hỏi gì, mọi người cứ thoải mái hỏi nhé!"

---

## 💡 MẸO TRÌNH BÀY:

### Trước khi trình bày:
- ✅ Đọc kỹ kịch bản 2-3 lần
- ✅ Chuẩn bị demo code nếu có thể
- ✅ Kiểm tra thời gian (khoảng 15-20 phút)

### Trong khi trình bày:
- 🎯 Nói chậm, rõ ràng
- 👀 Nhìn vào người nghe
- 😊 Tự tin và thoải mái
- 🖐️ Dùng tay để nhấn mạnh ý quan trọng
- ⏸️ Dừng lại sau mỗi phần để người nghe tiếp thu

### Khi có câu hỏi:
- 👂 Lắng nghe kỹ câu hỏi
- 🤔 Suy nghĩ trước khi trả lời
- 💬 Trả lời ngắn gọn, dễ hiểu
- ❓ Nếu không biết, thành thật nói "Mình sẽ tìm hiểu thêm"

### Ngôn ngữ cơ thể:
- ✅ Đứng thẳng, tự tin
- ✅ Mỉm cười tự nhiên
- ✅ Dùng tay để minh họa
- ❌ Không khoanh tay
- ❌ Không nhìn xuống đất
- ❌ Không nói quá nhanh

---

## 📝 CÂU HỎI DỰ ĐOÁN VÀ CÁCH TRẢ LỜI:

**Q1: "Tại sao phải học Callback?"**
> "Callback rất quan trọng vì nó là nền tảng để hiểu về lập trình bất đồng bộ trong JavaScript. Khi làm việc với API, xử lý sự kiện, hoặc dùng các thư viện như React, mình sẽ gặp callback rất nhiều!"

**Q2: "ES6+ khác gì JavaScript thông thường?"**
> "ES6+ là phiên bản JavaScript hiện đại hơn, có thêm nhiều tính năng mới giúp code ngắn gọn và dễ đọc hơn. Ví dụ như arrow function, template literals, destructuring... Hầu hết các dự án hiện nay đều dùng ES6+!"

**Q3: "SPA có nhược điểm gì?"**
> "SPA có 2 nhược điểm chính: 1) Tải lần đầu chậm vì phải tải toàn bộ JavaScript, 2) SEO kém vì nội dung được tạo bằng JavaScript. Nhưng có thể khắc phục bằng Server-Side Rendering!"

**Q4: "Khi nào dùng map, khi nào dùng forEach?"**
> "Dùng `map` khi bạn muốn tạo mảng mới từ mảng cũ. Dùng `forEach` khi chỉ muốn duyệt qua và làm gì đó mà không cần mảng mới. Ví dụ: map để nhân đôi các số, forEach để in ra console!"

**Q5: "Đệ quy có khó không?"**
> "Ban đầu hơi khó hiểu, nhưng khi nắm được 2 điều: 1) Phải có điểm dừng, 2) Mỗi lần gọi phải đơn giản hơn lần trước, thì sẽ dễ hơn nhiều. Luyện tập nhiều sẽ quen thôi!"

---

## 🎯 CHECKLIST TRƯỚC KHI TRÌNH BÀY:

- [ ] Đọc kỹ kịch bản
- [ ] Chuẩn bị ví dụ code
- [ ] Kiểm tra thời gian
- [ ] Chuẩn bị trả lời câu hỏi
- [ ] Thư giãn và tự tin
- [ ] Uống nước trước khi bắt đầu
- [ ] Kiểm tra thiết bị (nếu có demo)

**Chúc bạn trình bày thành công! 🎉**
