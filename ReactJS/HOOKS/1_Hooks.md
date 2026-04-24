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
root.render(<Counter />)
    </script>
    
</body>
</html>
```