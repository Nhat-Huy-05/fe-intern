# Bài tập
```html
<div id="ong-noi">
    <h2>Ông Nội</h2>
    <div id="bo">
        <h2>Bố</h2>
        <p id="anh-trai">Anh trai</p>
        <p id="toi">Tôi (Hãy lấy phần tử này làm mốc!)</p>
        <p id="em-gai">Em gái</p>
    </div>
    <div id="chu">
        <h2>Chú</h2>
    </div>
</div>
```
Nhiệm vụ trong file vidu.js:

1. Chỉ được phép dùng `document.getElementById` duy nhất 1 lần để tóm lấy phần tử có id là toi. Sau đó, từ phần tử mốc này, hãy dùng các lệnh Duyệt cây DOM (không dùng getElement nữa) để hoàn thành các yêu cầu sau:

2. Tìm thẻ `<p>` của Anh trai và đổi chữ thành "JS đổi tên".

3. Tìm thẻ `<p>` của Em gái và đổi màu chữ của em ấy thành màu hồng ("pink").

4. Tìm thẻ `<div>` của Bố, và gắn thêm cho bố một cái class mang tên "dad-class".

# Giải
```javascript
// Chỉ dùng getElement đúng 1 lần để lấy mốc "Tôi"
const toi = document.getElementById("toi");

// 1. Tìm thẻ <p> của Anh trai (phần tử phía trước) và đổi chữ
const anhTrai = toi.previousElementSibling;
anhTrai.innerText = "Anh trai đã bị JS đổi tên";

// 2. Tìm thẻ <p> của Em gái (phần tử phía sau) và đổi màu chữ
const emGai = toi.nextElementSibling;
emGai.style.color = "pink";

// 3. Tìm thẻ <div> của Bố (phần tử cha bọc bên ngoài) và thêm class
const bo = toi.parentElement;
bo.classList.add("dad-class");
```