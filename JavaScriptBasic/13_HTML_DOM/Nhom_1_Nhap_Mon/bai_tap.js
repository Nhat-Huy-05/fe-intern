// ============================================
// BÀI TẬP 1: Thay đổi nội dung
// ============================================
function bai1() {
    // Bước 1: Lấy phần tử có id="demo"
    const element = document.getElementById("demo");
    
    // Bước 2: Thay đổi nội dung HTML bên trong
    element.innerHTML = "Goodbye";
    
    /* GIẢI THÍCH:
     * - document.getElementById("demo"): Tìm phần tử có id="demo"
     * - innerHTML: Thuộc tính để đọc/ghi nội dung HTML bên trong thẻ
     * - Gán giá trị mới "Goodbye" sẽ thay thế nội dung cũ "Hello"
     */
}

// ============================================
// BÀI TẬP 2: Thay đổi màu chữ
// ============================================
function bai2() {
    // Bước 1: Lấy phần tử có id="title"
    const element = document.getElementById("title");
    
    // Bước 2: Thay đổi style CSS
    element.style.color = "red";
    
    /* GIẢI THÍCH:
     * - element.style: Truy cập thuộc tính CSS của phần tử
     * - .color: Thuộc tính màu chữ (tương đương CSS: color)
     * - Có thể dùng: "red", "#ff0000", "rgb(255,0,0)"
     * - Các thuộc tính CSS khác: fontSize, backgroundColor, padding...
     */
}

// ============================================
// BÀI TẬP 3: Xem cấu trúc cây DOM
// ============================================
function bai3() {
    // Bước 1: Lấy phần tử container
    const container = document.getElementById("container");
    
    // Bước 2: Log ra các loại node con
    console.log("=== CẤU TRÚC CÂY DOM ===");
    console.log("childNodes (tất cả node):", container.childNodes);
    console.log("children (chỉ element):", container.children);
    console.log("firstChild:", container.firstChild);
    console.log("firstElementChild:", container.firstElementChild);
    
    alert("Đã log ra Console! Nhấn F12 để xem");
    
    /* GIẢI THÍCH:
     * - childNodes: Trả về TẤT CẢ các node con (bao gồm text node, comment node)
     * - children: Chỉ trả về các ELEMENT node con (bỏ qua text, comment)
     * - firstChild: Node con đầu tiên (có thể là text node - khoảng trắng)
     * - firstElementChild: Element con đầu tiên (bỏ qua text node)
     * 
     * VÍ DỤ:
     * <div>
     *   [text node: xuống dòng]
     *   <ul>...</ul>
     * </div>
     * 
     * - childNodes.length = 3 (text, ul, text)
     * - children.length = 1 (chỉ ul)
     */
}

// ============================================
// BÀI TẬP 4: Hiển thị thông tin Document & Window
// ============================================
function bai4() {
    // Bước 1: Lấy phần tử để hiển thị kết quả
    const result = document.getElementById("result");
    
    // Bước 2: Lấy thông tin từ document và window
    const title = document.title;           // Tiêu đề trang
    const url = document.URL;               // URL hiện tại
    const width = window.innerWidth;        // Chiều rộng viewport
    const height = window.innerHeight;      // Chiều cao viewport
    
    // Bước 3: Tạo HTML để hiển thị
    const html = `
        <strong>Document Object:</strong><br>
        - Title: ${title}<br>
        - URL: ${url}<br><br>
        <strong>Window Object:</strong><br>
        - Width: ${width}px<br>
        - Height: ${height}px
    `;
    
    // Bước 4: Hiển thị kết quả
    result.innerHTML = html;
    
    /* GIẢI THÍCH:
     * DOCUMENT OBJECT:
     * - document.title: Lấy/đặt tiêu đề trang (thẻ <title>)
     * - document.URL: Lấy URL hiện tại (chỉ đọc)
     * - document.body: Truy cập thẻ <body>
     * - document.head: Truy cập thẻ <head>
     * 
     * WINDOW OBJECT:
     * - window.innerWidth: Chiều rộng vùng hiển thị (không bao gồm thanh cuộn)
     * - window.innerHeight: Chiều cao vùng hiển thị
     * - window.outerWidth: Chiều rộng toàn bộ cửa sổ
     * - window.outerHeight: Chiều cao toàn bộ cửa sổ
     * 
     * SỰ KHÁC BIỆT:
     * - document: Đại diện cho TRANG HTML
     * - window: Đại diện cho CỬA SỔ TRÌNH DUYỆT
     * - window.document === document (true)
     */
}

// ============================================
// BÀI TẬP 5: Prompt và Alert
// ============================================
function bai5() {
    // Bước 1: Hỏi tên người dùng
    const name = prompt("Tên bạn là gì?");
    
    // Bước 2: Kiểm tra người dùng có nhập không
    if (name !== null && name.trim() !== "") {
        // Nếu có nhập: Hiển thị lời chào
        alert(`Xin chào ${name}! Chào mừng bạn đến với DOM.`);
    } else {
        // Nếu không nhập hoặc bỏ qua: Thông báo
        alert("Bạn chưa nhập tên!");
    }
    
    /* GIẢI THÍCH:
     * PROMPT:
     * - prompt("câu hỏi"): Hiển thị hộp thoại nhập liệu
     * - Trả về: chuỗi người dùng nhập HOẶC null nếu nhấn Cancel
     * - Ví dụ: const age = prompt("Tuổi của bạn?", "18");
     * 
     * ALERT:
     * - alert("thông báo"): Hiển thị hộp thoại thông báo
     * - Chỉ có nút OK
     * - Không trả về giá trị
     * 
     * CONFIRM:
     * - confirm("câu hỏi"): Hiển thị hộp thoại xác nhận
     * - Có nút OK và Cancel
     * - Trả về: true (OK) hoặc false (Cancel)
     * - Ví dụ: const ok = confirm("Bạn chắc chắn?");
     * 
     * LƯU Ý:
     * - name.trim(): Loại bỏ khoảng trắng đầu/cuối
     * - name !== null: Kiểm tra người dùng không nhấn Cancel
     * - name.trim() !== "": Kiểm tra không phải chuỗi rỗng
     */
}
