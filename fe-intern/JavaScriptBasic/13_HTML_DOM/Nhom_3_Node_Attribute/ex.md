Chuẩn bị: Copy đoạn HTML sau dán vào file index.html  (nằm trên thẻ `<script>`):

```HTML
<a id="myLink" href="https://facebook.com">Chuyển đến Facebook</a>
<div id="card" class="card-box" style="margin-top: 20px; padding: 10px; border: 1px solid black;">
    <p>Nội dung thẻ Card</p>
</div>
```
Nhiệm vụ trong file vidu.js:

1,Hãy "tóm" thẻ `<a>` (có id là myLink), sau đó:

2,Đổi dòng chữ "Chuyển đến Facebook" thành "Chuyển đến F8".

3,Dùng setAttribute để đổi link (href) sang https://f8.edu.vn.

4,Hãy "tóm" thẻ `<div>` (có id là card), sau đó:

5,Thay đổi toàn bộ nội dung HTML bên trong thẻ div này thành: `<h2>Tiêu đề mới</h2>` `<p>Đã thay đổi bằng innerHTML</p>.`

6,Dùng style để đổi màu nền của div thành màu lightblue và màu chữ (color) thành red.

7,Dùng classList.add() để thêm một class tên là shadow vào thẻ div này.
# Bài Làm 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a id="myLink" href="https://facebook.com">Chuyển đến Facebook</a>
<div id="card" class="card-box" style="margin-top: 20px; padding: 10px; border: 1px solid black;">
    <p>Nội dung thẻ Card</p>
</div>
    <script src="./test.js"></script>
</body>
</html>
```

```javascript
//Nhiệm vụ 1: Thao tác với thẻ <a> 
const myLink = document.getElementById("myLink");

//1. Đổi dòng chữ hiển thị.
myLink.innerText = "Chuyển đến F8";

//2.Dùng setAttribute để đổi link(href)
myLink.setAttribute("href", "https://f8.edu.vn" );

//Nhiệm vụ 2: Thao tác với thẻ <div>
const cardDiv = document.getElementById("card");

//1. Thay đổi toàn bộ nội dung HTML bên trong 
cardDiv.innerHTML = "<h2> Tiêu đề mới</h2> <p>Đã thay đổi bằng innerHTML</p>";

//2. Dùng style đổi màu nền và màu chữ(quy tắc CamelCase)
cardDiv.style.backgroundColor = "lightblue";
cardDiv.style.color = "red";

//3. Dùng classList.add() để thêm class 'shadow'
cardDiv.classList.add("shadow");

```