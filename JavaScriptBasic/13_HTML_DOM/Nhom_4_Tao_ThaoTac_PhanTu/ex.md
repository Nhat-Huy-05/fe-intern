# Bài tập
Chuẩn bị: Mở file index.html, xóa hết bên trong thẻ `<body>` (chỉ chừa lại thẻ `<script src="vidu.js"></script>`) và dán đoạn mã này vào ngay trên thẻ `<script>`:

```html
<div id="container">
    <p id="p-old">Đây là đoạn văn cũ kỹ, chán ngắt.</p>
</div>
```
- Nhiệm vụ trong file vidu.js:

1. Hãy tìm cách tóm lấy thẻ div có id container.

2. Tạo ra một thẻ `<button>` mới toanh.

3. Cài đặt nội dung chữ cho nút đó là "Click here!".

4. Gắn cái nút mới tạo này vào bên trong thẻ container (Nó sẽ nằm dưới đoạn văn).

5. Hãy tìm cách tóm lấy thẻ `<p>` có id p-old. Sau đó, dùng removeChild để xóa nó đi (chỉ để lại cái nút trên màn hình).

# Bài làm
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="container">
    <p id="p-old">Đây là đoạn văn cũ kỹ, chán ngắt.</p>
</div>
    <script src="./test.js"></script>
</body>
</html>
```

```javascript
//1, tóm lấy thẻ div có id "container"
const container = document.getElementById("container");

//2. tạo ra 1 thẻ <button> mới (đang lơ lửng)
const newButton = document.createElement("button");

//3. cài đặt nội dung chữ cho nút.
newButton.innerText = "Click here!";

//4. Gắn nút mới vào bên trong thẻ container (nó sẽ tự động nằm ở cuối)
container.appendChild(newButton);

//5. Tóm thẻ <p> cũ và xoá đi
const pOld = document.getElementById("p-old");
container.removeChild(pOld);
```