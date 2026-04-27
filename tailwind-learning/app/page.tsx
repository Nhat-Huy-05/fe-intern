export default function Home() {
  return (
    <div className="card-wrapper min-h-screen bg-gray-50 p-10 flex flex-col items-center">
      
      {/* 🎯 Project Card Hoàn Chỉnh */}
      <div className="bg-white border border-gray-200 rounded-[2rem] shadow-2xl p-5 max-w-sm">
        
        {/* 1. Ô hình chữ nhật dùng gradient (Giả thumbnail) */}
        <div className="w-full h-40 bg-gradient-to-tr from-blue-500 to-emerald-400 rounded-[1.5rem] mb-5"></div>

        {/* 2. Nội dung text */}
        <div className="space-y-2 px-1">
          {/* Tên project → chữ đậm, màu tối */}
          <h2 className="text-xl font-bold text-gray-900">
            Dự án Modern UI
          </h2>
          
          {/* Mô tả ngắn → chữ nhỏ, màu xám */}
          <p className="text-sm text-gray-500 leading-relaxed">
            Sử dụng Tailwind CSS và Next.js để xây dựng giao diện người dùng tối giản nhưng không kém phần tinh tế.
          </p>
        </div>
        
      </div>

      {/* --- Mấy cái Card cũ của bạn để bên dưới để so sánh --- */}
      <div className="mt-10 opacity-50 scale-75">
          <p className="text-center mb-2 text-gray-400 italic">Mấy mẫu nháp cũ của bạn:</p>
          <div className="bg-white border border-gray-800 rounded-xl shadow-xl p-4 mb-2">
            <p className="text-gray-800 font-semibold">Card thường</p>
          </div>
          <div className="bg-green-500 rounded-full w-10 h-10"></div>
      </div>

    </div>
  )
}