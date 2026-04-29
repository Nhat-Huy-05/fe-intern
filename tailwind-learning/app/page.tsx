// Đây là một Server Component trong Next.js
export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Chào mừng đến với Next.js!
        </h1>
        <p className="text-gray-700">
          Đây là một trang được tạo bằng file routing và định dạng bởi Tailwind CSS.
        </p>
        <button className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
          Tìm hiểu thêm
        </button>
      </div>
    </main>
  );
}