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

