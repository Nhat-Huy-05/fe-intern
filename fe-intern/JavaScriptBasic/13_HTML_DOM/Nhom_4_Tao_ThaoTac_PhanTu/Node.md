# Các phương thức giúp thay đổi cấu trúc của cây DOM:
- `document.createElement("tên_thẻ")`: Dùng để tạo ra một thẻ HTML hoàn toàn mới (ví dụ: div, p, li, a).

- `appendChild(phần_tử_mới)`: Gắn (thêm) phần tử mới vào vị trí cuối cùng bên trong một phần tử cha.

- `insertBefore(phần_tử_mới, phần_tử_đang_có)`: Chèn phần tử mới vào ngay trước một phần tử con đã tồn tại trong phần tử cha.

   (Ngoài ra còn có `prepend` thêm vào ngay đầu phần tử cha)

   `Phần_tử_cha.prepend(phần_tử_con_mới)`; // Thêm vào ngay đầu phần tử cha

- `removeChild(phần_tử_con)`: Xóa bỏ một phần tử con ra khỏi phần tử cha.

- `replaceChild(phần_tử_mới, phần_tử_cũ)`: Thay thế một phần tử cũ bằng một phần tử hoàn toàn mới.

**Các lưu ý**:
- Nguyên lý "Lơ lửng": Khi gọi `document.createElement()`, phần tử đó mới chỉ được sinh ra và nằm trong bộ nhớ tạm của trình duyệt, nó chưa hề xuất hiện trên giao diện trang web. Bắt buộc phải dùng `appendChild` hoặc `insertBefore` để "gắn" nó vào cây DOM thì người dùng mới nhìn thấy được.

- Quan hệ Cha - Con: Các lệnh thêm, sửa, xóa cấu trúc này thường đòi hỏi bạn phải xác định được phần tử cha (Parent Node). Ví dụ muốn xóa thẻ `<li>`, bạn phải gọi thẻ cha là `<ul>` và ra lệnh: `ul.removeChild(li)`.

- `appendChild` sẽ luôn đẩy phần tử mới xuống dưới cùng. Nếu muốn nó nằm ở trên cùng, hãy dùng `insertBefore`.