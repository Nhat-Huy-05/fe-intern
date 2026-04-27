export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 p-10 bg-gray-50 min-h-screen">
      
      {/* Nút bấm (Button) với Hover, Active và Transition */}
      <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-95 active:bg-blue-700">
        Gửi Tin Nhắn
      </button>

      {/* Ô nhập liệu (Input) với Focus và Transition */}
      <input
        type="text"
        placeholder="Nhập email của bạn..."
        className="w-72 border-2 border-gray-300 rounded-md px-4 py-2 outline-none transition-colors duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
      
      {/* Thẻ (Card) phóng to nhẹ khi di chuột qua */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200">
        <h3 className="text-xl font-bold text-gray-800">Dự án 1</h3>
        <p className="text-gray-500 mt-2">Di chuột vào tôi để xem hiệu ứng nổi lên!</p>
      </div>

    </div>
  )
}