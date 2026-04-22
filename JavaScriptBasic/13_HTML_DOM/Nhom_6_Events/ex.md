# Bài tập

```html
<div id="box" style="width: 200px; height: 200px; background-color: lightgray; text-align: center; line-height: 200px; cursor: pointer;">
    Rê chuột vào đây
</div>
<br>
<input type="text" id="nameInput" placeholder="Nhập tên của bạn">
<h3 id="greeting">Xin chào, ...</h3>
```
- Nhiệm vụ trong file vidu.js:

1. Sự kiện Chuột: Tóm lấy thẻ div (id box).

Lắng nghe sự kiện mouseenter: Khi chuột đi vào, đổi chữ thành "Chuột đang ở trong" và đổi màu nền thành "yellow".

Lắng nghe sự kiện mouseleave: Khi chuột đi ra ngoài, đổi chữ lại thành "Rê chuột vào đây" và đổi màu nền về "lightgray".

2. Sự kiện Phím: Tóm ô input (id nameInput) và thẻ h3 (id greeting).

Lắng nghe sự kiện input trên ô nhập liệu.

Mỗi khi bạn gõ chữ, hãy dùng đối tượng sự kiện (e.target.value) để lấy chữ vừa gõ, và hiển thị nó lên thẻ h3 theo dạng "Xin chào, [tên_vừa_gõ]!". (Nếu ô input rỗng thì in ra "Xin chào, ...").

# Giải
```javascript
//1, Sự kiện chuột
const box = document.getElementById("box")

//Lắng nghe khi chuột đi vào
box.addEventListener("mouseenter",function(){
    box.innerText = "Chuột đang ở trong";
    box.style.backgroundColor = "yellow";
}) //chuột vào sẽ đổi màu

//Lắng nghe khi chuột đi ra
box.addEventListener("mouseleave",function(){
    box.innerText = "Rê chuột vào đây";
    box.style.backgroundColor = "lightgray";
})

//2, Sự kiện bàn phím
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

//Lắng nghe khi người dùng gõ phím
nameInput.addEventListener("input",function(e){
    const tenVuaGhi = e.target.value;  //lấy gtri vừa ghi

    //Kiểm tra nếu ô input trống
    if(tenVuaGhi === ""){
        greeting.innerText = "Xin chào, ..."
    }
    else {
        //Nối chuỗi để in ra lời chào
        greeting.innerText = "Xin chào, " + tenVuaGhi + "!"; 
    }
}) //khi user ghi tên thì sẽ tự động in ra tên.
```
