class Car{
    constructor(brand){
        this.name = brand;
    }
show() {
    return 'I want a car ' + this.name;
    } 
}
const myCar = new Car('Dream')
console.log(myCar.show())


