# useState cơ bản
## Lý thuyết
1. State là gì?
- State là dữ liệu có thể thay đổi bên trong component. Khi state thay đổi, React tự động render lại component để cập nhật giao diện.

    Render lại là quá trình UI(giao diện) được vẽ lại để phản ánh đúng với những thay đổi của dữ liệu.

- 2. Luồng hoạt động cơ bản: 
Hầu hết các framework hiện đại hoạt động theo công thức:

        `UI = f(data)`
1. Trạng thái ban đầu: App hiển thị số lượt thích là 0.
2. Sự kiện xảy ra: Người dùng nhấn nút "Like".
3. Cập nhật dữ liệu: Biến số lượt thích tăng từ 0 lên 1.
4. Kích hoạt render: Framework nhận thấy dữ liệu đã đổi, nó sẽ gọi lại hàm (function) hoặc class của component đó.
5. Cập nhật giao diện: Màn hình bây giờ hiển thị số 1.
## Cú pháp:
```jsx
const[state, setState] = useState(gia_Tri_Khoi_Tao)
```
- `state`: biến lưu giá trị hiện tại
- `setState`: hàm dùng để cập nhật giá trị
- `gia_Tri_Khoi_Tao`: giá trị ban đầu khi component mới chạy lần đầu.

### Ví dụ:
```jsx
import { useState } from "react";
//useState cho phép component nhớ thông tin giữa những phần render khác nhau.

function Counter() {
  const [count, setCount] = useState(0);
  //count = 0, mỗi lần click, setCount(c + 1) được gọi
  //count tăng lên 1, React Render lại, màn hình cập nhật số mới.

  return (
    <div>
      <p>Bạn đã click: {count} lần</p>
      <button onClick={() => setCount(count + 1)}>
      {/*khi click vào button, hàm setCount được gọi
        Truyền vào giá trị mới = count + 1
        */}
        Click me
      </button>
    </div>
  );
}
```
- Tại sao không dùng biến thường thay vì useState?
```jsx
// ❌ Cách này KHÔNG hoạt động
function Counter() {
  let count = 0;

  return (
    <button onClick={() => count + 1}>
      {count}
    </button>
  );
}
```
 - Vì khi count thay đổi, React không biết để render lại - màn hình sẽ không update.