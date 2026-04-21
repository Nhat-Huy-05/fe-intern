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



