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

    // 3.3 - Tạo nút "Sửa"
    const editBtn = document.createElement("button");
    editBtn.innerText = "Sửa";
    editBtn.className = "edit-btn";
    
    editBtn.addEventListener("click", function() {
        const newText = prompt("Sửa công việc:", span.innerText);
        if (newText && newText.trim() !== "") {
            span.innerText = newText.trim();
        }
    });

    // 3.4 - Tạo nút "Xong"
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "Xong";
    completeBtn.className = "complete-btn";
    
    // Gắn sự kiện cho nút "Xong" ngay khi vừa tạo ra
    completeBtn.addEventListener("click", function() {
        // Dùng classList.toggle để bật/tắt class "completed" (Nhóm 3)
        // Khi có class này, CSS sẽ tự gạch ngang chữ
        li.classList.toggle("completed"); 
    });

    // 3.5 - Tạo nút "Xóa"
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Xóa";
    deleteBtn.className = "delete-btn";
    
    // Gắn sự kiện cho nút "Xóa"
    deleteBtn.addEventListener("click", function() {
        // Dùng removeChild để xóa thẻ li khỏi thẻ ul (Nhóm 4 & 5)
        taskList.removeChild(li);
    });

    // ==========================================
    // 4. LẮP RÁP LẠI VỚI NHAU VÀ GẮN LÊN GIAO DIỆN
    // ==========================================
    
    // Nhét chữ, nút Sửa, nút Xong, nút Xóa vào bên trong thẻ <li>
    li.appendChild(span);
    li.appendChild(editBtn);
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

// ==========================================
// 6. BỘ LỌC TASK (Nhóm 6)
// ==========================================
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        // Bỏ class "active" khỏi tất cả nút
        filterBtns.forEach(b => b.classList.remove("active"));
        // Thêm class "active" vào nút được click
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");
        const allTasks = taskList.querySelectorAll("li");

        allTasks.forEach(task => {
            if (filter === "all") {
                task.style.display = "flex"; // Hiện tất cả
            } else if (filter === "completed") {
                // Chỉ hiện task có class "completed"
                task.style.display = task.classList.contains("completed") ? "flex" : "none";
            } else if (filter === "pending") {
                // Chỉ hiện task KHÔNG có class "completed"
                task.style.display = !task.classList.contains("completed") ? "flex" : "none";
            }
        });
    });
});