# Topic 2: Flexbox & Grid
## Flexbox
- Flexbox là gì?

Flexbox giúp sắp xếp các element(phần tử) theo hàng ngang hoặc dọc 1 cách linh hoạt.
```
Không có flex:          Có flex:
[A]                     [A] [B] [C]
[B]
[C]
```
- Các class Flexbox quan trọng
    - Bật flexbox
    ```
    flex          → bật flex, mặc định xếp hàng ngang
    flex-col      → xếp theo chiều dọc
    ```
    - Căn chỉnh ngang(justify)
    ```
    justify-start     → dồn về trái (mặc định)
    justify-center    → căn giữa
    justify-end       → dồn về phải
    justify-between   → đẩy 2 đầu ra 2 bên
    ```
    - Căn chỉnh dọc(items)
    ```
    items-start       → dồn lên trên
    items-center      → căn giữa theo chiều dọc
    items-end         → dồn xuống dưới
    ```
    - Khoảng cách giữa các item
    ```
    gap-4         → khoảng cách đều 4 phía
    gap-x-4       → khoảng cách ngang
    gap-y-4       → khoảng cách dọc
    ```
- Ví dụ:
```jsx
export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center p-4 bg-black-200">
      <p>Logo</p>
      <p>About</p>
      <p>Contact</p>
    </div>
  )
}
```
## Grid
- Grid là gì?

Grid giúp chia layout thành ô vuông theo hàng và cột - rất hữu ích cho danh sách card.
```
grid-cols-3:
[A] [B] [C]
[D] [E] [F]
```
- Các class Grid quan trọng
```
grid              → bật grid
grid-cols-2       → chia 2 cột
grid-cols-3       → chia 3 cột
grid-cols-4       → chia 4 cột
gap-4             → khoảng cách giữa các ô
```
- Ví dụ:
```jsx
export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="bg-blue-200 p-4">Card 1</div>
      <div className="bg-blue-200 p-4">Card 2</div>
      <div className="bg-blue-200 p-4">Card 3</div>
      <div className="bg-blue-200 p-4">Card 4</div>
      <div className="bg-blue-200 p-4">Card 5</div>
      <div className="bg-blue-200 p-4">Card 6</div>
    </div>
  )
}
```

