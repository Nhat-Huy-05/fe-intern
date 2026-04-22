# GIẢI THÍCH CHI TIẾT TODO LIST APP

## Mục lục
1. [Cấu trúc HTML](#1-cấu-trúc-html)
2. [JavaScript - Phần khởi tạo](#2-javascript---phần-khởi-tạo)
3. [Hàm Render - Hiển thị giao diện](#3-hàm-render---hiển-thị-giao-diện)
4. [Xử lý sự kiện - Thêm task](#4-xử-lý-sự-kiện---thêm-task)
5. [Xử lý sự kiện - Xóa và Toggle](#5-xử-lý-sự-kiện---xóa-và-toggle)
6. [Xử lý bộ lọc](#6-xử-lý-bộ-lọc)

---

## 1. CẤU TRÚC HTML

### Phần Head
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List App - Quản lý công việc</title>
    <link rel="stylesheet" href="style.css">
</head>
```
- `charset="UTF-8"`: Hỗ trợ tiếng Việt và các ký tự đặc biệt
- `viewport`: Giúp responsive trên mobile
- `link rel="stylesheet"`: Liên kết file CSS để tạo giao diện đẹp

### Phần Header
```html
<header class="app-header">
    <h1>Todo List</h1>
    <p>Quản lý và theo dõi công việc hàng ngày của bạn</p>
</header>
```
- Tiêu đề và mô tả của ứng dụng

### Phần Form nhập liệu
```html
<form id="todo-form">
    <input 
        type="text" 
        id="todo-input" 
        placeholder="Nhập công việc mới..." 
        required
    >
    <button type="submit" id="add-btn">Thêm task</button>
</form>
```
- `id="todo-form"`: ID để JavaScript có thể lắng nghe sự kiện submit
- `id="todo-input"`: ID để lấy giá trị người dùng nhập
- `required`: Bắt buộc phải nhập, không được để trống
- `type="submit"`: Khi click nút sẽ kích hoạt sự kiện submit của form

### Phần Filter (Bộ lọc)
```html
<nav class="filter-bar">
    <button class="filter-btn active" data-filter="all">Tất cả</button>
    <button class="filter-btn" data-filter="active">Chưa làm</button>
    <button class="filter-btn" data-filter="completed">Đã xong</button>
</nav>
```
- `data-filter`: Thuộc tính tùy chỉnh để lưu giá trị filter (all/active/completed)
- `class="active"`: Đánh dấu nút đang được chọn

### Phần danh sách task
```html
<ul id="todo-list">
    <!-- Các task sẽ được JavaScript tạo động ở đây -->
</ul>
```
- `id="todo-list"`: Nơi chứa tất cả các task
- Nội dung bên trong sẽ được JavaScript tạo ra động

### Phần Footer
```html
<footer class="app-footer">
    <span id="items-left">Còn 3 việc cần làm</span>
</footer>
```
- `id="items-left"`: JavaScript sẽ cập nhật số lượng việc còn lại

---

## 2. JAVASCRIPT - PHẦN KHỞI TẠO

### Khởi tạo dữ liệu (State)
```javascript
let todos = JSON.parse(localStorage.getItem('todos')) || [];
```
**Giải thích từng bước:**
1. `localStorage.getItem('todos')`: Lấy dữ liệu đã lưu từ localStorage (dữ liệu vẫn còn khi tắt trình duyệt)
2. `JSON.parse()`: Chuyển chuỗi JSON thành mảng JavaScript
3. `|| []`: Nếu chưa có dữ liệu (null), tạo mảng rỗng

**Ví dụ:** Nếu localStorage có: `'[{"content":"Học JS","isCompleted":false}]'`
→ Sau khi parse: `[{content: "Học JS", isCompleted: false}]`

```javascript
let currentFilter = 'all';
```
- Biến lưu trạng thái bộ lọc hiện tại (all/active/completed)

### Truy vấn các phần tử DOM
```javascript
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const filterBtns = document.querySelectorAll('.filter-btn');
```
**Giải thích:**
- `getElementById()`: Lấy 1 phần tử theo ID
- `querySelectorAll()`: Lấy TẤT CẢ phần tử có class 'filter-btn' (trả về NodeList)

---

## 3. HÀM RENDER - HIỂN THỊ GIAO DIỆN

### Bước 1: Lọc danh sách
```javascript
const filteredTodos = todos.filter(todo => {
    if (currentFilter === 'active') return !todo.isCompleted;
    if (currentFilter === 'completed') return todo.isCompleted;
    return true;
});
```
**Giải thích:**
- `filter()`: Tạo mảng mới chỉ chứa các phần tử thỏa điều kiện
- Nếu filter = 'active': Chỉ lấy task chưa hoàn thành (`!todo.isCompleted`)
- Nếu filter = 'completed': Chỉ lấy task đã hoàn thành
- Nếu filter = 'all': Lấy tất cả (`return true`)

**Ví dụ:**
```javascript
todos = [
    {content: "Học JS", isCompleted: false},
    {content: "Đi chợ", isCompleted: true}
]

// Khi currentFilter = 'active'
filteredTodos = [{content: "Học JS", isCompleted: false}]
```

### Bước 2: Xóa danh sách cũ
```javascript
todoList.innerHTML = '';
```
- Xóa toàn bộ nội dung HTML bên trong `<ul id="todo-list">`
- Chuẩn bị vẽ lại từ đầu

### Bước 3: Vẽ từng task
```javascript
filteredTodos.forEach((todo) => {
    const realIndex = todos.indexOf(todo);
```
**Giải thích:**
- `forEach()`: Lặp qua từng phần tử trong mảng
- `todos.indexOf(todo)`: Tìm vị trí thực của todo trong mảng gốc
  - Quan trọng vì khi lọc, index thay đổi!

**Ví dụ:**
```javascript
todos = [A, B, C, D]
filteredTodos = [B, D]  // Sau khi lọc

// Trong forEach:
// todo = B → realIndex = 1
// todo = D → realIndex = 3
```

### Bước 4: Tạo phần tử <li>
```javascript
const li = document.createElement('li');
li.className = `todo-item ${todo.isCompleted ? 'completed' : ''}`;
```
**Giải thích:**
- `createElement('li')`: Tạo thẻ `<li>` mới
- Template string với điều kiện:
  - Nếu `todo.isCompleted = true` → class = "todo-item completed"
  - Nếu `todo.isCompleted = false` → class = "todo-item"

### Bước 5: Thêm nội dung HTML
```javascript
li.innerHTML = `
    <div class="todo-content">
        <input type="checkbox" ${todo.isCompleted ? 'checked' : ''} 
            onchange="toggleTodo(${realIndex})">
        <span style="${todo.isCompleted ? 'text-decoration: line-through; color: gray;' : ''}">
            ${todo.content}
        </span>
    </div>
    <div class="todo-actions">
        <button onclick="deleteTodo(${realIndex})" class="delete-btn">Xóa</button>
    </div>
`;
```
**Giải thích từng phần:**

1. **Checkbox:**
```javascript
<input type="checkbox" ${todo.isCompleted ? 'checked' : ''} 
    onchange="toggleTodo(${realIndex})">
```
- Nếu task đã hoàn thành → thêm thuộc tính `checked`
- `onchange`: Khi click checkbox → gọi hàm `toggleTodo()`

2. **Span hiển thị nội dung:**
```javascript
<span style="${todo.isCompleted ? 'text-decoration: line-through; color: gray;' : ''}">
    ${todo.content}
</span>
```
- Nếu đã hoàn thành → gạch ngang và màu xám
- `${todo.content}`: Hiển thị nội dung task

3. **Nút xóa:**
```javascript
<button onclick="deleteTodo(${realIndex})" class="delete-btn">Xóa</button>
```
- `onclick`: Khi click → gọi hàm `deleteTodo()` với index

### Bước 6: Thêm vào DOM
```javascript
todoList.appendChild(li);
```
- Thêm phần tử `<li>` vừa tạo vào cuối `<ul id="todo-list">`

### Bước 7: Cập nhật số lượng
```javascript
const itemsLeft = todos.filter(todo => !todo.isCompleted).length;
document.getElementById('items-left').innerText = `Còn ${itemsLeft} việc cần làm`;
```
**Giải thích:**
- Đếm số task chưa hoàn thành
- Cập nhật text trong footer

### Bước 8: Lưu vào localStorage
```javascript
localStorage.setItem('todos', JSON.stringify(todos));
```
- `JSON.stringify()`: Chuyển mảng thành chuỗi JSON
- `setItem()`: Lưu vào localStorage với key = 'todos'

---

## 4. XỬ LÝ SỰ KIỆN - THÊM TASK

```javascript
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (text !== '') {
        todos.push({ content: text, isCompleted: false });
        todoInput.value = '';
        renderTodos();
    }
});
```

**Giải thích từng dòng:**

1. `addEventListener('submit', ...)`: Lắng nghe sự kiện submit form
   - Kích hoạt khi: Click nút "Thêm task" HOẶC nhấn Enter

2. `e.preventDefault()`: Chặn hành vi mặc định
   - Mặc định: Form submit → trang reload
   - Sau khi chặn: Trang không reload

3. `todoInput.value.trim()`: Lấy giá trị và xóa khoảng trắng 2 đầu
   - `"  Học JS  "` → `"Học JS"`

4. `if (text !== '')`: Kiểm tra không rỗng

5. `todos.push({...})`: Thêm object mới vào mảng
   ```javascript
   {
       content: "Học JS",      // Nội dung task
       isCompleted: false      // Mặc định chưa hoàn thành
   }
   ```

6. `todoInput.value = ''`: Xóa nội dung ô input

7. `renderTodos()`: Vẽ lại giao diện

---

## 5. XỬ LÝ SỰ KIỆN - XÓA VÀ TOGGLE

### Hàm xóa task
```javascript
window.deleteTodo = (index) => {
    todos.splice(index, 1);
    renderTodos();
};
```
**Giải thích:**
- `window.deleteTodo`: Gán hàm vào object window để có thể gọi từ HTML
- `splice(index, 1)`: Xóa 1 phần tử tại vị trí `index`
  - Ví dụ: `[A, B, C].splice(1, 1)` → `[A, C]` (xóa B)
- `renderTodos()`: Vẽ lại giao diện

### Hàm toggle (đánh dấu hoàn thành)
```javascript
window.toggleTodo = (index) => {
    todos[index].isCompleted = !todos[index].isCompleted;
    renderTodos();
};
```
**Giải thích:**
- `!todos[index].isCompleted`: Đảo ngược giá trị boolean
  - `true` → `false`
  - `false` → `true`
- Sau đó vẽ lại giao diện

---

## 6. XỬ LÝ BỘ LỌC

```javascript
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Xóa class 'active' khỏi tất cả nút
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Thêm class 'active' vào nút vừa click
        btn.classList.add('active');

        // Lấy giá trị filter từ thuộc tính data-filter
        currentFilter = btn.getAttribute('data-filter');
        
        // Vẽ lại với filter mới
        renderTodos();
    });
});
```

**Giải thích từng bước:**

1. `filterBtns.forEach()`: Lặp qua 3 nút filter

2. `addEventListener('click')`: Lắng nghe click trên mỗi nút

3. `classList.remove('active')`: Xóa highlight khỏi tất cả nút

4. `classList.add('active')`: Thêm highlight vào nút vừa click

5. `getAttribute('data-filter')`: Lấy giá trị từ thuộc tính HTML
   ```html
   <button data-filter="active">Chưa làm</button>
   ```
   → `getAttribute('data-filter')` trả về `"active"`

6. `renderTodos()`: Vẽ lại với filter mới

---

## 7. KHỞI CHẠY ỨNG DỤNG

```javascript
renderTodos();
```
- Chạy lần đầu khi mở trang
- Hiển thị các task đã lưu (nếu có)

---

## TÓM TẮT LUỒNG HOẠT ĐỘNG

### Khi mở trang lần đầu:
1. Load dữ liệu từ localStorage
2. Truy vấn các phần tử DOM
3. Gọi `renderTodos()` → Hiển thị danh sách

### Khi thêm task mới:
1. User nhập và submit form
2. `e.preventDefault()` → Chặn reload
3. Thêm object mới vào mảng `todos`
4. Gọi `renderTodos()` → Cập nhật UI
5. Lưu vào localStorage

### Khi xóa task:
1. User click nút "Xóa"
2. Gọi `deleteTodo(index)`
3. Xóa phần tử khỏi mảng
4. Gọi `renderTodos()` → Cập nhật UI

### Khi toggle task:
1. User click checkbox
2. Gọi `toggleTodo(index)`
3. Đảo ngược `isCompleted`
4. Gọi `renderTodos()` → Cập nhật UI

### Khi lọc task:
1. User click nút filter
2. Cập nhật `currentFilter`
3. Gọi `renderTodos()` → Hiển thị task theo filter

---

## KIẾN THỨC HTML DOM ĐÃ SỬ DỤNG

### 1. Truy vấn phần tử
- `getElementById()`: Lấy 1 phần tử
- `querySelectorAll()`: Lấy nhiều phần tử

### 2. Tạo và thao tác phần tử
- `createElement()`: Tạo phần tử mới
- `appendChild()`: Thêm phần tử con
- `innerHTML`: Thay đổi nội dung HTML
- `innerText`: Thay đổi text

### 3. Thuộc tính và class
- `className`: Đặt class
- `classList.add()`: Thêm class
- `classList.remove()`: Xóa class
- `getAttribute()`: Lấy giá trị thuộc tính

### 4. Events
- `addEventListener()`: Lắng nghe sự kiện
- `submit`: Sự kiện submit form
- `click`: Sự kiện click
- `onchange`: Sự kiện thay đổi (checkbox)
- `onclick`: Gắn trực tiếp vào HTML

### 5. Form
- `e.preventDefault()`: Chặn hành vi mặc định
- `value`: Lấy/đặt giá trị input
- `trim()`: Xóa khoảng trắng

### 6. LocalStorage
- `localStorage.getItem()`: Lấy dữ liệu
- `localStorage.setItem()`: Lưu dữ liệu
- `JSON.parse()`: Chuyển string → object
- `JSON.stringify()`: Chuyển object → string

---

## KẾT LUẬN

Project này áp dụng đầy đủ kiến thức HTML DOM cơ bản:
- Truy vấn và thao tác DOM
- Xử lý Events
- Tạo phần tử động
- Quản lý state (dữ liệu)
- Lưu trữ dữ liệu với localStorage

Đây là nền tảng để xây dựng các ứng dụng web phức tạp hơn!
