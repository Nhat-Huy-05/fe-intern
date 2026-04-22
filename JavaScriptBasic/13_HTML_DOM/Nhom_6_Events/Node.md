# Events
1. Lý thuyết
- Sự kiện (Event) là những hành động xảy ra trên trang web, ví dụ như người dùng click chuột, gõ phím, cuộn chuột, hay khi trang web vừa tải xong. JavaScript cho phép bạn "lắng nghe" những sự kiện này và chạy một đoạn code tương ứng.

1. `addEventListener()`: Lệnh dùng để gắn một "đôi tai" vào phần tử, giúp nó lắng nghe xem người dùng có thao tác gì không.

2. `Event Object` (e hoặc event): Khi một sự kiện xảy ra, trình duyệt tự động tạo ra một đối tượng chứa mọi thông tin về sự kiện đó (Ví dụ: chuột đang ở tọa độ nào, phím nào vừa được bấm, phần tử nào bị click). Thuộc tính hay dùng nhất là e.target (chỉ đích danh phần tử vừa phát sinh sự kiện).

3. `Mouse Events`: `click` (nhấn chuột), `dblclick` (nhấn đúp), `mouseenter` (chuột đi vào), `mouseleave` (chuột đi ra).

4. `Keyboard Events`: `keydown` (nhấn phím xuống), `keyup` (nhả phím ra).

5. `Form Events`: `submit` (gửi form), `input` (khi gõ chữ vào ô input), `change` (khi thay đổi giá trị), `focus` (click vào ô input), `blur` (click ra ngoài ô input).

6. `preventDefault()`: Một lệnh cực kỳ quan trọng dùng để chặn hành vi mặc định của trình duyệt (Ví dụ: chặn thẻ `<a>` không cho chuyển trang, chặn `<form>` không cho reload lại trang khi nhấn Submit).

## Các lưu ý:
- Đừng dùng Event kiểu cũ (Inline HTML): Việc viết `<button onclick="myFunc()">` trực tiếp trong file HTML là cách làm cũ và khó quản lý. Hãy luôn dùng `addEventListener` trong file JS để tách biệt HTML và JS.

- Bạn có thể gắn nhiều `addEventListener` cho cùng một sự kiện trên một phần tử mà không sợ chúng ghi đè lên nhau.

- Hàm truyền vào `addEventListener` thường là một Anonymous Function (hàm ẩn danh) hoặc Arrow Function.