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