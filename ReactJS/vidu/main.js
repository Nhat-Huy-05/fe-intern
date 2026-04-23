// 1. Dữ liệu đầu vào (Mảng các object)
const students = [
  { id: 1, name: "Nguyễn Văn A" },
  { id: 2, name: "Trần Thị B" },
  { id: 3, name: "Lê Văn C" }
];

// 2. Dùng map() để biến mảng dữ liệu thành mảng JSX
const element = (
  <div>
    <h3>Danh sách học viên:</h3>
    <ul>
      {students.map((student) => (
        // Bắt buộc phải có prop 'key' ở thẻ bao ngoài cùng của mỗi phần tử lặp
        <li key={student.id}>
          {student.name}
        </li>
      ))}
    </ul>
  </div>
);