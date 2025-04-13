import { Mail } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">Бидний Тухай</h1>
      <div className="max-w-4xl text-lg leading-relaxed text-gray-200 bg-gray-800/60 p-8 rounded-2xl shadow-xl backdrop-blur-sm">
        <p className="mb-4">
          “Suray.online” баг нь “GobiScholars Academy”-ийн “Spring Scholars 2025” хөтөлбөрийн “Passion Project” хичээлийн хүрээнд таван гишүүн нэгдэн энэхүү төслийг эхлүүлсэн.
        </p>
        <p className="mb-4">
          Монгол хэл бичгийн шалгалт нь Элсэлтийн Ерөнхий Шалгалтад орохын өмнө заавал өгөх шаардлагатай ч, түүнд бэлтгэхэд зориулсан үнэ төлбөргүй, ганцаарчлан суралцах боломжтой, ойлгомжтой тайлбартай цахим материалууд хангалтгүй байгааг бид анзаарсан. Үүнийг илүү нарийвчлан судлахын тулд бид ахлах ангийн 350 гаруй сурагчдаас судалгаа авч, үр дүнг нь шинжлэн дүгнэсний үндсэн дээр энэхүү төслийг хэрэгжүүлж эхэлсэн.
        </p>
        <p className="mb-4">
          Мөн бид мэргэжлийн багш нараар агуулгаа хянуулж сайжруулан, сурагчдад баталгаатай, найдвартай байдлаар хүргэхийг эрхэмлэж байна.
        </p>
        <p className="mt-6 font-semibold text-yellow-300">Бидний зорилго:</p>
        <p className="mt-2">
          Монгол хэл бичгийн шалгалтад бэлтгэхэд зориулсан чанартай, үнэ төлбөргүй, хүртээмжтэй цахим орчинг бүх сурагч, шалгуулагчдад бий болгох. Бид боловсрол бол хүн бүрийн эрхэм эрх гэж итгэдэг. Тиймээс Suray.online платформ нь сурагч бүрийн амжилтад хүрэх замын эхлэл болно гэдэгт бид бүрэн итгэлтэй байна.
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
