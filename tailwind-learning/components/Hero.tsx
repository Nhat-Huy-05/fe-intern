export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gray-950 text-white px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-6">
        
        {/* Badge */}
        <span className="inline-block bg-amber-400/10 text-amber-400 text-sm font-medium px-4 py-1.5 rounded-full w-fit border border-amber-400/20">
          Welcome to my Portfolio
        </span>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi! I'm <span className="text-amber-400">Nhật Huy</span>
          <br />
          Frontend Developer
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
          Sinh viên đam mê lập trình web, đang học Next.js và Tailwind CSS. 
          Luôn tìm kiếm cơ hội để học hỏi và phát triển.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-2">
          <a href="#contact"
            className="bg-amber-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition-all duration-300">
            Contact Me →
          </a>
          <a href="#projects"
            className="border border-white/20 text-white px-6 py-3 rounded-full hover:border-amber-400 hover:text-amber-400 transition-all duration-300">
            View Projects
          </a>
        </div>

      </div>
    </section>
  );
}