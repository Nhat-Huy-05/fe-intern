# 🔶 LỘ TRÌNH HỌC - JSX, COMPONENTS & PROPS

## 📋 Tổng quan
Phần này bao gồm 7 bài học (Bài 12-18) về JSX, Components và Props trong React - những khái niệm nền tảng quan trọng nhất khi bắt đầu học React.

**Tổng thời lượng:** ~2 giờ 11 phút

---

## 📚 Bài 12: JSX là gì? Tại sao cần JSX?
**⏱ Thời lượng:** 15 phút 58 giây

### Mục tiêu học
- Hiểu JSX là gì và tại sao React sử dụng JSX
- Phân biệt JSX với JavaScript thuần
- Nắm được cú pháp cơ bản của JSX
- Hiểu cách JSX được biên dịch thành JavaScript

### Nội dung chính
1. Giới thiệu JSX (JavaScript XML)
2. Lợi ích của JSX trong React
3. Cú pháp JSX cơ bản
4. Nhúng biểu thức JavaScript trong JSX
5. JSX vs createElement()

### Thực hành
- Viết các ví dụ JSX đơn giản
- Chuyển đổi giữa JSX và createElement()

---

## 📚 Bài 13: JSX render Arrays - JSX FAQ
**⏱ Thời lượng:** 13 phút 35 giây

### Mục tiêu học
- Render danh sách (arrays) trong JSX
- Hiểu về key prop và tầm quan trọng
- Xử lý các trường hợp đặc biệt trong JSX
- Giải đáp các câu hỏi thường gặp về JSX

### Nội dung chính
1. Render mảng trong JSX
2. Sử dụng map() để render danh sách
3. Key prop và tại sao cần key
4. Các quy tắc đặt tên trong JSX
5. JSX FAQ - Câu hỏi thường gặp

### Thực hành
- Render danh sách sản phẩm
- Xử lý danh sách động với map()

---

## 📚 Bài 14: React element types - React Components
**⏱ Thời lượng:** 14 phút 12 giây

### Mục tiêu học
- Hiểu về React Elements
- Phân biệt Element và Component
- Tìm hiểu các loại Component trong React
- Cách tạo và sử dụng Component

### Nội dung chính
1. React Elements là gì?
2. Phân biệt Element vs Component
3. Function Components
4. Class Components (giới thiệu)
5. Quy tắc đặt tên Component

### Thực hành
- Tạo Function Component đầu tiên
- Sử dụng Component trong ứng dụng

---

## 📚 Bài 15: Props là gì? Dùng props khi nào?
**⏱ Thời lượng:** 25 phút 41 giây

### Mục tiêu học
- Hiểu khái niệm Props trong React
- Truyền dữ liệu giữa các Component
- Sử dụng Props một cách hiệu quả
- Props validation và default props

### Nội dung chính
1. Props là gì?
2. Cách truyền props từ parent sang child
3. Đọc và sử dụng props trong Component
4. Props là read-only
5. Default Props
6. Props destructuring

### Thực hành
- Tạo Component nhận props
- Truyền nhiều loại dữ liệu qua props
- Sử dụng default props

---

## 📚 Bài 16: DOM events? Làm việc với JSX #1
**⏱ Thời lượng:** 13 phút 57 giây

### Mục tiêu học
- Xử lý sự kiện trong React
- Phân biệt event handling React vs HTML
- Các loại event phổ biến
- Event handler best practices

### Nội dung chính
1. Event handling trong React
2. Cú pháp xử lý sự kiện
3. Các event phổ biến (onClick, onChange, onSubmit...)
4. Event object trong React
5. Prevent default và stop propagation

### Thực hành
- Xử lý click event
- Tạo form với event handling
- Xử lý input change

---

## 📚 Bài 17: Tạo Components linh hoạt - Làm việc với JSX #2
**⏱ Thời lượng:** 26 phút 07 giây

### Mục tiêu học
- Tạo Component có thể tái sử dụng
- Component composition
- Conditional rendering
- Tạo Component linh hoạt với props

### Nội dung chính
1. Component composition pattern
2. Conditional rendering (if/else, ternary, &&)
3. Inline styles trong JSX
4. CSS classes động
5. Tạo Component linh hoạt và tái sử dụng

### Thực hành
- Tạo Button component linh hoạt
- Conditional rendering với nhiều điều kiện
- Component composition thực tế

---

## 📚 Bài 18: Children props & Render props - Làm việc với JSX #3
**⏱ Thời lượng:** 22 phút 04 giây

### Mục tiêu học
- Hiểu và sử dụng children props
- Render props pattern
- Component composition nâng cao
- Các pattern thiết kế Component

### Nội dung chính
1. Children props là gì?
2. Sử dụng props.children
3. Render props pattern
4. Component composition nâng cao
5. Wrapper components

### Thực hành
- Tạo Card component với children
- Implement render props pattern
- Tạo Layout component

---

## 🎯 Dự án thực hành tổng hợp

Sau khi hoàn thành 7 bài học, bạn nên thực hành với các dự án sau:

### Dự án 1: Product Card Component
- Tạo component hiển thị thông tin sản phẩm
- Sử dụng props để truyền dữ liệu
- Xử lý sự kiện click "Add to Cart"
- Conditional rendering cho trạng thái sản phẩm

### Dự án 2: Todo List với Components
- Tách ứng dụng thành nhiều components
- Truyền props giữa các components
- Xử lý events (add, delete, toggle)
- Render danh sách với map()

### Dự án 3: User Profile Card
- Tạo component profile linh hoạt
- Sử dụng children props
- Conditional rendering cho các trường thông tin
- Styling động với props

---

## 📝 Checklist học tập

### Bài 12: JSX cơ bản
- [ ] Hiểu JSX là gì
- [ ] Viết được JSX cơ bản
- [ ] Nhúng JavaScript vào JSX
- [ ] Hiểu cách JSX compile

### Bài 13: Render Arrays
- [ ] Render mảng với map()
- [ ] Sử dụng key prop đúng cách
- [ ] Xử lý danh sách động

### Bài 14: Components
- [ ] Tạo Function Component
- [ ] Phân biệt Element vs Component
- [ ] Đặt tên Component đúng quy tắc

### Bài 15: Props
- [ ] Truyền props giữa components
- [ ] Đọc và sử dụng props
- [ ] Sử dụng default props
- [ ] Props destructuring

### Bài 16: Events
- [ ] Xử lý onClick, onChange
- [ ] Hiểu event object
- [ ] Prevent default behavior

### Bài 17: Components linh hoạt
- [ ] Conditional rendering
- [ ] Component composition
- [ ] Tạo component tái sử dụng

### Bài 18: Children & Render props
- [ ] Sử dụng children props
- [ ] Implement render props
- [ ] Tạo wrapper components

---

## 💡 Tips học tập

1. **Thực hành ngay sau mỗi bài học** - Đừng chỉ xem video, hãy code theo
2. **Tạo nhiều component khác nhau** - Càng thực hành nhiều càng hiểu sâu
3. **Đọc React docs** - Tài liệu chính thức rất chi tiết và dễ hiểu
4. **Debug bằng React DevTools** - Cài extension để xem component tree
5. **Refactor code** - Tách component nhỏ, tái sử dụng props

---

## 🔗 Tài liệu tham khảo

- [React Official Docs - JSX](https://react.dev/learn/writing-markup-with-jsx)
- [React Official Docs - Components and Props](https://react.dev/learn/passing-props-to-a-component)
- [React Official Docs - Responding to Events](https://react.dev/learn/responding-to-events)

---

## ✅ Sau khi hoàn thành phần này

Bạn sẽ nắm vững:
- ✅ Cú pháp JSX và cách sử dụng
- ✅ Tạo và sử dụng Components
- ✅ Truyền dữ liệu qua Props
- ✅ Xử lý Events trong React
- ✅ Tạo Components linh hoạt và tái sử dụng
- ✅ Các pattern thiết kế Component cơ bản

**Bước tiếp theo:** Chuyển sang phần State & Lifecycle để học cách quản lý trạng thái trong React!

---

*Chúc bạn học tốt! 🚀*
