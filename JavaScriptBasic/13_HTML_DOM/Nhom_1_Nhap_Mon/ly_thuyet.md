# NHÓM 1: NHẬP MÔN DOM

---

## 13.1 - DOM là gì?

### Lý thuyết

**DOM (Document Object Model)** là mô hình đối tượng tài liệu - cây đối tượng biểu diễn toàn bộ HTML thành bộ nhớ.

Khi trình duyệt đọc file HTML, nó chuyển HTML thành cây DOM. JavaScript dùng cây này để đọc, sửa, thêm, xóa bất kỳ thứ gì trên trang.

**Tại sao cần DOM?**
- Thay đổi nội dung HTML động
- Thay đổi CSS và thuộc tính
- Thêm/xóa phần tử
- Phản ứng với sự kiện người dùng

### Ví dụ

```html
<!DOCTYPE html>
<html>
<body>
  <h1 id="title">Xin chào</h1>
  <button onclick="changeText()">Đổi text</button>

  <script>
    function changeText() {
      document.getElementById("title").innerHTML = "DOM đã thay đổi!";
    }
  </script>
</body>
</html>
```

**Giải thích:**
- `document.getElementById("title")` - Tìm phần tử có id="title"
- `.innerHTML` - Thay đổi nội dung HTML bên trong

---

## 13.2 - Cấu trúc cây DOM

### Lý thuyết

HTML được biểu diễn dưới dạng **cây DOM** với các node:

```
Document
  └── html
      ├── head
      │   └── title
      └── body
          ├── h1
          └── p
```

**Các loại Node:**
1. **Element Node**: Các thẻ HTML (`<div>`, `<p>`, `<h1>`)
2. **Text Node**: Nội dung văn bản bên trong thẻ
3. **Attribute Node**: Các thuộc tính (`id`, `class`, `src`)
4. **Comment Node**: Comment HTML (`<!-- comment -->`)

### Ví dụ

```html
<div id="container">
  <!-- Đây là comment -->
  <p>Xin chào</p>
</div>
```

**Phân tích cây DOM:**
- `<div>` → Element Node
- `id="container"` → Attribute Node  
- `<!-- Đây là comment -->` → Comment Node
- `<p>` → Element Node
- `"Xin chào"` → Text Node

```javascript
// Truy cập các node
const div = document.getElementById("container");
console.log(div.childNodes);      // Tất cả node con (bao gồm text, comment)
console.log(div.children);        // Chỉ element node con
console.log(div.firstChild);      // Node con đầu tiên
console.log(div.firstElementChild); // Element con đầu tiên
```

---

## 13.3 - Document Object và Window Object

### Lý thuyết

#### Document Object
`document` đại diện cho toàn bộ trang HTML.

**Thuộc tính thường dùng:**
```javascript
document.title          // Tiêu đề trang
document.URL            // URL hiện tại
document.body           // Thẻ <body>
document.head           // Thẻ <head>
```

**Phương thức thường dùng:**
```javascript
document.getElementById()
document.querySelector()
document.createElement()
```

#### Window Object
`window` là đối tượng toàn cục, đại diện cho cửa sổ trình duyệt.

**Thuộc tính thường dùng:**
```javascript
window.innerWidth       // Chiều rộng viewport
window.innerHeight      // Chiều cao viewport
window.document         // Document object
```

**Phương thức thường dùng:**
```javascript
window.alert()          // Hiển thị thông báo
window.confirm()        // Hộp thoại xác nhận
window.prompt()         // Hộp thoại nhập liệu
```

#### Sự khác biệt

| Window | Document |
|--------|----------|
| Đối tượng toàn cục | Thuộc tính của Window |
| Đại diện cửa sổ trình duyệt | Đại diện trang HTML |
| `window.alert()` | `document.getElementById()` |

### Ví dụ

```html
<!DOCTYPE html>
<html>
<body>
  <button onclick="showInfo()">Xem thông tin</button>

  <script>
    function showInfo() {
      // Document
      console.log("Title:", document.title);
      console.log("URL:", document.URL);
      
      // Window
      console.log("Width:", window.innerWidth);
      console.log("Height:", window.innerHeight);
      
      // Alert, Confirm, Prompt
      alert("Đây là alert!");
      const ok = confirm("Bạn đồng ý?");
      const name = prompt("Tên bạn là gì?");
    }
  </script>
</body>
</html>
```

---

## 🎯 Tóm tắt

✅ **DOM** là cây đối tượng biểu diễn HTML, cho phép JavaScript thao tác với trang web

✅ **Cây DOM** có nhiều loại node: Element, Text, Attribute, Comment

✅ **Document** đại diện cho trang HTML, dùng để truy xuất và thao tác phần tử

✅ **Window** đại diện cho cửa sổ trình duyệt, là đối tượng toàn cục

✅ Dùng `getElementById()` để lấy phần tử, `innerHTML` để thay đổi nội dung
