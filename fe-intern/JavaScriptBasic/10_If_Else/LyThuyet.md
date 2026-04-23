# Lệnh rẽ nhánh `if...else`

- Thực hiện 1 khối mã nếu đk đúng(true), và khối mã khác nếu đk sai(false)
```
if (condition) {
    // Thực thi nếu condition là true
} else {
    // Thực thi nếu condition là false
}
```
Ví dụ:
```javascript
var date = 2;
if (date === 2 ){
    console.log('Hôm nay T2'); //Chỉ thực hiện trong 1 nhánh này khi đúng thôi, nhánh 2 không tính. 
} else if ( date > 0){
    console.log('Hôm nay T3');
} else if ( date === 4){
    console.log('Hôm nay T4');
}
```
- Lưu ý: Luôn luôn chỉ lọt vào 1 nhánh, không bao giờ có trường hợp lọt cả 2.
# Câu lệnh rẽ nhánh - `Switch`

- Thay vì dùng quá nhiều `if... else`, `switch` giúp code sạch sẽ hơn khi so sánh 1 giá trị cụ thể với nhiều hằng số khác nhau.
 
 **Cú pháp**:
 ```
 switch (value) {
    case 1:
        // code...
        break;
    case 2:
        // code...
        break;
    default:
        // chạy khi không khớp case nào
}
 ```
 **Lưu ý**:
 - nếu không có `break`, chương trình sẽ tiếp tục chạy thẳng xuống các `case` bên dưới bất kể điều kiện có khớp hay không.
 - Cho đến khi gặp `break` hoặc `hết khối switch`.

 Ví dụ thực tế:
 ```javascript
 //vd1
  let month = 2;

switch (month) {
    case 1:
        console.log("Tháng 1"); 
    case 2:
        console.log("Tháng 2"); //Khớp case
    case 3:
        console.log("Tháng 3"); //Rơi xuống
    default:
        console.log("Không xác định"); //Rơi xuống tiếp.
} 
//sẽ in ra Tháng 2, Tháng 3, Không xác định.

//vd2
var date = 2;
switch(date){
    case 2:
    case 3:
    case 4:
        console.log('Hôm nay T2,T3,T4');
        break; //lọt vào các case phía dưới cho đến khi gặp từ khoá break mới ngưng.        
    case 5:
        console.log('Hôm nay T5');
        break;
}
 ```
 # Toán tử 3 ngôi (ternary operator)
 - Viết tắt của if else, dùng để `gán giá trị cho biến` hoặc `trả về kết quả` trong hàm 1 cách ngắn gọn.
 
 - Cú pháp: `condition ? value_if_true: value_if_false`

 Ví dụ:
 ```javascript
 var age = 17;
var canVote = age >=18 ? "Đủ tuổi bầu cử " : "Chưa đủ tuổi";
console.log(canVote); //chưa đủ t
 ```
