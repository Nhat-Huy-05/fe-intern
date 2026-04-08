//Bai1: Kiểm tra xem mật khẩu pass có đủ 8 ký tự hay không(trả về T/F)
var pass = "hoctapon";
var isGiaTri = pass.length >= 8;
console.log(isGiaTri); //True
//Node: length là thuộc tính, k phải hàm, k có dấu ().

//Bai2: Tìm vị trí bắt đầu của chữ "son" trong chuỗi dưới.
var word = "you are my son";
console.log(word.indexOf("son")); //11
//Node: trả -1 nếu k tìm thấy.Phân biệt chữ hoa/thường

//Bai3(cắt chuỗi) Lấy chữ tube ở cuối chuỗi.
var string = "học tại youtube";
console.log(string.slice(-4))
//Node: slice(start, end), có thể dùng số âm để cắt từ cuối lên thay vì cắt từ đầu.

//Bai4(replace) Đổi chữ "PHP" thành "JS".
var string = "Tôi học PHP";
console.log(string.replace("PHP", "JS"));
//Node: replace() chỉ thay thế chữ đầu tiên nó tìm thấy.

//Bai5: chuyển thành chữ in hoa.
var string = "alo-123, hello";
console.log(string.toUpperCase());

//Bai6: tách các từ trong câu thành 1 mảng.
var string = "Welcome to my Project";
console.log(string.split(" "));
