/*Bài 1: Viết hàm tinhHieu(a, b ) trừ 2 số và trả về KQ.
  Sau đó gọi hàm với 2 số bất kỳ.
*/
function tinhHieu(a, b){ 
    //khai báo hàm với 2 tham số đầu vào a,b
    return a - b; 
    //Trả về giá trị hiệu a-b và dừng hàm 
}
var result = tinhHieu(7, 3);
//gọi hàm với đối số 7,3 và gán KQ vào biến result
console.log(result);//in KQ

/*Bài 2: Viết hàm showFavoriteFoods không khai báo tham số,
        nhưng khi gọi hàm truyền vào bao nhiêu tên món ăn thì in ra bấy nhiêu dòng.
*/
function showFavoriteFoods(){
//Dùng vòng lặp for...of để duyệt qua đối tượng arguments(ds đối số truyền vào)    
    for(var food of arguments){
        console.log("The Favorite Food: " + food);
        //In từng món ăn trong ds
    }
}
showFavoriteFoods('ToFu','Ramen ');
//truyền 3 đối số vào hàm, gọi hàm ra để sử dụng.

/*Bài 3: Tạo 1 Expression Function để tính diện tích hình cn và giải thích
        tại sao không thể gọi biến bên trong hàm ra ngoài
        Expre Fun: tức là Gán giá trị
*/ 
var tinhDienTich = function(rong, dai){
//Gán 1 hàm không tên vào biến
    var dientich = rong * dai;
//Biến dientich có tính Private(local), chỉ dùng trong {}
    return dientich;
}
console.log(tinhDienTich(3, 5)); //KQ:15