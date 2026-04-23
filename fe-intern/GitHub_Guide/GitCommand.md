# Danh Sách Các Câu Lệnh Git Cơ Bản

## 1. Khởi tạo và Cấu hình
* `git init`: Khởi tạo một Git repository mới.
* `git clone <url>`: Sao chép một kho lưu trữ từ xa về máy.
* `git config --global user.name "Tên của bạn"`: Cấu hình tên người dùng.
* `git config --global user.email "email@example.com"`: Cấu hình email.

## 2. Làm việc với thay đổi
* `git status`: Kiểm tra trạng thái các file trong thư mục.
* `git add <tên_file>`: Thêm một file cụ thể vào vùng chờ (Staging Area).
* `git add .`: Thêm tất cả các thay đổi vào vùng chờ.
* `git commit -m "Ghi chú thay đổi"`: Lưu lại các thay đổi vào lịch sử kèm thông báo.

## 3. Đồng bộ hóa (Remote)  
* `git remote add origin <url>`: Kết nối với kho lưu trữ trực tuyến (GitHub/GitLab).
* `git push -u origin main`: Đẩy code lên nhánh chính và thiết lập theo dõi.
* `git pull`: Lấy mã nguồn mới nhất từ trên mạng về máy.
* `git fetch`: Tải các thay đổi từ remote nhưng chưa gộp vào code hiện tại.

## 4. Quản lý Nhánh (Branch)
* `git branch`: Xem danh sách các nhánh hiện có.

`branch `:

-Làm việc chung: mỗi thành viên có thể làm việc tại 1 nhánh riêng, sau khi xong sẽ kiểm tra kỹ rồi mới nhập vào nhánh chính.

-thử trên nhánh mới và nếu sai thì chỉ việc xoá nhánh đó đi.

-Sửa lỗi ở 1 nhánh, vừa có thể phát triển ở nhánh khác mà code không bị lẫn lộn.

* `git checkout -b <tên_nhánh>`: Tạo nhánh mới và chuyển sang nhánh đó.
* `git checkout <tên_nhánh>`: Chuyển sang một nhánh đã tồn tại.
* `git merge <tên_nhánh>`: Hợp nhất nhánh khác vào nhánh hiện tại.

## 5. Kiểm tra lịch sử
* `git log`: Xem lịch sử tất cả các lần commit.
* `git log --oneline`: Xem lịch sử rút gọn trên một dòng.

**Lưu ý khi dùng Visual Studio Code**:

Câu lệnh ``Ctrl + Shift + V``: Dùng để hiển thị giao diện trong VS Code.

Câu lệnh ``ni``: dùng để tạo 1 file hoặc 1 folder mới.