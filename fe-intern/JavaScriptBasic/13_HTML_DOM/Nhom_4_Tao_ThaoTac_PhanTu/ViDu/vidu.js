//Tóm phần tử cha(thẻ ul)
const todoList = document.getElementById("todo-list");

//1. Tạo & Thêm phần tử mới(vào cuối danh sách)
const newTask = document.createElement("li"); //tạo thẻ <li> mới (đang lơ lửng)
newTask.innerText = "Sleep";
todoList.appendChild(newTask); //gắn vào cuối thẻ <ul>

//2. Chèn phần tử lên trước (vào đầu danh sách)
const firstTask = document.createElement("li");
firstTask.innerText = "Wake up";
todoList.insertBefore(firstTask, todoList.firstChild);

//Tóm lấy phần tử"Làm bài tập JS" đang đứng đầu
const task2 = document.getElementById("task-2");
//chèn firstTask vào trước task2
todoList.insertBefore(firstTask, task2);

//3. Xoá phần tử
const task3 = document.getElementById("task-3");  //tóm lấy ptu "Đọc sách"
todoList.removeChild(task3); //xoá khỏi danh sách.
