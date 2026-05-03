export default function Footer() {
  const socials = [
    { name: "GitHub", href: "https://github.com/Nhat-Huy-05" },
    { name: "Facebook", href: "https://www.facebook.com/bui.nguyen.nhat.huy.2005" },
    { name: "Instagram", href: "https://instagram.com" },
    { name: "Zalo", href: "https://zalo.me" },
  ];

  return (
    <footer id="contact" className="bg-gray-950 border-t border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

        {/* Logo */}
        <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center font-bold text-black">
          NH
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank"
              className="text-gray-400 text-sm hover:text-amber-400 transition-colors duration-200">
              {s.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-600 text-sm">© 2026 Nhật Huy. All rights reserved.</p>

      </div>
    </footer>
  );
}