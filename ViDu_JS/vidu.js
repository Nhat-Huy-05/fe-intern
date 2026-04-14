const ages = [18, 20, 25];
const isAdult = ages.every(age => age >= 18); // Kết quả: true
console.log(isAdult);

const scores = [4, 5, 9];
const hasExcellent = scores.some(score => score >= 9); // Kết quả: true
console.log(hasExcellent);

const users = [{id: 1, name: 'An'}, {id: 2, name: 'Bình'}];
const user = users.find(u => u.id === 2); // Kết quả: {id: 2, name: 'Bình'}
console.log(user);