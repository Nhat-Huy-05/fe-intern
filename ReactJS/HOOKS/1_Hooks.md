# HOOKS là gì?
- Trước khi có Hooks, React có 2 loại component:
- **Class Component** - Viết dài, phức tạp, nhưng mới có thể dùng state và các tính năng nâng cao.
- **Function Component** - Viết ngắn, đơn giản, chỉ hiển thị UI.
---
- **HOOKS**: là hàm đặc biệt, giúp Function Components làm được mọi thứ mà Class Component làm được- nhưng code ngắn và dễ đọc hơn.

## So sánh Class Component (cũ) và Function Component + Hook (mới)

- Class Component(cũ):
```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Clicked {this.state.count} times
      </button>
    );
  }
}
```
- Function Component + Hook (mới):
```javascript
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```
- Cùng 1 việc nhưng dưới ngắn, dễ đọc hơn.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Counter</title>

    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id ="root"></div>
    <script type = "text/babel">
        const { useState } = React;

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}

// Tìm thẻ div có id="root" bên HTML và vẽ Counter vào đó
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);
    </script>
    
</body>
</html>
```
- Cách để gọi nhiều counter ra, tạo 1 component cha.    
```javascript
// Component cha để chứa nhiều Counter
function App() {
  return (
    <div>
      <h2>Ứng dụng React của tôi</h2>
      <Counter />
      <Counter />
      <Counter />
      <hr />
      <p>Mỗi nút bấm ở trên hoạt động độc lập với nhau.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
- So sánh chức năng nhưng 2 cách viết khác nhau:

| Class Component | Function Component + Hook |
| :-- | :-- |
| constructor: khởi tạo | 1 dòng khai báo useState
  this.state: để khai báo state | gọi setCount là xong
  this.setState: để cập nhật
  this. : ở khắp nơi

## Tại sao cần Hooks?
 - Code ngắn, dễ đọc,dễ kiểm thử (test), React tối ưu hoá hiệu suất.
## Quy tắc sử dụng HOOKS
- 2 quy tắc bắt buộc khi sử dụng HOOKS:
1. Chỉ gọi Hooks ở top level
- Hooks phải được gọi thẳng bên trong function component, không được đặt trong:
  - if/else
  - vòng lặp for, while
  - function lồng bên trong.

Ví dụ:
```jsx
// ❌ SAI - hook trong if
function App() {
  if (isLoggedIn) {
    const [count, setCount] = useState(0); // Sai!
  }
}

// ✅ ĐÚNG - hook ở top level
function App() {
  const [count, setCount] = useState(0); // Đúng!

  if (isLoggedIn) {
    // làm gì đó
  }
}
```
2. Chỉ gọi Hooks trong React Function
- Hooks chỉ được dùng trong:
  - Function Component của React
  - Custom Hook(hàm bắt đầu = `use`)
- Không được gọi Hook trong hàm JS thông thường.
```jsx
// ❌ SAI - hook trong hàm JS thường
function tinhToan() {
  const [count, setCount] = useState(0); // Sai!
}

// ✅ ĐÚNG - hook trong Function Component
function App() {
  const [count, setCount] = useState(0); // Đúng!
}
```
  - React cần biết thứ tự của các hooks mỗi lần component render. Nó không lưu theo tên, mà lưu theo thứ tự xuất hiện — hook thứ 1, hook thứ 2, hook thứ 3...
  - Viết hoa chữ cái đầu để React phân biệt được các thẻ HTML thông thường(như div, h1 viết thường).
  (App, UserProfile, ButtonSubmit).