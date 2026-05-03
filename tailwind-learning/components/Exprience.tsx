export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-950 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-2">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">Experience</span>
          <h2 className="text-4xl font-bold text-white">Học vấn & Kinh nghiệm</h2>
        </div>

        <div className="flex flex-col gap-6">

          {/* Education */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-2 hover:border-amber-400/50 transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Học vấn</span>
              <span className="text-gray-500 text-sm">2023 — nay</span>
            </div>
            <h3 className="text-white text-xl font-bold">Đại học Khoa học Huế</h3>
            <p className="text-gray-400">Ngành Công nghệ thông tin · Chuyên ngành Công nghệ phần mềm</p>
          </div>

          {/* Certificate */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-2 hover:border-amber-400/50 transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Chứng chỉ</span>
              <span className="text-gray-500 text-sm">Đang học</span>
            </div>
            <h3 className="text-white text-xl font-bold">IELTS & freeCodeCamp</h3>
            <p className="text-gray-400">Đang trong quá trình hoàn thiện. Chứng chỉ sẽ được cập nhật khi hoàn thành!</p>
          </div>

          {/* Volunteer */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-2 hover:border-amber-400/50 transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Hoạt động</span>
              <span className="text-gray-500 text-sm">2023</span>
            </div>
            <h3 className="text-white text-xl font-bold">Câu lạc bộ Tình nguyện</h3>
            <p className="text-gray-400">Tham gia các hoạt động tình nguyện cộng đồng, rèn luyện kỹ năng teamwork và làm việc nhóm.</p>
          </div>

        </div>
      </div>
    </section>
  );
}