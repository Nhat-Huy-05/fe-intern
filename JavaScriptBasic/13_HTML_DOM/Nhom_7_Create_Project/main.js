// 1. KHỞI TẠO DỮ LIỆU (STATE)
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

// 2. TRUY VẤN CÁC PHẦN TỬ DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const filterBtns = document.querySelectorAll('.filter-btn');

// 3. HÀM RENDER (HIỂN THỊ GIAO DIỆN)
function renderTodos() {
    // Lọc danh sách dựa trên bộ lọc hiện tại
    const filteredTodos = todos.filter(todo => {
        if (currentFilter === 'active') return !todo.isCompleted;
        if (currentFilter === 'completed') return todo.isCompleted;
        return true;
    });

    // Xóa danh sách cũ và vẽ lại
    todoList.innerHTML = '';

    filteredTodos.forEach((todo) => {
        // Tìm index thực trong mảng todos gốc
        const realIndex = todos.indexOf(todo);
        
        const li = document.createElement('li');
        li.className = `todo-item ${todo.isCompleted ? 'completed' : ''}`;
        li.innerHTML = `
            <div class="todo-content">
                <input type="checkbox" ${todo.isCompleted ? 'checked' : ''} 
                    onchange="toggleTodo(${realIndex})">
                <span style="${todo.isCompleted ? 'text-decoration: line-through; color: gray;' : ''}">
                    ${todo.content}
                </span>
            </div>
            <div class="todo-actions">
                <button onclick="deleteTodo(${realIndex})" class="delete-btn">Xóa</button>
            </div>
        `;
        todoList.appendChild(li);
    });

    // Tính số lượng việc chưa hoàn thành
    const itemsLeft = todos.filter(todo => !todo.isCompleted).length;
    
    // Cập nhật lên giao diện
    document.getElementById('items-left').innerText = `Còn ${itemsLeft} việc cần làm`;

    // Lưu vào localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
}

// 4. CÁC HÀM XỬ LÝ LOGIC (ACTIONS)
// Thêm task mới
todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Chặn load lại trang
    const text = todoInput.value.trim();
    if (text !== '') {
        todos.push({ content: text, isCompleted: false });
        todoInput.value = '';
        renderTodos();
    }
});

// Xóa task
window.deleteTodo = (index) => {
    todos.splice(index, 1);
    renderTodos();
};

// Đánh dấu hoàn thành
window.toggleTodo = (index) => {
    todos[index].isCompleted = !todos[index].isCompleted;
    renderTodos();
};

// Xử lý bộ lọc
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Cập nhật class active cho nút
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Cập nhật filter và render lại
        currentFilter = btn.getAttribute('data-filter');
        renderTodos();
    });
});

// Chạy lần đầu tiên khi mở trang
renderTodos();