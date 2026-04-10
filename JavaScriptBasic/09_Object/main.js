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

