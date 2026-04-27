# Topic 3: Typography
- Typography là gì?

Typography là tất cả những thứ liên quan đến chữ - kích thước, độ đậm , màu sắc, căn lề, khoảng cách dòng,...
- Các class Typography
1. Font Size - Kích thước chữ
```
text-xs        → rất nhỏ (12px)
text-sm        → nhỏ (14px)
text-base      → bình thường (16px)
text-lg        → hơi lớn (18px)
text-xl        → lớn (20px)
text-2xl       → lớn hơn (24px)
text-3xl       → rất lớn (30px)
text-4xl       → cực lớn (36px)
```
2. Font Weight - Độ đậm
```
font-thin       → rất mỏng
font-normal     → bình thường
font-medium     → hơi đậm
font-semibold   → khá đậm
font-bold       → đậm
font-extrabold  → rất đậm
```
3. Text Color - Màu chữ
```
text-black        → đen
text-white        → trắng
text-gray-500     → xám
text-blue-500     → xanh dương
text-red-500      → đỏ
text-green-500    → xanh lá
```
4. Text Align - Căn lề chữ
```
text-left       → căn trái (mặc định)
text-center     → căn giữa
text-right      → căn phải
```
5. Line Height - Khoảng cách dòng
```
leading-none      → không có khoảng cách
leading-tight     → sát nhau
leading-normal    → bình thường
leading-relaxed   → thoáng
leading-loose     → rất thoáng
```
6. Letter Spacing - Khoảng cách chữ
```
tracking-tight    → chữ sát nhau
tracking-normal   → bình thường
tracking-wide     → chữ cách xa nhau
tracking-widest   → cách xa nhất
```
- Ví dụ:
```jsx
export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-black text-center">
        Bùi Nguyễn Nhật Huy
      </h1>
      <p className="text-lg text-green-900 text-center leading-relaxed mt-4">
        Frontend Developer
      </p>
      <p className="text-sm text-gray-500 text-center tracking-tight mt-2">
        Đây là portfolio của tôi
      </p>
    </div>
  )
}
```