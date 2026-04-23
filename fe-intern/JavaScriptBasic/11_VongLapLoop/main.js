var sinhVien = {
    ten: "Nguyen Van A",
    tuoi: 20,
    khoa: "CNTT",
    diemTB: 8.0
}; //khai báo 1 object

//vong lap for..in
for (var thuocTinh in sinhVien){
    //thuocTinh lần lượt là ten,tuoi,khoa,diemTB
    //sinhvien[thuocTinh]: dùng để lấy gtri tương ứng với thuộc tính đó.
    console.log("Tên thuộc tính: " + thuocTinh + " | Giá trị: " + sinhVien[thuocTinh]);
}
// Tên thuộc tính: ten | Giá trị: Nguyen Van A
// Tên thuộc tính: tuoi | Giá trị: 20
// Tên thuộc tính: khoa | Giá trị: CNTT
// Tên thuộc tính: diemTB | Giá trị: 8


//BT:
/*Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. 
Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.
Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.
 */
// Làm bài
function getRandNumbers(min, max, length){
    var result = [];
    for(var i = 0; i < length; i++){
        var randomNumber = Math.random() * (max - min) + min;
        result.push(randomNumber);
    }
    return result;
}

//BT2:
/*Cho trước mảng numbers, hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng.
 */
function getTotal(arr) {
     var numbers = 0;
    for ( var i = 0;i < arr.length; i++ ){
        numbers += arr[i];
    }
    return numbers;
}

// Expected results
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17

var arr = [
    'Javascript',
    'Java',
    'C++'
];

var arrLength = arr.length;
for(var i=0;i<arr.length;i++) {
    console.log(arr[i]); //kiểm tra xem mảng có bao nhiêu phần tử.
}

//BT3
/*Cho trước mảng orders là danh sách chứa các khóa học, 
các mặt hàng này được thể hiện dưới dạng object và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.
Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng.
*/
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
function getTotal(orders){
    var total = 0;
    for( var i = 0; i < orders.length;i++){
        total += orders[i].price;
    }
    return total;
}
getTotal(orders) // Output: 8700000


var myArray = ['JS','PHP','Ruby'];

var i = 0;
while(i < myArray.length) {
    console.log(myArray[i]);
    i++;
}

//vd về do while trong sử dụng mật khẩu.
let password;
do {
    password = prompt("Nhập mật khẩu của bạn:");
} while (password !== "123456");

alert("Đăng nhập thành công!");

//vd về nested loop
//Vẽ hình tam giác vuông bằng các dấu sao
var n = 5;
for (var i = 1; i <= n ; i++){
    //vòng lặp cha: quản lý số hàng( 1 đến 5)
    var row = "";
    for(var j = 1; j <= i; j++){
    //vòng lặp con: quản lý số dấu sao trên mỗi hàng.
    row += "* ";
    }
    console.log(row);
}