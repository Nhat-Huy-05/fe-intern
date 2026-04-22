//Chỉ dùng getElement đúng 1 lần để lấy mốc "Tôi"
const toi = document.getElementById("toi")

//1. Tìm thẻ <p> của Anh trai(ptu phía trước) và đổi chữ
const anhTrai = toi.previousElementSibling;
anhTrai.innerText = "JS đổi tên";

//2.Tìm thẻ <p> của em gái(phần tử phía sau) và đổi màu chữ
const emGai = toi.nextElementSibling;
emGai.style.color = "pink";

//3.Tìm thẻ <div> của bố(phần tử cha bọc bên ngoài) và thêm class
const bo = toi.parentElement;
bo.classList.add("dad-class");