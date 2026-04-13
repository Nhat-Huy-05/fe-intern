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
