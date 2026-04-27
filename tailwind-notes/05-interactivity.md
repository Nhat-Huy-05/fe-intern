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
4. Transition (Hiệu ứng chuyển đổi mượt mà - bắt buộc phải có để hover/focus không bị giật cụt lủn(trạng thái xảy ra lập tức trong 0 giây) )
```
transition           → Bật hiệu ứng chuyển đổi cơ bản
transition-all       → Bật chuyển đổi cho tất cả các thuộc tính thay đổi
transition-colors    → Chỉ bật hiệu ứng mượt mà cho màu sắc (bg, text, border)
duration-200         → Thời gian chuyển đổi diễn ra (200 mili-giây)
duration-300         → Chậm hơn một chút (300 mili-giây)
ease-in-out          → Nhịp độ: Nhanh ở giữa, chậm ở hai đầu (tạo cảm giác tự nhiên)
```
---
# Ví dụ:
```tsx
export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 p-10 bg-gray-50 min-h-screen">
      
      {/* Nút bấm (Button) với Hover, Active và Transition */}
      <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-95 active:bg-blue-700">
        Gửi Tin Nhắn
      </button>

      {/* Ô nhập liệu (Input) với Focus và Transition */}
      <input
        type="text"
        placeholder="Nhập email của bạn..."
        className="w-72 border-2 border-gray-300 rounded-md px-4 py-2 outline-none transition-colors duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
      
      {/* Thẻ (Card) phóng to nhẹ khi di chuột qua */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200">
        <h3 className="text-xl font-bold text-gray-800">Dự án 1</h3>
        <p className="text-gray-500 mt-2">Di chuột vào tôi để xem hiệu ứng nổi lên!</p>
      </div>

    </div>
  )
}
```