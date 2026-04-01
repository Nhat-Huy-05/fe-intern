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

//5.Set time out: Đoạn code chạy
