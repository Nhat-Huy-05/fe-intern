Markup Language (Ngôn ngữ đánh dấu): Dùng các ký hiệu đặc biệt để đánh dấu văn bản, giúp máy tính có thể hiểu được cấu trúc và cách hiển thị nội dung đó.

+,HTML (HyperText Markup Language): Bộ khung của mọi trang web, sử dụng các thẻ (tags) nằm trong cặp dấu <>
Ví dụ: <h1>Tiêu đề 1</h1> , <b>Văn bản</b>,....

Mục đích:Xây dựng cấu trúc trang web

+,Markdown (.md): dùng để viết file README trên GitHub. Sử dụng các ký tự đơn giản hơn như #,*,-

Ví dụ: ####Tiêu đề , **Đậm**,...

Mục đích: dễ viết nhanh, dễ đọc nhưng vẫn xuất ra được định dạng đẹp (HTML).  

Những cú pháp sử dụng Markdown (.md):

I,Văn bản thuần:

1, Tiêu đề - Heading

Có thể viết loại tiêu đề h1 , h2 bằng cách thêm dấu # vào đầu dòng.

Một dấu # tương đương h1, 2 dấu # tương đương h2...

Cú pháp:

```
#Tiêu đề 1
#Tiêu đề 2
#Tiêu đề 3
```

2, Đoạn văn - Paragraph

Để xuống dòng giữa các văn bản p, ta cần 1 dòng trống để tách các dòng văn bản.

Cú pháp:
```
Dòng 1

``khoảng trống``

Dòng 2
```

3, Ghi chú - Comment

Ta sử dụng cặp ký tự ``

Cú pháp:
```
``hello world``
```
4, Chữ in nghiêng - Italic

Để in nghiêng văn bản i, ta thêm 1 dấu * hoặc 1 dấu _ trước và sau từ cần in nghiêng.

Cú pháp:
```
*In nghiêng 1*

_In nghiêng 2_
```
Kết quả:

*Từ cần in nghiêng 1*

_Từ cần in nghiêng 2_

5,Chữ in đậm - Bold

Để in đậm văn bản b, ta thêm 2 dấu * hoặc 2 dấu __ trước và sau từ cần in đậm

Cú pháp:
```
**In đậm 1 **

__In đậm 2__
```
Kết quả:

**In đậm 1**

__In đậm 2__

6,In đậm và nghiêng (kết hợp cả 2 Italic - Bold)

Chỉ cần 3 dấu * hoặc 3 dấu ___ trước và sau.

Cú pháp:
```
***Đậm và nghiêng***

___Đậm và nghiêng___
```
Kết quả:

***Đậm và nghiêng***

___Đậm và nghiêng___

7,Chữ gạch giữa - Strikethrough

Để tạo chữ gạch giữa, ta thêm 2 dấu ~ trước và sau. 

Cú pháp:
```
~~Hello World~~
```
Kết quả:

~~Hello World~~

8,Code trong dòng -Inline code

Nhằm đánh dấu 1 từ hoặc 1 cụm từ ngắn để máy tính hiển thị dưới dạng ``mã nguồn``.

Cú pháp:
```
`inline code`
```
Kết quả:
`inline code`

II, Các khối:

1,Trích dẫn - Blockquote

Là 1 định dạng dùng để làm nổi bật 1 đoạn văn bản được trích dẫn từ 1 nguồn khác

Để tạo 1 blockquote, thêm dấu > vào trước mỗi dòng trích dẫn

Cú pháp:
```
>Trích dẫn
```
Kết quả:
>Trích dẫn
>Trích dẫn 2

2,Danh sách có thứ tự - Ordered List

Để tạo danh sách ol li, chỉ cần thêm các số, dấu chấm trước nội dung( dùng tab để phân cấp).

Cú pháp:
```
1. Mục thứ nhất
2. Mục thứ hai
```
Kết quả:

1. Mục thứ nhất
2. Mục thứ hai

3,Danh sách không có thứ tự - Unordered List

Để tạo danh sách ul li, chỉ cần thêm dấu * hoặc - hoặc + trước nội dung. (khác với in đậm và nghiêng thì ta chỉ sử dụng 1 dấu ở trước thay vì sử dụng cả trước lẫn sau).

Cú pháp:
```
- Mục thứ nhất
- Mục thứ hai
```
Kết quả:

* Mục thứ nhất
* Mục thứ hai

4,Khối lệnh - Block Code

Dùng để viết 1 đoạn code, dùng 3 dấu ` ở trước và sau đoạn đó.(có thể thêm format ngôn ngữ)

Cú pháp:

<img width="160" height="86" alt="image" src="https://github.com/user-attachments/assets/b6bb95a2-67e2-4dae-a2e7-15c443927c36" />


Kết quả:
```javascript
var x = 1;
console.log(x);
```
5,Bảng - Table

Để tạo bảng table, ta chỉ cần ngăn cách bởi dấu | và cách đầu bảng với thân bảng bằng :--
(số dấu - tuỳ ý)

Cú pháp:
```
| Cột 1 | Cột 2 | Cột 3 |
| :-- | :-- | :-- |
| A | B | C |
| B | E | F |
```
Kết quả:
``
Số dấu - tuỳ ý nhằm chỉnh hàng đẹp với cân hơn
``
| Cột 1 | Cột 2 | Cột 3 |
| :----- | :----| :--- |
| A | B | C |
| D | E | F | 

III, Đặc biệt:

1, Đường kẻ ngang - Horizonal rules

Để tạo đường kẻ ngang, ta sử dụng 3 dấu * hoặc - hoặc _ trên 1 dòng.

Cú pháp:
```
***
---
___
```

***
---
___

2, Liên kết - Link

Để chèn trực tiếp, chỉ cần paste thẳng vào.

Để dẫn liên kết, ta xài ``[text](link)``.

Cú pháp:
```
Trực tiếp: https://github.com/Nhat-Huy-05
Gián tiếp: [Github](https://github.com/Nhat-Huy-05)
```
Kết quả:

Trực tiếp: https://github.com/Nhat-Huy-05

Gián tiếp: [Github](https://github.com/Nhat-Huy-05)

3, Hình ảnh - Image

Để chèn trực tiếp, có thể paste thẳng.

Để dẫn ảnh, ta dùng ``![text](link ảnh)``.

Hoặc ``![](link ảnh)`` nếu không cần chữ.

Cú pháp:
```
Trực tiếp: https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-anh-trang-den-meo-den-heinz-inkythuatso-02-16-04-57.jpg
Gián tiếp: ![](https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-anh-trang-den-meo-den-heinz-inkythuatso-02-16-04-57.jpg)
```
Kết quả:

![GitHub](https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-anh-trang-den-meo-den-heinz-inkythuatso-02-16-04-57.jpg).

4,Biểu tượng cảm xúc - Con

Tuỳ vào nền tảng có icon đó không, ký tự : và tên icon

Cú pháp:

<img width="135" height="103" alt="image" src="https://github.com/user-attachments/assets/f9b262f3-e309-4b92-8325-833bbc28e73a" />

Kết quả:

🐰

5,Checkbox

Để chèn checkbox(dùng cho to do list), ta đánh dấu như list và thêm 1 cặp ngoặc vuông.

Cú pháp:
```
- [ ] Checkbox
- [x] Checked
```
Kết quả:

- [ ] Checkbox
- [x] Checked
