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

console.log(user1.getFullName());