# SPA (Single Page Application) - Ứng dụng trang đơn

- SPA là kiến trúc mà trình duyệt chỉ tải một trang HTML duy nhất từ máy chủ trong lần truy cập đầu tiên, kèm theo một gói mã JavaScript lớn (bundle).

- Cách hoạt động trong React: Khi bạn thao tác và chuyển trang (ví dụ: click từ "Trang chủ" sang "Giới thiệu"), ứng dụng không hề tải lại (reload) trình duyệt. Thay vào đó, React (thường kết hợp với thư viện react-router-dom) sẽ dùng JavaScript để "gỡ bỏ" các component cũ và "lắp ráp" các component mới lên giao diện ngay lập tức.

- Ưu điểm: Trải nghiệm người dùng cực kỳ mượt mà, không bị chớp hay trắng màn hình khi chuyển trang. Cảm giác sử dụng giống như một ứng dụng cài đặt trên điện thoại (Native App).

- Nhược điểm: Tốc độ tải trang lần đầu tiên (Initial Load) có thể chậm do trình duyệt phải tải nguyên một file JavaScript lớn. Khả năng SEO (Tối ưu hóa công cụ tìm kiếm) mặc định rất kém vì ban đầu trang HTML trả về gần như trống rỗng, khiến các bot của Google khó đọc được nội dung.
# MPA(Multi-Page Application) - Ứng dụng nhiều trang.

- MPA là kiến trúc web truyền thống. Trong kiến trúc này, mỗi khi người dùng nhấp vào một đường dẫn mới, trình duyệt sẽ gửi yêu cầu lên server và tải về một trang HTML mới hoàn toàn.

- Cách hoạt động với React: Việc xây dựng MPA bằng React thuần khá phức tạp. Do đó, các lập trình viên thường sử dụng các framework dựa trên React như Next.js hoặc Remix. Các framework này áp dụng kỹ thuật Server-Side Rendering (SSR) hoặc Static Site Generation (SSG) để tạo sẵn mã HTML trên server và gửi thẳng về cho trình duyệt.

- Ưu điểm: Khả năng SEO cực kỳ xuất sắc vì mã HTML đã có đầy đủ nội dung ngay từ đầu. Tốc độ tải trang hiển thị lần đầu tiên rất nhanh.

- Nhược điểm: Việc chuyển qua lại giữa các trang sẽ tốn thời gian hơn SPA một chút vì trình duyệt phải tải lại trang. Kiến trúc này cũng đòi hỏi cấu hình máy chủ (server) phức tạp hơn để xử lý các yêu cầu.

| Tiêu chí | SPA (Single Page Application) | MPA (Multi-Page Application) |
| :--- | :--- | :--- |
| **Cơ chế hoạt động** | Tải duy nhất 1 trang HTML ban đầu. Dữ liệu sau đó được cập nhật động bằng JavaScript mà không cần tải lại trang. | Tải lại toàn bộ trang HTML mới từ máy chủ (server) mỗi khi người dùng chuyển hướng. |
| **Tốc độ tải lần đầu** | Chậm hơn (Trình duyệt phải tải toàn bộ gói JavaScript - bundle). | Nhanh hơn (Trình duyệt nhận và hiển thị ngay HTML đã được xử lý từ server). |
| **Tốc độ chuyển trang** | Rất nhanh và mượt mà, không có hiện tượng chớp màn hình. | Chậm hơn, phải đợi tải trang lại từ đầu nên sẽ có khoảng thời gian chớp/trắng màn hình. |
| **Tối ưu tìm kiếm (SEO)**| Kém hơn (Mặc định bot Google khó đọc nội dung sinh ra từ JS, cần cấu hình thêm SSR/SSG). | Rất tốt (Nội dung HTML đã có sẵn và đầy đủ ngay từ đầu để bot dễ dàng quét). |
| **Trải nghiệm (UX)** | Tốt, cảm giác sử dụng mượt mà như một ứng dụng cài đặt trên máy. | Cảm giác lướt web truyền thống, bị ngắt quãng khi chuyển trang. |
| **Tải trọng máy chủ** | Thấp hơn (Máy chủ chủ yếu chỉ cung cấp dữ liệu API dạng JSON sau lần tải đầu). | Cao hơn (Máy chủ phải liên tục xử lý và trả về các file HTML mới). |
| **Cấu trúc dự án** | Front-end và Back-end được tách biệt hoàn toàn. | Front-end và Back-end thường gắn kết chặt chẽ hơn. |
| **Ứng dụng phù hợp** | Dashboard quản trị, Mạng xã hội, Ứng dụng SaaS (Gmail, Facebook, Spotify). | Website tin tức, Blog, Thương mại điện tử, Diễn đàn. |