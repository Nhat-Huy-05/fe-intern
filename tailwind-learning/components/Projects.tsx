export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-2">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Projects</span>
          <h2 className="text-4xl font-bold text-gray-900">Dự án của tôi</h2>
          <p className="text-gray-500">Các dự án đang được cập nhật. Hãy quay lại sau nhé!</p>
        </div>

        {/* Empty state */}
        <div className="border-2 border-dashed border-gray-200 rounded-3xl p-16 flex flex-col items-center justify-center gap-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-3xl">
            🚧
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Đang xây dựng...</h3>
          <p className="text-gray-400 max-w-sm"> 
            "Tôi đang trong quá trình học và xây dựng các dự án đầu tay. 
            Các project sẽ được cập nhật tại đây khi hoàn thành!"
          </p>
          <a href="https://github.com/Nhat-Huy-05" target="_blank"
            className="mt-2 bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-amber-400 hover:text-black transition-all duration-300">
            Xem GitHub →
          </a>
        </div>

      </div>
    </section>
  );
}