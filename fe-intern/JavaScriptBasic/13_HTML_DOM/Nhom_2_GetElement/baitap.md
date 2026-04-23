Chuẩn bị: Hãy copy đoạn HTML dưới đây và dán đè vào phần `<body>` trong file index.html của bạn:

`HTML`:
```
<h1>id="title">Học Get Element</h1>
<p class="text">Đoạn văn bản số 1</p>
<p class="text">Đoạn văn bản số 2</p>
<div class="box">
    <p>Đoạn văn bản nằm trong box</p>
</div>
```
Nhiệm vụ trong file vidu.js:

1,Dùng getElementById để đổi chữ "Học Get Element" thành "Tôi đã tóm được ID!".

2,Dùng getElementsByClassName tìm class text, sau đó đổi chữ "Đoạn văn bản số 1" thành "Đã thay đổi dòng 1". (Gợi ý: Dùng [0]).

3,Dùng querySelector để tóm thẻ `<p> nằm bên trong thẻ <div>` có class box, và đổi nội dung thành "Tóm gọn thẻ p trong box!". (Gợi ý: Cú pháp CSS là .box p).

# Lời giải:
```javascript
// NHIỆM VỤ 1: Dùng getElementById
const titleElement = document.getElementById("title");
titleElement.innerHTML = "Tôi đã tóm được ID!";

// NHIỆM VỤ 2: Dùng getElementsByClassName
// Lưu ý: getElementsByClassName trả về một danh sách, nên ta phải dùng [0] để lấy phần tử đầu tiên
const textElements = document.getElementsByClassName("text");
textElements[0].innerHTML = "Đã thay đổi dòng 1";

// NHIỆM VỤ 3: Dùng querySelector
// Cú pháp CSS ".box p" có nghĩa là: Tìm thẻ <p> nằm bên trong phần tử có class là "box"
const pInBox = document.querySelector(".box p");
pInBox.innerHTML = "Tóm gọn thẻ p trong box!";
```