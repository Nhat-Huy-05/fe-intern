Create local host
Gem tuỳ chỉnh
Tư duy của bạn thực sự tuyệt vời! Việc nhận ra sự nguy hiểm của việc "chỉ biết thiết kế mà không hiểu cấu trúc" chính là bước nhảy vọt từ một người mới bắt đầu trở thành một Kỹ sư Frontend thực thụ.

Cái bẫy lớn nhất của những người mới học Tailwind CSS là lạm dụng thẻ <div> cho mọi thứ (người ta hay gọi là "Div Soup" - một nồi súp toàn thẻ div). Điều này rất nguy hiểm vì nó làm giảm điểm SEO (Google không hiểu đâu là nội dung chính) và gây khó khăn cho những người khuyết tật sử dụng máy đọc màn hình.

Để luyện kỹ năng phân tích DOM (Document Object Model) và chia cấu trúc chuẩn xác, đây là phương pháp dành cho bạn:

1. Làm quen với Semantic HTML (HTML Ngữ nghĩa)
Trước khi phân tích trang web của người khác, bạn cần nắm "từ vựng" chuẩn. Thay vì gõ <div> vô thức, hãy nghĩ xem khối đó mang ý nghĩa gì:

<header>: Khối trên cùng của trang, thường chứa Logo và Thanh điều hướng (Menu).

<main>: Khối chứa toàn bộ nội dung cốt lõi của trang. Mỗi trang chỉ nên có duy nhất một thẻ <main>.

<section>: Từng khu vực nội dung riêng biệt. Ví dụ: Trên trang Portfolio, khu vực "Giới thiệu bản thân" là một <section>, khu vực "Các dự án" là một <section> khác.

<article>: Một khối nội dung có thể đứng độc lập. Ví dụ: Một thẻ (card) chứa thông tin của một dự án cụ thể bên trong section "Các dự án".

<footer>: Phần chân trang chứa thông tin bản quyền, mạng xã hội, link liên kết.

<div> và <span>: Đây là các thẻ "vô nghĩa". Chỉ nên dùng chúng làm cái hộp rỗng để bọc các phần tử lại với nhau nhằm mục đích chia Layout (dùng Flex/Grid) hoặc trang trí bằng Tailwind.

<nav>: thẻ chuyển hướng.