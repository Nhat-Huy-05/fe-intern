# JSX Render Arrays - JSX FA
- Làm việc với danh sách
- Render mảng (Array) trong JSX : nếu ta truyền 1 mảng chứa các ptu JSX vào trong dấu ngoặc nhọn `{}`, React sẽ tự động lấy từng phần tử trong mảng đó và hiển thị chúng liền kề nhau.
- Hàm `map():`
Thông thường, chúng ta có một mảng dữ liệu (mảng chuỗi, mảng object). Để biến mảng dữ liệu đó thành mảng JSX, ta sử dụng hàm `.map()` của JavaScript. Hàm này sẽ duyệt qua từng phần tử và trả về một thẻ JSX tương ứng.

- Thuộc tính key (Cực kỳ quan trọng):
Khi render một danh sách bằng `map()`, React bắt buộc mỗi phần tử sinh ra phải có một thuộc tính tên là `key`.

Tại sao cần key? React cần `key` để `theo dõi xem phần tử nào trong danh sách vừa bị thay đổi, thêm vào, hay xóa đi`. Điều này giúp React cập nhật giao diện một cách `tối ưu` nhất.

Quy tắc của key: Giá trị của key phải là `duy nhất` giữa các phần tử anh em (thường dùng ID của dữ liệu). Không nên dùng index (số thứ tự) làm key nếu danh sách có thể bị xáo trộn.

## Ví dụ minh hoạ:
