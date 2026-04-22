//Đứng ở sản phẩm(item-2), lưu ý có dấu chấm trước.
const sanPham = document.querySelector(".item-2")

//1. Tìm cha
const chaNode = sanPham.parentElement;
console.log(chaNode);

//2. Tìm anh(phía trước) và em (phía sau)
const anhNode = sanPham.previousElementSibling;
console.log(anhNode.innerText); //in ra "trang chủ"

const emNode = sanPham.nextElementSibling;
console.log(emNode.innerText); //in ra "liên hệ"

//3.Đứng ở cha(ul) đi tìm con
const menu = document.getElementById("menu");
console.log(menu.children);
console.log(menu.firstElementChild.innerText); //..........đầu
console.log(menu.lastElementChild.innerText); //phần tử con cuối