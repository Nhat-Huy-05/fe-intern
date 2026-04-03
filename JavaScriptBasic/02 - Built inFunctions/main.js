//1.Alert: Dùng để thông báo
var age = 20;
alert(age);

/*2.Console: Là 1 đối tượng(object),cung cấp quyền truy cập
    vào bảng điều khiển gỡ lỗi của trình duyệt, 
    môi trường chạy code(Node.js)
*/
console.log(age);
console.error(age); //in ra tb lỗi
console.warn(age);  //in ra tb cảnh báo

//3.Confirm: Hiển thị thông báo yêu cầu người dùng xác nhận (OK or Cancel)
/*Lưu ý: Trình duyệt sẽ tạm dừng chạy dòng code tiếp theo
        cho đến khi user nhấn chọn 1 trong 2 */
confirm('Xac nhan dieu khoan');

//4.Prompt: Lấy dữ liệu nhập từ người dùng
prompt('Xac nhan do tuoi');

//5.Set timeout: Thực thi code 1 lần sau 1 khoảng thời gian(tính theo mili giây)
setTimeout(function (){
    alert('Hello World'); }, 2000) //chạy sau 2 giây.

//6.Set Interval: Thực thi code liên tục sau 1 khoảng thời gian(tính theo mili giây)
setInterval(function (){
    alert('Hello World'); }, 3000)// chạy liên tục sau mỗi 3 giây.

