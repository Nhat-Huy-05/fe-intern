```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Khung chuẩn React JSX</title>
    
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        
        // ==========================================
        // CÁC QUY TẮC & TỪ KHÓA JSX QUAN TRỌNG
        // ==========================================

        // A. TẠO COMPONENT (Tên hàm BẮT BUỘC viết hoa chữ cái đầu)
        function ComponentName() {
            // Viết logic, khai báo biến JavaScript ở đây (nếu có)
            const variable = "Giá trị";

            // BẮT BUỘC phải có chữ 'return'
            return (
                // 1. BỌC NGOÀI CÙNG: Phải có 1 thẻ duy nhất bọc tất cả (<div> hoặc Fragment <></>)
                <div 
                    /* 2. CLASSNAME: HTML 'class' đổi thành 'className' */
                    className="ten-class-css" 
                    
                    /* 3. CAMELCASE: Các thuộc tính sự kiện phải viết hoa chữ cái từng từ (ví dụ: onClick, onChange) */
                    onClick={() => {}}
                >
                    
                    {/* 4. NHÚNG JS: Dùng cặp ngoặc nhọn {} để gọi biến, hàm, phép tính */}
                    <h1>{variable}</h1>
                    
                    {/* 5. TỰ ĐÓNG THẺ: Thẻ không có ruột phải có dấu / ở cuối */}
                    <img src="link-anh" alt="mo-ta" />
                    <input type="text" />
                </div>
            );
        }

        // B. RENDER DANH SÁCH (ARRAY)
        function ListComponent() {
            const arrayData = [{ id: 1, text: "A" }, { id: 2, text: "B" }];

            return (
                <ul>
                    {/* 6. HÀM MAP & KEY: Dùng .map() để lặp mảng. Phần tử gốc bên trong map BẮT BUỘC phải có thuộc tính 'key' (giá trị độc nhất) */}
                    {arrayData.map((item) => (
                        <li key={item.id}> 
                            {item.text} 
                        </li>
                    ))}
                </ul>
            );
        }

        // C. GỘP CÁC COMPONENT (Component Composition)
        const App = (
            <div>
                {/* 7. GỌI COMPONENT: Viết giống thẻ HTML tự đóng */}
                <ComponentName />
                <ListComponent />
            </div>
        );

        // ==========================================
        // 4. LỆNH RENDER CUỐI CÙNG (Luôn đặt ở cuối script)
        // ==========================================
        const root = ReactDOM.createRoot(document.getElementById('root'));
        
        // Gọi biến App (hoặc <App /> nếu App là function) để vẽ ra màn hình
        root.render(App); 

    </script>
</body>
</html>
```