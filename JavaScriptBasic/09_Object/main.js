function user(firstName, lastName, age){
 this.firstName =  firstName;
 this.lastName = lastName;
 this.age = age;
 
 this.getFullName = function(){
    return this.firstName +' '+ this.lastName;
 };
}

var user1 = new user("Nguyễn","Văn",19);
var user2 = new user("Tom","Jerry",30);
user.prototype.quoctinh = "VN";
console.log(user1.quoctinh);
console.log(user2.quoctinh);

console.log(user1.getFullName());


//Bài Tập 1:
/*Hãy tạo object constructor cho nhóm Animal có 3 thuộc tính là name, leg và speed. 
Trong đó, name là để lưu tên động vật, leg là số lượng chân và speed là tốc độ di chuyển của động vật đó.
Sau đó, hãy tạo một đối tượng từ object constructor trên để mô tả 1 con vẹt, lưu đối tượng vào biến parrot.
Tên và tốc độ di chuyển của vẹt các bạn có thể tùy ý đặt, không đòi hỏi phải chính xác với tên và tốc độ trong thực tế.
 */
function Animal(name, leg, speed){
    this.name = name;
    this.leg = leg;
    this.speed = speed;
} //Lưu ý: Tên hàm phải viết hoa chữ cái đầu.
var parrot = new Animal("parrot",2, 100);
console.log(parrot);

//Bài tập 2:
/*Hãy tạo một object constructor Student gồm: firstName, lastName. Sau đó, định nghĩa thêm phương thức là getFullName,
 phương thức này sẽ trả về tên đầy đủ của sinh viên.
Giữa firstName và lastName cần có 1 khoảng trắng (1 dấu space).
*/
function Student(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
Student.prototype.getFullName = function(){
        return this.firstName +" "+this.lastName
    };
// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'

//Bài tập Date:
//In ngày tháng năm hiện tại.
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
console.log(`${day}/${month}/${year}`);


/*hãy tạo hàm getNextYear, 
hàm này sẽ trả về năm kế tiếp. Ví dụ, năm nay là 2022, hàm sẽ trả về 2023 là kiểu số.
 */
function getNextYear(){
    var date = new Date();
    var year = date.getFullYear();

    return year + 1;
}

//Các ví dụ Math:
console.log(Math.PI);

