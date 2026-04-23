# JSX Render Arrays - JSX FA
- Làm việc với danh sách
- Render mảng (Array) trong JSX : nếu ta truyền 1 mảng chứa các ptu JSX vào trong dấu ngoặc nhọn `{}`, React sẽ tự động lấy từng phần tử trong mảng đó và hiển thị chúng liền kề nhau.
- Hàm `map():`
Thông thường, chúng ta có một mảng dữ liệu (mảng chuỗi, mảng object). Để biến mảng dữ liệu đó thành mảng JSX, ta sử dụng hàm `.map()` của JavaScript. Hàm này sẽ duyệt qua từng phần tử và trả về một thẻ JSX tương ứng.

- Thuộc tính key (Cực kỳ quan trọng):
Khi render một danh sách bằng `map()`, React bắt buộc mỗi phần tử sinh ra phải có một thuộc tính tên là `key`.

Tại sao cần key? React cần `key` để `theo dõi xem phần tử nào trong danh sách vừa bị thay đổi, thêm vào, hay xóa đi`. Điều này giúp React cập nhật giao diện một cách `tối ưu` nhất.

Quy tắc của key: Giá trị của key phải là `duy nhất` giữa các phần tử anh em (thường dùng ID của dữ liệu). Không nên dùng index (số thứ tự) làm key nếu danh sách có thể bị xáo trộn.

## Ví dụ minh hoạ:
- Hiển thị danh sách tên các học viên.
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Học React cơ bản</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>

    <div id="root"></div>

    <script type="text/babel">
        //1. Dữ liệu đầu vào
        const students = [
            { id: 1, name: "Nguyễn Văn A" },
            { id: 2, name: "Trần Thị B" },
            { id: 3, name: "Lê Văn C" }
        ];

        //dùng map() để biến mảng dl thành mảng JSX.
        const element = (
            <div>
                <h3>Danh sách học viên:</h3>
                <ul>
                    {students.map((student) => (
                        <li key={student.id}>
                            {student.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
        //giải thích: hàm students.map() duyệt qua 3 ob. Với mỗi ob, nó trả về 1 thẻ <li>.
        //Ta gắn key={student.id} vào thẻ <li> để React quản lý danh sách này hiệu quả.


        // 3. Hiển thị (Render) element vào trong thẻ div#root
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(element);
    </script>

</body>
</html>
```
## Bài tập thực hành
- Nhiệm vụ: Render danh sách sản phẩm
- có 1 mảng dữ liệu các sản phẩm điện thoại như sau:
```
const products = [
  { id: 'p1', name: 'iPhone 15 Pro Max', price: 30000000 },
  { id: 'p2', name: 'Samsung Galaxy S24', price: 25000000 },
  { id: 'p3', name: 'Xiaomi 14', price: 20000000 }
];
```
- Yêu cầu: Sử dụng hàm `map()` để biến mảng products này thành một danh sách (dùng thẻ `<ul>` bọc ngoài, mỗi sản phẩm là một thẻ `<li>`).
Bên trong mỗi thẻ `<li>`, hãy hiển thị tên sản phẩm và giá tiền của nó (Ví dụ: iPhone 15 Pro Max - Giá: 30000000). Đừng quên thuộc tính key nhé!

---
## <center>Lời giải</center>
