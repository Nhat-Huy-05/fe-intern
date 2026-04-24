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
    </div>
)

//3.Render ra màn hình
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(app);