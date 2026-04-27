# Topic 5: Interactivity
- Interactivity là gì?

Interactivity(Tương tác) giúp thay đổi giao diện của 1 phần tử(element) khi người dùng tương tác với nó, ví dụ `di chuột qua(hover)`, nhấp vào `nút bấm(active)`, hoặc nhấp vào `ô nhập liệu(focus)`.Kết hợp với các hiệu ứng chuyển động(transition), trang web trở nên sống động.
- Các class Interactivity quan trọng:
1. Hover (Khi chuột di đến phần tử)
```
hover:bg-blue-600    → Đổi màu nền sang xanh khi hover
hover:text-white     → Đổi màu chữ sang trắng khi hover
hover:scale-105      → Phóng to phần tử lên 5% khi hover
hover:opacity-80     → Giảm độ mờ xuống 80% khi hover
```
2. Focus(Khi phần tử được nhấp chọn - dùng trong thẻ input, textarea)
```
focus:outline-none   → Xóa đường viền đen mặc định xấu xí của trình duyệt
focus:border-blue-500→ Đổi màu viền sang xanh khi đang gõ chữ
focus:ring-2         → Tạo một vòng sáng bao quanh phần tử
focus:ring-blue-200  → Đổi màu vòng sáng thành xanh nhạt
```
3. Active(Khi phần tử đang bị nhấn giữ chuột - tạo cảm giác nút bấm vật lý)
```
active:bg-blue-700   → Đổi màu nền đậm hơn lúc đang click
active:scale-95      → Thu nhỏ phần tử lại 5% tạo hiệu ứng "lún" xuống
```
4. Transition (Hiệu ứng chuyển đổi mượt mà - bắt buộc phải có để hover/focus không bị giật )
```
transition           → Bật hiệu ứng chuyển đổi cơ bản
transition-all       → Bật chuyển đổi cho tất cả các thuộc tính thay đổi
transition-colors    → Chỉ bật hiệu ứng mượt mà cho màu sắc (bg, text, border)
duration-200         → Thời gian chuyển đổi diễn ra (200 mili-giây)
duration-300         → Chậm hơn một chút (300 mili-giây)
ease-in-out          → Nhịp độ: Nhanh ở giữa, chậm ở hai đầu (tạo cảm giác tự nhiên)
```