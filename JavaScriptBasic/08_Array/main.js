//Các ví dụ:
/**
 * TỔNG KẾT LÀM VIỆC VỚI MẢNG
 */
var fruits = ['Apple', 'Banana'];

// 1 & 2: Chuyển thành chuỗi
fruits.join(' | '); // "Apple | Banana"

// 3 & 4: Cuối mảng
fruits.push('Mango'); // Thêm Mango vào cuối -> ['Apple', 'Banana', 'Mango']
fruits.pop();         // Xóa Mango ở cuối -> ['Apple', 'Banana']

// 5 & 6: Đầu mảng
fruits.shift();       // Xóa Apple ở đầu -> ['Banana']
fruits.unshift('Orange'); // Thêm Orange vào đầu -> ['Orange', 'Banana']

// 7: Splicing (Xóa/Chèn)
fruits.splice(1, 1, 'Grapes'); // Tại index 1, xóa 1 phần tử (Banana), thay bằng Grapes
// Kết quả: ['Orange', 'Grapes']

// 8: Concat (Nối)
var moreFruits = fruits.concat(['Lemon', 'Plum']); 
// Kết quả: ['Orange', 'Grapes', 'Lemon', 'Plum']

// 9: Slicing (Cắt lấy phần mong muốn)
var subFruits = moreFruits.slice(0, 2); 
// Kết quả: ['Orange', 'Grapes']

console.log('Mảng cuối cùng:', moreFruits);

//Bài tập 1:
/*Cho trước hàm joinWithCharacter có 2 tham số là array và charactor, 
hãy hoàn thành phần nội dung hàm sao cho hàm trả về 1 chuỗi là kết quả của việc nối từng phần tử của mảng với charactor. */
function joinWithCharacter(array, charactor) {
    return array.join(charactor)
}


// Ví dụ khi sử dụng
var cars = ['Honda', 'Mazda', 'Mercedes'];

var result = joinWithCharacter(cars, ' - ');

console.log(result); // Expected: "Honda - Mazda - Mercedes"

//Bài tập 2:
/*Hãy tạo hàm getLastElement có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array), 
  hàm này sẽ trả về phần tử cuối cùng trong mảng
 */
// Viết hàm tại đây
function getLastElement(array){
    return array[array.length - 1];
}

// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

//Bài tập 3:
/*Hãy tạo hàm getFirstElement có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array), 
hàm này sẽ trả về phần tử đầu tiên trong mảng. 
*/
// Viết hàm tại đây
function getFirstElement(array){
    return array[0];
}

// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getFirstElement(animals);

console.log(result); // Expected: "Monkey"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']


//tạo hàm getMostFavoriteSport có 1 tham số (gọi hàm này và luôn truyền đối số là 1 array).
//Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.
//Gợi ý: Sử dụng phương thức filter.
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
function getMostFavoriteSport(array){
    return array.filter(function(sports){
        return sports.like > 5;
    })
}
console.log(getMostFavoriteSport(sports)) 
