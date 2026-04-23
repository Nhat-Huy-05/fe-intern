var date = 2;
if(date == 2){
    console.log(2);
}
else if (date == 3){
    console.log(3);
}
else {
    console.log(4);
}

/*BT1: Để vượt qua thử thách này, hãy hoàn thành hàm cho trước để đáp ứng các yêu cầu sau:

Khi a chia hết cho 3 thì return về 1
Khi a chia hết cho 5 thì return về 2
Khi a chia hết cho 15 thì return về 3
 */
function run(a) {
    if (a % 15 == 0){
        return 3;
    } else if (a % 5 == 0){
        return 2;
    } else if (a % 3 == 0){
        return 1;
    }
    } //Xét từ trên xuống,15 chia hết cho cả 3 và 5 nên thỏa điều kiện rồi nên nó không trả về 3 nên đặt điều kiện 15 trước.

console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3


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

var age = 17;
var canVote = age >=18 ? "Đủ tuổi bầu cử " : "Chưa đủ tuổi";
console.log(canVote); //chưa đủ t

//Ví dụ về toán tử 3 ngôi.
/* cần tạo hàm getCanVoteMessage, hàm này có 1 tham số là age. 
Trong trường hợp từ 18 tuổi trở lên hàm sẽ trả về
 Bạn có thể bỏ phiếu, ngược lại hàm trả về Bạn chưa được bỏ phiếu.
 */
// Làm bài
function getCanVoteMessage(age){
    return age > 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu";
}

console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'