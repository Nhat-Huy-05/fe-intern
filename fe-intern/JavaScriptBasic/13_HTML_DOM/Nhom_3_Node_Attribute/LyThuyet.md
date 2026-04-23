# Node & Attribute
- Tập trung vào việc thay đổi nội dung, màu sắc, kiểu dáng và các thuộc tính của thẻ HTML sau khi bạn đã lấy được nó bằng JS. 
1. `innerHTML` và `outerHTML`:
- `innerHTML`: Lấy hoặc thay đổi toàn bộ nội dung HTML bên trong 1 thẻ.
- `outerHTML`: Lấy hoặc thay đổi toàn bộ HTML bao gồm cả chính thẻ đó và nội dung bên trong.
2. `innerText` và `textContent`:
- Dùng để lấy hoặc thay đổi văn bản bên trong thẻ(không chứa các thẻ HTML).
- `innerText`: Chỉ lấy những chữ hiển thị trên màn hình(bỏ qua những chữ bị ẩn bởi CSS như display: none).Nó cũng tự động `bỏ các khoảng trắng thừa`.
- `textContent`: Lấy văn bản có trong thẻ(kể cả chữ bị ẩn, kể cả khoảng trắng và dấu xuống dòng trong code).
3. Thuộc tính `attribute`
- Các thẻ HTML có rất nhiều thuộc tính như `href`(của thẻ `<a>`),`src` (của thẻ `<img>`),`title`,`placeholder`,..
- `getAttribute("tên_Thuộc_tính")`:Lấy giá trị của thuộc tính.
- `removeAttribute("tên:)`: Xoá thuộc tính đó đi.
4. Thuộc tính `style`:
- Cho phép dùng JS để thay đổi CSS(Inline CSS) của phần tử.
5. `classList`
- Giúp quản lý class CSS của 1 phần tử mà không làm mất đi các class cũ. Gồm các phương thức:
    - `add()`: thêm.
    - `remove()`: xoá.
    - `toggle()`: bật/tắt.
    - `contains()`: kiểm tra xem có chứa class hay không.
**Các lưu ý**:
- Bảo mật với innerHTML: Khi dùng innerHTML, nếu bạn gán một chuỗi do người dùng nhập vào mà không kiểm tra, trang web rất dễ bị hack (lỗi XSS). Vì vậy, nếu chỉ cần đổi chữ, hãy luôn dùng innerText hoặc textContent.

- Quy tắc viết style trong JS: Trong CSS bạn viết là background-color, font-size. Nhưng trong JS, dấu gạch ngang bị tính là dấu trừ, nên bạn phải đổi sang quy tắc CamelCase: backgroundColor, fontSize.

- Tại sao nên dùng classList? Nếu bạn dùng element.className = "new-class", nó sẽ xóa sạch các class cũ. Dùng element.classList.add("new-class") thì class cũ vẫn được giữ nguyên.