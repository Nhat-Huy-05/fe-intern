# Duyệt cây DOM (DOM Traversal)
- Thay vì lúc nào cũng phải dùng `getElementById` hay `querySelector` để tìm từ đầu, Duyệt cây DOM cho phép "đứng" ở một phần tử và đi tìm "người nhà" của nó (cha, con, anh em)
- Cây DOM giống như cây gia phả. Mọi ptu đều có mối quan hệ họ hàng với nhau:
1. Tìm cha(Parent):
- `parentElement`: Lấy thẻ HTML trực tiếp bao bọc phần tử hiện tại(thẻ cha).
- `parentNode`: Tương tự `parentElement`(nhưng có thể trả về các loại Node khác ngoài thẻ HTML)
2. Tìm con (Children):
- `children`: Trả về 1 danh sách chỉ chứa các thẻ HTML con. (bỏ qua các khoảng trắng, dấu xuống dòng).
- `childNodes`: Trả về tất cả mọi thứ bên trong (bao gồm khoảng trắng/dấu xuống dòng được tính là Text Node)
- `firstElementChild` / `lastElementChild`: Lấy thẻ HTML con đầu tiên / cuối cùng.
3. Tìm Anh Em (Siblings): (Những thẻ nằm cùng cấp, ngang hàng với nhau)

- `nextElementSibling`: Tìm người em liền kề (thẻ HTML nằm ngay phía sau nó).

- `previousElementSibling`: Tìm người anh liền kề (thẻ HTML nằm ngay phía trước nó).
