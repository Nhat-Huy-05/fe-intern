// Lấy useState từ React
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