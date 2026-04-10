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