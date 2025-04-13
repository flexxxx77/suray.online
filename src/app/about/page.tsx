import { Mail } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">Бидний Тухай</h1>
      <div className="max-w-4xl text-lg leading-relaxed text-gray-200 bg-gray-800/60 p-8 rounded-2xl shadow-xl backdrop-blur-sm">
        <p className="mb-4">
        “GobiScholars Academy”-ийн “Spring Scholars 2025” хөтөлбөрийн “Passion Project” хичээлийн хүрээнд таван гишүүн нэгдэн “Suray.online” төслийг санаачилсан. 
        </p>
        <p className="mb-4">
        Элсэлтийн ерөнхий шалгалтын эрх авах Монгол хэл бичгийн шалгалтад бэлдэхэд зориулсан үнэ төлбөргүй, бие даан суралцах боломжтой цахим материалын хүртээмж хангалттай эсэхийг шалгахын тулд бид ахлах ангийн 300 гаруй сурагчдаас судалгаа аван, судалгааны үр дүн дээр үндэслэн энэхүү төслийг эхлүүлсэн.
        </p>
        <p className="mt-6 font-semibold text-yellow-300">Бидний зорилго:</p>
        <p className="mt-2">
        Монгол хэл бичгийн шалгалтад бэлтгэхэд зориулсан чанартай, үнэ төлбөргүй, хүртээмжтэй цахим орчинг бүх сурагчдад болон шалгалт өгөгчдөд бий болгох. Бид боловсрол бол хүн бүрийн эрхэм эрх хэмээн итгэдэг тул Suray.online платформ нь сурагч бүрийн амжилтад хүрэх замын эхлэл болно гэдэгт бүрэн итгэлтэй байна.
        </p>

        <p className="text-sm text-center text-gray-400 mt-8 flex items-center justify-center gap-2">
          <Mail size={16} className="text-gray-400" />
          Вэбсайтыг бүтээсэн: 21-р сургууль, 11а анги — Очир-Эрдэнэ (
          <a href="mailto:ochrooto1@gmail.com" className="underline hover:text-yellow-400">
            ochrooto1@gmail.com
          </a>
          )
        </p>
      </div>
    </main>
  );
}
