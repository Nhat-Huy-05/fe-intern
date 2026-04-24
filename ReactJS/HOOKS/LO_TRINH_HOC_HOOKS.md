# LỘ TRÌNH HỌC REACT HOOKS

> Khóa học React Hooks từ cơ bản đến nâng cao, tập trung vào **useState** và **useEffect** - 2 hooks quan trọng và được sử dụng nhiều nhất trong React.

---

## 📚 MỤC LỤC

### **PHẦN 1: NHẬP MÔN HOOKS** (Cơ bản)
1. [Hooks là gì?](#1-hooks-là-gì)
2. [Tại sao cần Hooks?](#2-tại-sao-cần-hooks)
3. [Quy tắc sử dụng Hooks](#3-quy-tắc-sử-dụng-hooks)

### **PHẦN 2: useState - QUẢN LÝ STATE** (⭐ Trọng tâm)
4. [useState cơ bản](#4-usestate-cơ-bản)
5. [useState với các kiểu dữ liệu](#5-usestate-với-các-kiểu-dữ-liệu)
6. [useState với Object và Array](#6-usestate-với-object-và-array)
7. [Lazy Initial State](#7-lazy-initial-state)
8. [Bài tập thực hành useState](#8-bài-tập-thực-hành-usestate)

### **PHẦN 3: useEffect - XỬ LÝ SIDE EFFECTS** (⭐ Trọng tâm)
9. [useEffect cơ bản](#9-useeffect-cơ-bản)
10. [useEffect với Dependencies](#10-useeffect-với-dependencies)
11. [Cleanup Function](#11-cleanup-function)
12. [useEffect với API Call](#12-useeffect-với-api-call)
13. [useEffect với DOM Events](#13-useeffect-với-dom-events)
14. [Bài tập thực hành useEffect](#14-bài-tập-thực-hành-useeffect)

### **PHẦN 4: KẾT HỢP useState & useEffect**
15. [Todo List App](#15-todo-list-app)
16. [Form Validation](#16-form-validation)
17. [Search & Filter](#17-search--filter)
18. [Pagination](#18-pagination)

### **PHẦN 5: CÁC HOOKS KHÁC** (Nâng cao)
19. [useContext - Quản lý Global State](#19-usecontext)
20. [useReducer - State phức tạp](#20-usereducer)
21. [useRef - Tham chiếu DOM](#21-useref)
22. [useMemo - Tối ưu performance](#22-usememo)
23. [useCallback - Tối ưu functions](#23-usecallback)

### **PHẦN 6: CUSTOM HOOKS**
24. [Tạo Custom Hooks](#24-tạo-custom-hooks)
25. [Custom Hooks thực tế](#25-custom-hooks-thực-tế)

### **PHẦN 7: DỰ ÁN THỰC HÀNH**
26. [Dự án tổng hợp](#26-dự-án-tổng-hợp)

---

## 📖 CHI TIẾT LỘ TRÌNH

### PHẦN 1: NHẬP MÔN HOOKS

#### 1. Hooks là gì?
- Khái niệm Hooks trong React
- Sự khác biệt giữa Class Component và Function Component
- Lợi ích của Hooks

#### 2. Tại sao cần Hooks?
- Vấn đề của Class Component
- Hooks giải quyết vấn đề như thế nào
- Khi nào nên dùng Hooks

#### 3. Quy tắc sử dụng Hooks
- Chỉ gọi Hooks ở top level
- Chỉ gọi Hooks trong React Function
- Sử dụng ESLint plugin

---

### PHẦN 2: useState - QUẢN LÝ STATE ⭐

#### 4. useState cơ bản
**Mục tiêu:** Hiểu cách khai báo và sử dụng state trong functional component

**Nội dung:**
- Cú pháp useState
- Khởi tạo state
- Cập nhật state
- Re-render khi state thay đổi

**Ví dụ:**
```jsx
const [count, setCount] = useState(0);
```

#### 5. useState với các kiểu dữ liệu
**Mục tiêu:** Làm việc với nhiều kiểu dữ liệu khác nhau

**Nội dung:**
- String, Number, Boolean
- Array
- Object
- Null/Undefined

#### 6. useState với Object và Array
**Mục tiêu:** Cập nhật state phức tạp đúng cách

**Nội dung:**
- Immutability trong React
- Spread operator
- Cập nhật nested object
- Thêm/xóa/sửa phần tử trong array

#### 7. Lazy Initial State
**Mục tiêu:** Tối ưu khởi tạo state

**Nội dung:**
- Khi nào cần lazy initialization
- Cách sử dụng function trong useState
- Performance benefits

#### 8. Bài tập thực hành useState
- Counter App
- Toggle Show/Hide
- Input Form
- Shopping Cart

---

### PHẦN 3: useEffect - XỬ LÝ SIDE EFFECTS ⭐

#### 9. useEffect cơ bản
**Mục tiêu:** Hiểu khái niệm side effects và cách xử lý

**Nội dung:**
- Side effects là gì?
- Cú pháp useEffect
- useEffect chạy khi nào?
- So sánh với lifecycle methods

**Ví dụ:**
```jsx
useEffect(() => {
  // Side effect code
});
```

#### 10. useEffect với Dependencies
**Mục tiêu:** Kiểm soát khi nào useEffect chạy

**Nội dung:**
- Dependency array là gì?
- useEffect không có dependencies
- useEffect với empty array []
- useEffect với dependencies cụ thể
- Lỗi thường gặp với dependencies

#### 11. Cleanup Function
**Mục tiêu:** Dọn dẹp side effects

**Nội dung:**
- Cleanup function là gì?
- Khi nào cần cleanup?
- Cách viết cleanup function
- Ví dụ: clearInterval, removeEventListener

#### 12. useEffect với API Call
**Mục tiêu:** Fetch data từ API

**Nội dung:**
- Fetch API trong useEffect
- Xử lý loading state
- Xử lý error
- Async/await trong useEffect
- Abort controller

#### 13. useEffect với DOM Events
**Mục tiêu:** Làm việc với DOM events

**Nội dung:**
- addEventListener trong useEffect
- Scroll event
- Resize event
- Keyboard events
- Cleanup events

#### 14. Bài tập thực hành useEffect
- Document Title Updater
- Fetch User List
- Real-time Clock
- Window Resize Detector
- Scroll to Top Button

---

### PHẦN 4: KẾT HỢP useState & useEffect

#### 15. Todo List App
**Mục tiêu:** Xây dựng ứng dụng Todo hoàn chỉnh

**Tính năng:**
- Thêm/xóa/sửa todo
- Mark as completed
- Filter todos
- LocalStorage persistence

#### 16. Form Validation
**Mục tiêu:** Validate form với useState và useEffect

**Tính năng:**
- Real-time validation
- Error messages
- Submit handling
- Reset form

#### 17. Search & Filter
**Mục tiêu:** Tìm kiếm và lọc dữ liệu

**Tính năng:**
- Search input
- Debounce search
- Filter by category
- Sort results

#### 18. Pagination
**Mục tiêu:** Phân trang dữ liệu

**Tính năng:**
- Fetch paginated data
- Page navigation
- Items per page
- Loading states

---

### PHẦN 5: CÁC HOOKS KHÁC

#### 19. useContext
- Context API là gì?
- Tạo và sử dụng Context
- useContext hook
- Ví dụ: Theme switcher

#### 20. useReducer
- Reducer pattern
- useReducer vs useState
- Khi nào dùng useReducer?
- Ví dụ: Complex form state

#### 21. useRef
- useRef là gì?
- Truy cập DOM elements
- Lưu giá trị không trigger re-render
- Ví dụ: Focus input, Previous value

#### 22. useMemo
- Memoization là gì?
- Khi nào cần useMemo?
- Cú pháp và cách dùng
- Performance optimization

#### 23. useCallback
- useCallback vs useMemo
- Memoize functions
- Tránh re-render không cần thiết
- Ví dụ thực tế

---

### PHẦN 6: CUSTOM HOOKS

#### 24. Tạo Custom Hooks
- Quy tắc đặt tên (use...)
- Cách tạo custom hook
- Tái sử dụng logic
- Best practices

#### 25. Custom Hooks thực tế
- useFetch - Fetch data
- useLocalStorage - LocalStorage
- useDebounce - Debounce value
- useWindowSize - Window dimensions
- useToggle - Toggle boolean

---

### PHẦN 7: DỰ ÁN THỰC HÀNH

#### 26. Dự án tổng hợp
**Dự án 1: Weather App**
- Fetch weather API
- Search by city
- Display weather info
- Loading & error states

**Dự án 2: Movie Search App**
- Search movies
- Display results
- Pagination
- Movie details modal

**Dự án 3: E-commerce Cart**
- Product list
- Add to cart
- Update quantity
- Calculate total
- LocalStorage

---

## 🎯 LỘ TRÌNH HỌC ĐỀ XUẤT

### **Tuần 1-2: Nền tảng**
- Phần 1: Nhập môn Hooks
- Phần 2: useState (Bài 4-8)

### **Tuần 3-4: Trọng tâm**
- Phần 3: useEffect (Bài 9-14)
- Làm nhiều bài tập thực hành

### **Tuần 5: Kết hợp**
- Phần 4: Kết hợp useState & useEffect (Bài 15-18)

### **Tuần 6: Mở rộng**
- Phần 5: Các Hooks khác (Bài 19-23)

### **Tuần 7: Nâng cao**
- Phần 6: Custom Hooks (Bài 24-25)

### **Tuần 8: Thực chiến**
- Phần 7: Dự án thực hành (Bài 26)

---

## 📝 GHI CHÚ QUAN TRỌNG

### ⭐ **useState - Điều cần nhớ:**
1. State là immutable - không được thay đổi trực tiếp
2. Sử dụng spread operator để cập nhật object/array
3. setState là asynchronous
4. Có thể dùng function trong setState để đảm bảo giá trị mới nhất

### ⭐ **useEffect - Điều cần nhớ:**
1. Luôn cẩn thận với dependency array
2. Nhớ cleanup để tránh memory leak
3. Không được gọi async function trực tiếp trong useEffect
4. useEffect chạy sau khi render

### 🚫 **Lỗi thường gặp:**
1. Quên dependency array → infinite loop
2. Không cleanup event listeners
3. Mutate state trực tiếp
4. Gọi hooks trong điều kiện/vòng lặp

---

## 🔗 TÀI LIỆU THAM KHẢO

- React Official Docs: https://react.dev/reference/react
- F8 ReactJS Course: https://f8.edu.vn/courses/reactjs
- React Hooks Cheatsheet

---

*Lưu ý: Hãy thực hành nhiều và làm bài tập sau mỗi phần để nắm vững kiến thức.*
