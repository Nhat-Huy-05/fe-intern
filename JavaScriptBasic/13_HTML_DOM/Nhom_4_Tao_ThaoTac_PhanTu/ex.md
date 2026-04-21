# Bài tập
Chuẩn bị: Mở file index.html, xóa hết bên trong thẻ `<body>` (chỉ chừa lại thẻ `<script src="vidu.js"></script>`) và dán đoạn mã này vào ngay trên thẻ <script>:

```HTML
<div id="container">
    <p id="p-old">Đây là đoạn văn cũ kỹ, chán ngắt.</p>
</div>
```
- Nhiệm vụ trong file vidu.js:

1. Hãy tìm cách tóm lấy thẻ div có id container.

2. Tạo ra một thẻ <button> mới toanh.

3. Cài đặt nội dung chữ cho nút đó là "Click tôi đi!".

4. Gắn cái nút mới tạo này vào bên trong thẻ container (Nó sẽ nằm dưới đoạn văn).

5. Hãy tìm cách tóm lấy thẻ <p> có id p-old. Sau đó, dùng removeChild để xóa nó đi (chỉ để lại cái nút trên màn hình).