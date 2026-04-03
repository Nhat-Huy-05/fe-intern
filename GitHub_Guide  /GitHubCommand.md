# 📘 Git Basic Cheat Sheet 

Các câu lệnh GitHub cơ bản:

---

## 1. Khởi tạo và Cấu hình (Setup)
Thiết lập danh tính và khởi tạo kho lưu trữ.

* `git config --global user.name "Nguyen Van A"`: Cấu hình tên người dùng.
* `git config --global user.email "email@example.com"`: Cấu hình email.
* `git init`: Khởi tạo một Git repository mới tại thư mục hiện tại.
* `git clone <url>`: Sao chép một repository từ GitHub về máy local.

---

## 2. Luồng làm việc hàng ngày (Daily Workflow)
Các câu lệnh sử dụng thường xuyên nhất để lưu trữ tiến độ học tập.

* `git status`: Kiểm tra trạng thái các file (file nào đã sửa, file nào chưa lưu).
* `git add <tên_file>`: Thêm một file cụ thể vào vùng chờ (Staging Area).
* `git add .`: Thêm **tất cả** các thay đổi vào vùng chờ.
* `git commit -m "Lời nhắn"`: Lưu các thay đổi vào lịch sử kèm theo mô tả nội dung.
* `git log`: Xem lại lịch sử các lần commit đã thực hiện.

---

## 3. Đồng bộ với GitHub (Remote)
Kết nối máy tính cá nhân với repository trên GitHub.

* `git remote add origin <url>`: Kết nối repository local với repository trên GitHub (chỉ làm 1 lần đầu).
* `git push origin main`: Đẩy toàn bộ commit từ máy local lên nhánh `main` trên GitHub.
* `git pull origin main`: Tải những thay đổi mới nhất từ GitHub về máy local.

---

## 4. Quản lý Nhánh (Branching)
Sử dụng khi muốn thử nghiệm code mới mà không làm hỏng code cũ.

* `git branch`: Xem danh sách các nhánh hiện có.
* `git checkout -b <tên_nhánh>`: Tạo một nhánh mới và chuyển sang nhánh đó.
* `git checkout <tên_nhánh>`: Di chuyển qua lại giữa các nhánh.
* `git merge <tên_nhánh>`: Gộp code từ nhánh phụ vào nhánh hiện tại (thường là gộp vào `main`).
* `git branch -d <tên_nhánh>`: Xóa một nhánh sau khi đã gộp xong.

---

## 5. Hoàn tác thay đổi (Undo)
Sử dụng khi lỡ tay làm sai hoặc muốn quay lại trạng thái cũ.

* `git checkout -- <tên_file>`: Hủy bỏ các thay đổi chưa được `add` trên một file.
* `git reset --hard HEAD`: Hủy bỏ toàn bộ thay đổi chưa commit, đưa code về trạng thái của lần commit gần nhất.

---

> **Lưu ý:** Hãy sử dụng tiền tố trong commit :
> - `feat:` (Tính năng mới - ví dụ: làm bài tập mới)
> - `docs:` (Cập nhật tài liệu, file .md)
> - `fix:` (Sửa lỗi code)
> - `chore:` (Thay đổi cấu trúc thư mục, cấu hình)
