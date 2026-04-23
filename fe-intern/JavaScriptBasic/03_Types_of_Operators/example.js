//ví dụ về toán tử số học:
var a = 1;
var b = 2;
var c = a + b; //c = 3
alert(c);

//ví dụ về hậu tố và tiền tố 
var a = 1; //Hậu tố
console.log(a++); //1
console.log(a); //2  

console.log(a++); //2
console.log(a); //3

var a = 1; //Tiền tố
console.log(++a); //2
console.log(a); //2

console.log(++a); //3
console.log(a); //3

var a = 6;                        
var ketqua = ++a * 2 - a-- * 2;
console.log('ket qua la: ',ketqua); //0
/* ++a sẽ thành 7, a-- sẽ là 7 vì là hậu tố (7 ở ++a mà ra),
   nên sẽ là 7 * 2 - 7 * 2
*/

//ví dụ về toán tử so sánh:
var a = 1;
var b = '1';
alert(a === b); //False vì a là number, b là string nên sai.

var a = 1;
var b = '1'
alert(a !== b); //True vì so sánh kiểu dữ liệu thì number khác string thật.

//ví dụ về toán tử logic:
var a = 1;
var b = 2;
if ( a > 0 && b > 0){
  alert('a,b lớn hơn 0');
}

//ví dụ về toán tử chuỗi - String:
var fisrtName = 'My'; //MyName
var lastName = 'Name'; //' ' được hiểu là khoảng trắng
var ten = 'Your';
ten = ten + 'Name'; //YourName
console.log(ten);
