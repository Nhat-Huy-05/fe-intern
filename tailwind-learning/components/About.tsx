export default function About() {
  return (
    <section id="about" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">

        {/* Avatar */}
        <div className="w-48 h-48 rounded-2xl bg-amber-400 flex-shrink-0 flex items-center justify-center text-5xl font-bold text-black">
          NH
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl font-bold text-gray-900">Xin chào! 👋</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Tôi là <strong>Nhật Huy</strong>, sinh viên ngành Công nghệ thông tin. 
            Tôi đam mê xây dựng giao diện web đẹp và thân thiện với người dùng.
            Hiện đang học <strong>Next.js</strong>, <strong>Tailwind CSS</strong> và không ngừng cải thiện kỹ năng mỗi ngày.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Mục tiêu của tôi là trở thành một <strong>Frontend Developer</strong> chuyên nghiệp 
            và đóng góp vào các dự án thực tế có ý nghĩa.
          </p>
        </div>

      </div>
    </section>
  );
}