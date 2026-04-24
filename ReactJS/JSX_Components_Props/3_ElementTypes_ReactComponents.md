# React element types - React Components
1. Lý thuyết & Cú pháp
React Element : những biến chứa mã JSX (như const element = `<h1>Hello</h1>`) chính là các React Elements. Là đơn vị nhỏ nhất, mô tả những gì ta muồn nhìn thấy trên màn hình. Element là tĩnh, một khi được tạo ra thì không thể thay đổi.
2. React Components là gì? Phân biệt với Element?
    - Nếu Element là một chiếc bánh đã nướng xong, thì Component chính là cái "khuôn đúc bánh" hoặc công thức làm bánh.
    - Thay vì viết toàn bộ code giao diện vào một cục khổng lồ, Component cho phép ta cắt giao diện thành những mảnh nhỏ, độc lập và có thể tái sử dụng (Ví dụ: Thanh điều hướng, Thanh bên, Thẻ sản phẩm, Nút bấm).
    - Component nhận đầu vào (sau này gọi là props) và trả về một React Element để hiển thị ra màn hình.
3. Cách tạo **Function Component**:
- Cách phổ biển nhất hiện nay là tạo Component bằng các hàm(function) của JS. Có 2 quy tắc quan trọng:

    a, Tên hàm bắt buộc phải viết hoa chữ cái đầu tiên (Ví dụ: `Header`, `ProductCard`). Nếu viết chữ thường(header), React sẽ nhầm nó với thẻ `<header>` của HTML.

    b, Hàm phải `return` 1 khối JSX.
4. Ví dụ:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id = "root">
  </div>

  <script type="text/babel">
//Tạo 1 funtion component tên Welcome(chữ W hoa)
function Welcome(){
    return(
        <div className = "welcome-box">
            <h2>Welcome to the course ReactJS</h2>
            <p>Đây là component đầu tiên.</p>
        </div>
    )
}

//2. Sử dụng Component: Thay vì gọi hàm thông thường, ta viết nó như 1 thẻ HTML tự đóng.
const app = (
    <div>
        {/*có thể tái sử dụng component nhiều lần */}
        <Welcome />
        <Welcome />
        <Welcome /> 
        {/*Gọi 3 lần*/}
    </div>
)

//3.Render ra màn hình
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(app);
</script>
</body>
</html>
```