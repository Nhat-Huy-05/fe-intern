const car = {
  brand: "Toyota",
  model: "Camry",
  startEngine: function() {
    console.log(`Động cơ của xe ${this.brand} ${this.model} đã khởi động!`);
  }
};

car.startEngine(); // Output: Động cơ của xe Toyota Camry đã khởi động!

var user = {
    id : 111,
    role: 'Admin',
    year: 2000
};
console.log(Object.entries(user));