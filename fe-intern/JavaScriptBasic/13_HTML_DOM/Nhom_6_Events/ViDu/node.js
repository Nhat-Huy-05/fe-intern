const btn = document.getElementById("btn");
const myInput = document.getElementById("myInput");
const linkGG = document.getElementById("link-google");

//1. Lắng nghe sự kiện click
btn.addEventListener("click", function(){
    alert("Vừa click nút!");
    btn.style.backgroundColor = "blue";
    //khi người dùng click nút, hiển thị tb, đổi màu nền nút thành xanh biển.
})

//2. Lắng nghe sự kiện gõ phím(input) và lấy giá trị(e.target.value)
myInput.addEventListener("input", function(e){
    console.log("Bạn đang gõ:" + e.target.value);
})

//3. Ngăn chặn hành vi mặc định (preventDefault)
linkGG.addEventListener("click", function(e){
    e.preventDefault()//Chặn việc chuyển hướng sang Google
    alert("Đã chặn chuyển trang !"); 
}); //chặn việc chuyển hướng sang gg