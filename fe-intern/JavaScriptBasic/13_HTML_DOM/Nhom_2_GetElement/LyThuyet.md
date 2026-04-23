# Get element là gì và tại sao cần?

- Trước khi thao tác bất kỳ thứ gì trên trang( đổi màu, ẩn hiện, thêm nội dung), ta cần `tìm đúng phần tử đó`trong cây DOM.

`Get element` = bước đầu tiên bắt buộc mọi thao tác DOM. Không tìm được phần tử thì không làm gì được.

# Trong JavaScript, có 5 phương thức chính để đi tìm và lấy phần tử từ trang HTML:

- 13.4 - `getElementById("id_name")`: Tìm phần tử dựa vào thuộc tính Id. Vì ID là duy nhất trên một trang web, phương thức này trả về 1 phần tử duy nhất (hoặc null nếu không tìm thấy).

- 13.5 - `getElementsByClassName("class_name")`: Tìm phần tử dựa vào thuộc tính class. Vì nhiều thẻ có thể dùng chung một class, phương thức này trả về một danh sách các phần tử (gọi là HTMLCollection).

- 13.6 - `getElementsByTagName("tag_name")`: Tìm phần tử dựa vào tên thẻ HTML (ví dụ: h1, p, div). Tương tự class, nó trả về một danh sách (HTMLCollection).

- 13.7 - `querySelector("css_selector")`: Tìm phần tử dựa trên cú pháp CSS (giống hệt cách bạn viết CSS). Nó rất linh hoạt nhưng chỉ trả về phần tử đầu tiên mà nó tìm thấy.

- 13.7 - `querySelectorAll("css_selector")`: Giống hệt querySelector, nhưng nó sẽ tìm và trả về tất cả các phần tử khớp với cú pháp CSS, kết quả là một danh sách gọi là NodeList.

**Các lưu ý nhỏ**: 
- Sai lầm phổ biến nhất: Khi dùng getElementsByClassName, getElementsByTagName hoặc querySelectorAll, bạn KHÔNG THỂ thao tác trực tiếp lên kết quả (VD: elements.innerHTML = "Hello" là SAI). Vì nó là một danh sách, bạn phải chỉ rõ muốn thao tác trên phần tử thứ mấy (VD: elements[0].innerHTML = "Hello").
- Trong querySelector, nhớ dùng dấu # cho ID và dấu . cho class (VD: #demo, .box).

## 5 phương thức chính để tìm phần tử.
### 1.`getElementById` - tìm theo ID
- Tìm đúng 1 phần tử có `Id` khớp.
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
```javascript
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
### 4,5.`querySelector & querySelectorAll`
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
