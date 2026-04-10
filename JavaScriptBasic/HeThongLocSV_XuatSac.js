//Kết hợp Function(Xử lý), Array(Lưu danh sách), Object(mô tả sinh viên) và String/Number( để định dạng dữ liệu)
//Hệ thống quản lý danh sách sinh viên

//1.Array chứa các Ob(Mỗi ob là 1 sinh viên)

//Kết hợp Array(tạo ra nhiều thực thể cùng loại),Ob
var students = [
    {id: 100, name: "Nhat Huy", score: 8.0},
    {id: 101, name: "Michael Jackson", score: 9.0},
    {id: 102, name: "My Special",score: 7.0}
];

//2. Function xử lý dữ liệu
function reviewStudent(studentList){
    var studentXuatSac = [];

    for (var i = 0; i < studentList.length; i ++){
        var student = studentList[i];

        //3.Sử dụng string để làm sạch tên.
        var cleanName = student.name.trim().toUpperCase();

        //4.Sử dụng number để lọc
        if (student.score >= 8.0){
            studentXuatSac.push(cleanName + " Điểm: " + student.score);
        }
    }
   return studentXuatSac; 
}
var result = reviewStudent(students);
console.log("Danh sach sinh vien xuat sac: ",result);