export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center">

        {/* Header */}
        <div className="flex flex-col gap-2">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Contact</span>
          <h2 className="text-4xl font-bold text-gray-900">Liên hệ với tôi</h2>
          <p className="text-gray-500 max-w-md">
            Bạn có cơ hội hợp tác hoặc muốn kết nối? Đừng ngại liên hệ nhé!
          </p>
        </div>

        {/* Contact cards */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="mailto:bui85847@gmail.com"
            className="flex items-center gap-3 bg-gray-950 text-white px-6 py-4 rounded-2xl hover:bg-amber-400 hover:text-black transition-all duration-300 font-medium">
            📧 bui85847@gmail.com
          </a>
          <a href="https://www.facebook.com/bui.nguyen.nhat.huy.2005" target="_blank"
            className="flex items-center gap-3 border-2 border-gray-200 text-gray-700 px-6 py-4 rounded-2xl hover:border-amber-400 hover:text-amber-500 transition-all duration-300 font-medium">
            📘 Facebook
          </a>
        </div>

      </div>
    </section>
  );
}