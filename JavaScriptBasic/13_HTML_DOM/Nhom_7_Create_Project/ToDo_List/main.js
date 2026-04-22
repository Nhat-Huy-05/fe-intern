// ==========================================
// 1. TÓM CÁC PHẦN TỬ CHÍNH (Nhóm 2)
// ==========================================
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// ==========================================
// 2. LẮNG NGHE SỰ KIỆN NÚT "THÊM" (Nhóm 6)
// ==========================================
addBtn.addEventListener("click", function() {
    
    // Lấy nội dung chữ người dùng nhập vào
    const taskText = taskInput.value;

    // Kiểm tra: Nếu ô input rỗng thì báo lỗi và dừng lại
    if (taskText === "") {
        alert("Vui lòng nhập công việc!");
        return; 
    }

    // ==========================================
    // 3. TẠO PHẦN TỬ MỚI (Nhóm 4)
    // ==========================================
    
    // 3.1 - Tạo thẻ <li> chứa toàn bộ công việc
    const li = document.createElement("li");

    // 3.2 - Tạo thẻ <span> chứa tên công việc
    const span = document.createElement("span");
    span.innerText = taskText;

    // 3.3 - Tạo nút "Xong"
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "Xong";
    
    // Gắn sự kiện cho nút "Xong" ngay khi vừa tạo ra
    completeBtn.addEventListener("click", function() {
        // Dùng classList.toggle để bật/tắt class "completed" (Nhóm 3)
        // Khi có class này, CSS sẽ tự gạch ngang chữ
        li.classList.toggle("completed"); 
    });

    // 3.4 - Tạo nút "Xóa"
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Xóa";
    
    // Gắn sự kiện cho nút "Xóa"
    deleteBtn.addEventListener("click", function() {
        // Dùng removeChild để xóa thẻ li khỏi thẻ ul (Nhóm 4 & 5)
        taskList.removeChild(li);
    });

    // ==========================================
    // 4. LẮP RÁP LẠI VỚI NHAU VÀ GẮN LÊN GIAO DIỆN
    // ==========================================
    
    // Nhét chữ, nút Xong, nút Xóa vào bên trong thẻ <li>
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Nhét thẻ <li> vào danh sách <ul> hiển thị ra màn hình
    taskList.appendChild(li);

    // ==========================================
    // 5. DỌN DẸP
    // ==========================================
    // Xóa trắng ô input để người dùng nhập việc tiếp theo
    taskInput.value = "";
});