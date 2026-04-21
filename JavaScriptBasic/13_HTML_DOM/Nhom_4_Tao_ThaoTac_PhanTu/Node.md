# Các phương thức giúp thay đổi cấu trúc của cây DOM:
- `document.createElement("tên_thẻ")`: Dùng để tạo ra một thẻ HTML hoàn toàn mới (ví dụ: div, p, li, a).

- `appendChild(phần_tử_mới)`: Gắn (thêm) phần tử mới vào vị trí cuối cùng bên trong một phần tử cha.

- `insertBefore(phần_tử_mới, phần_tử_đang_có)`: Chèn phần tử mới vào ngay trước một phần tử con đã tồn tại trong phần tử cha.

- `removeChild(phần_tử_con)`: Xóa bỏ một phần tử con ra khỏi phần tử cha.

- `replaceChild(phần_tử_mới, phần_tử_cũ)`: Thay thế một phần tử cũ bằng một phần tử hoàn toàn mới.