# Topic 4: Backgrounds & Borders
## 1.Background - Màu nền
- Background Color:
```
bg-white          → nền trắng
bg-black          → nền đen
bg-gray-100       → nền xám nhạt
bg-gray-800       → nền xám đậm
bg-blue-500       → nền xanh dương
bg-red-500        → nền đỏ
bg-green-500      → nền xanh lá
bg-yellow-500     → nền vàng
```
    - Quy tắc số: 100-200 = rất nhạt, 500 = vừa, 700-900 = đậm
- Background Gradient:
```
bg-gradient-to-r        → gradient từ trái qua phải
bg-gradient-to-b        → gradient từ trên xuống dưới
from-blue-500           → màu bắt đầu
to-purple-500           → màu kết thúc
```
- Ví dụ:
```jsx
<div className="bg-gradient-to-r from-blue-500 to-purple-500">
```
 ## 2.Border - Viền
- Border cơ bản:
```
border            → viền 1px
border-2          → viền 2px
border-4          → viền 4px
border-gray-300   → màu viền xám nhạt
border-blue-500   → màu viền xanh
```
- Border từng phía:
```
border-t          → viền trên
border-b          → viền dưới
border-l          → viền trái
border-r          → viền phải
```
## 3. Border Radius - Bo góc
```
rounded           → bo nhẹ (4px)
rounded-md        → bo vừa (6px)
rounded-lg        → bo nhiều (8px)
rounded-xl        → bo hơn (12px)
rounded-2xl       → bo lớn (16px)
rounded-full      → bo tròn hoàn toàn (dùng cho avatar)
```
## 4. Shadow - Bóng đổ
```
shadow-sm         → bóng nhẹ
shadow            → bóng vừa
shadow-md         → bóng rõ hơn
shadow-lg         → bóng lớn
shadow-xl         → bóng rất lớn
shadow-none       → không có bóng
```
---
- Ví dụ:
```tsx
export default function Home() {
  return (
    <div className="card-wrapper min-h-screen bg-gray-50 p-10 flex flex-col items-center">
      
      {/* 🎯 Project Card Hoàn Chỉnh */}
      <div className="bg-white border border-gray-200 rounded-[2rem] shadow-2xl p-5 max-w-sm">
        
        {/* 1. Ô hình chữ nhật dùng gradient (Giả thumbnail) */}
        <div className="w-full h-40 bg-gradient-to-tr from-blue-500 to-emerald-400 rounded-[1.5rem] mb-5"></div>

        {/* 2. Nội dung text */}
        <div className="space-y-2 px-1">
          {/* Tên project → chữ đậm, màu tối */}
          <h2 className="text-xl font-bold text-gray-900">
            Dự án Modern UI
          </h2>
          
          {/* Mô tả ngắn → chữ nhỏ, màu xám */}
          <p className="text-sm text-gray-500 leading-relaxed">
            Sử dụng Tailwind CSS và Next.js để xây dựng giao diện người dùng tối giản nhưng không kém phần tinh tế.
          </p>
        </div>
        
      </div>

      {/* --- Mấy cái Card cũ của bạn để bên dưới để so sánh --- */}
      <div className="mt-10 opacity-50 scale-75">
          <p className="text-center mb-2 text-gray-400 italic">Mấy mẫu nháp cũ của bạn:</p>
          <div className="bg-white border border-gray-800 rounded-xl shadow-xl p-4 mb-2">
            <p className="text-gray-800 font-semibold">Card thường</p>
          </div>
          <div className="bg-green-500 rounded-full w-10 h-10"></div>
      </div>

    </div>
  )
}
```
