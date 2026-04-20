# HTML DOM
- DOM(Document Object Model): mô hình tài liệu được thể hiện dưới dạng đối tượng.
- Khi 1 trang web được tải thì trình duyệt sẽ tạo ra 1 DOM.

--> Khi trình duyệt đọc file HTML, nó không hiển thị thẳng ra - nó chuyển toàn bộ HTML thành 1 cây đối tượng trong bộ nhớ. Cây đó gọi là **DOM**
- Ví dụ file HTML:
```
HTML gốc:
<h1 id="title">Xin chào</h1>
<p>Đây là đoạn văn</p>

Trình duyệt tạo ra cây DOM:
document
  └── <html>
        └── <body>
              ├── <h1> → text: "Xin chào"
              └── <p>  → text: "Đây là đoạn văn"
```
Trình duyệt đọc xong -> tạo ra 1 cây DOM dưới. JS có thể dùng cây này để đọc, sửa, thêm, xoá bất kỳ thứ gì trên trang.

**DOM là bản đồ của trang web, JS dùng bản đồ đó để thao tác**
## Cây DOM trông như thế nào?
- Mỗi thẻ