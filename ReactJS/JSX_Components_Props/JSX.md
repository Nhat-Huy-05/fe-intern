# JSX là gì? Tại sao cần JSX ?
- JSX (JavaScript XML) Là 1 cú pháp mở rộng của JS, cho phép ta viết code giao diện (nhìn giống hệt HTML) ngay bên trong file JS.
- Tại sao cần JSX?
    - React tin rằng logic hiển thị (UI) và logic xử lý dữ liệu luôn đi liền với nhau. Thay vì tách HTML ra 1 file và JS ra 1 file, React gộp chúng lại thành các **Components**.
    - JSX giúp code React dễ đọc, trực quan như đang viết HTML, giúp dev dễ dàng hình dung cấu trúc giao diện hơn so với việc dùng JS chuẩn.
- **Các quy tắc cú pháp cơ bản của JSX:**
1. Chỉ trả về 1 phần tử gốc (parent element): Nếu ta có nhiều thẻ ngang hàng, ta phải bọc chúng trong 1 thẻ cha
 
 Ví dụ: `<div>..</div>`, Fragment `<>.. </>`

2. Đóng tất cả các thẻ: thẻ nào không có nội dung bên trong (như `<img>`, `<input>`) thì phải tự đóng `<img />`, `<input />`.
3. Quy tắc camelCase: Các thuộc tính HTML trong JSX được viết theo kiểu lạc đà `(camelCase)`.

 Ví dụ: `class` trở thành `className`, `onclick` -> `onClick`.

4. Nhúng JS vào JSX: Sử dụng cặp ngoặc nhọn `{}` để nhúng bất kỳ biểu thức JS hợp lệ nào (biến, phép tính, hàm trả về giá trị).

**Bản chất của JSX:** Trình duyệt không hiểu JSX. Trước khi chạy, JSX sẽ được các công cụ biên dịch(Babel) thành JS thuần thông qua hàm `React.createElement()`.

## Ví dụ minh hoạ:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ví dụ JSX</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // Khai báo biến
        const userName = "Nguyễn Văn A";
        const age = 21;

        // Tạo React Element bằng JSX
        const element = (
          <div className="user-info">
            <h1>Xin chào, {userName}!</h1>
            <p>Bạn {age} tuổi.</p>
            <p>Năm sinh của bạn là: {2026 - age}</p>
          </div>
        );

        // 5. Yêu cầu React lấy 'element' ở trên và nhét vào cái thùng chứa có id là 'root'
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(element);
    </script>
</body>
</html>
```
**Lưu ý:** 
- Cần thư viện React thì trình duyệt mới hiểu được JSX là gì.
- Kéo các thư viện React và Babel vào qua link CDN, tạo 1 thẻ `div` làm gốc, và dùng thẻ `<script type = "text/babel">`.

