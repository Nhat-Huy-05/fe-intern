# Topic 1: Layout & Box Model
- Box Model là gì?

Trong CSS/Tailwind, mọi thứ trên web đều là 1 hộp (box).Mỗi hộp có 4 lớp:
```
┌─────────────────────────────┐
│           MARGIN            │  ← khoảng cách với bên ngoài
│   ┌─────────────────────┐   │
│   │       BORDER        │   │  ← viền
│   │   ┌─────────────┐   │   │
│   │   │   PADDING   │   │   │  ← khoảng cách bên trong
│   │   │  ┌───────┐  │   │   │
│   │   │  │CONTENT│  │   │   │  ← nội dung thật sự
│   │   │  └───────┘  │   │   │
│   │   └─────────────┘   │   │
│   └─────────────────────┘   │
└─────────────────────────────┘
```
- Các class Tailwind tương ứng
1. Margin - khoảng cách bên ngoài.
```
m-4        → margin 4 phía (cách ra khỏi mép trình duyệt)
mt-4       → margin top
mb-4       → margin bottom
ml-4       → margin left
mr-4       → margin right
mx-4       → margin trái + phải
my-4       → margin trên + dưới
```
2. Padding - khoảng cách bên trong
```
p-4        → padding 4 phía
pt-4       → padding top
pb-4       → padding bottom
pl-4       → padding left
pr-4       → padding right
px-4       → padding trái + phải
py-4       → padding trên + dưới
```
3. Width & Height - Kích thước.
```
w-full     → rộng 100%
w-1/2      → rộng 50%
w-64       → rộng cố định
h-screen   → cao bằng màn hình
h-64       → cao cố định
max-w-xl   → giới hạn độ rộng tối đa
```
4. Con số có nghĩa gì?
```
4  = 16px
2  = 8px
6  = 24px
8  = 32px
```
 - Quy tắc: số x 4 = px. Ví dụ `p-4` = 16px, `p-8` = 32px.

 Ví dụ:
 ```tsx
 export default function Home() {
  return (
    <div className="m-4 p-4 w-1/2 bg-yellow-200">
      <p>Đây là chỗ viết content</p>
    </div>
  )
}
 ```