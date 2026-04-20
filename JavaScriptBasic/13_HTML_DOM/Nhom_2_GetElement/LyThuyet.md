# Get element là gì và tại sao cần?

- Trước khi thao tác bất kỳ thứ gì trên trang( đổi màu, ẩn hiện, thêm nội dung), ta cần `tìm đúng phần tử đó`trong cây DOM.

`Get element` = bước đầu tiên bắt buộc mọi thao tác DOM. Không tìm được phần tử thì không làm gì được.

## 5 phương thức chính để tìm phần tử.
### 1.`getElementById` - tìm theo ID
- Tìm đúng 1 phần tử có `id` khớp.
```javascript
//Cú pháp
document.getElementById('tên-id')

//Ví dụ
const box = document.getElementById('box');
console.log(box); // -> <div id = "box"> .. </div>
```
**Lưu ý**: ID là duy nhất trong trang - không được đặt 2 thẻ cùng ID.Nếu trùng, `phương thức chỉ lấy cái đầu tiên`.

- Trả về 1 element duy nhất(hoặc `null` nếu không tìm thấy.)
- Không có dấu `#` phía trước - chỉ viết tên `id`
```
//Sai - không thêm dấu # vào.
document.getElementById('#box'); // -> null

//Đúng
document.getElementById('box'); // -> tìm thấy
```
### 2.`getElementsByClassName` - tìm theo class
- Tìm tất cả phần tử có class khớp. Trả về 1 danh sách.
```javascript
//Cú pháp
document.getElementsByClassName('tên - class')

//Ví dụ - tìm tất cả thẻ có class = "text"
const items = document.getElementsByClassName('text');
console.log(items.length); // ->2(có 2 thẻ <p class = "text">)
console.log(items.item[0]); // -> phần tử đầu tiên.
```

Kết quả trả về không phải mảng — là HTMLCollection. Muốn dùng forEach phải chuyển đổi trước: [...items].forEach(...)
```javascript
// Lặp qua tất cả kết quả
[...items].forEach(el => {
  console.log(el.textContent);
});
// In ra: "Đoạn 1", "Đoạn 2"
```
### 3.`getElementsByTagName` - tìm theo tên thẻ
- Tìm tất cả phần tử có tên thẻ khớp.
```javascript
// Cú pháp
document.getElementsByTagName('tên-thẻ')

// Ví dụ — lấy tất cả thẻ <p>
const paras = document.getElementsByTagName('p');
console.log(paras.length); // → 2

// Lấy tất cả thẻ bất kỳ trên trang
const all = document.getElementsByTagName('*');
```
- Dùng khi muốn lấy tất cả thẻ cùng loại
- Hạn chế: không lọc được theo class hay id, chỉ theo tên thẻ.
### 4, 5.`querySelector & querySelectorAll
- Hai phương thức này dùng CSS selector
```javascript
// querySelector — lấy phần tử ĐẦU TIÊN khớp
document.querySelector('#box')       // theo ID
document.querySelector('.text')      // theo class (đầu tiên)
document.querySelector('p')          // theo thẻ (đầu tiên)
document.querySelector('div .text') // kết hợp selector

// querySelectorAll — lấy TẤT CẢ phần tử khớp
document.querySelectorAll('.text')  // → NodeList [p, p]
document.querySelectorAll('p, h1') // → nhiều loại cùng lúc
```
- `querySelectorAll` trả về NodeList.
