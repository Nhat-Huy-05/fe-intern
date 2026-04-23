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