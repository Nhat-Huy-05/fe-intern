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
bai1();