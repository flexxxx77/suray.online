import { notFound } from "next/navigation";
import React, { use } from "react";

type PageProps = {
  params: {
    slug: string;
  };
};

const data = {
  alevel: {
    title: "Хэл бичгийн шалгалт тест ",
    topics: [
      {
        code: "Үүр Хувилбар А",
        img: "/cover.jpg",
        link: "https://eec.mn/wp-content/uploads/2024/07/Монгол-хэл-А-хувилбар.pdf",
      },
      {
        code: "Үүр Хувилбар B",
        img: "/cover.jpg",
        link: "https://eec.mn/wp-content/uploads/2024/07/Монгол-хэл-B-хувилбар.pdf",
      },
      {
        code: "Үүр Хувилбар C ",
        img: "/cover.jpg",
        link: "https://eec.mn/wp-content/uploads/2024/07/Монгол-хэл-C-хувилбар.pdf",
      },
      {
        code: "Үүр Хувилбар D",
        img: "/cover.jpg",
        link: "https://eec.mn/wp-content/uploads/2024/07/Монгол-хэл-D-хувилбар.pdf",
      },
      {
        code: "Усанд явахад Хувилбар А",
        img: "/cover.jpg",
        link: "https://eec.mn/wp-content/uploads/2024/01/2023-МХБШ-А.pdf",
      },
      {
        code: "Усанд явахад Хувилбар В",
        img: "/cover.jpg",
        link: "https://eec.mn/wp-content/uploads/2024/01/2023-МХБШ-В.pdf",
      },
      {
        code: "ТАЛ Хувилбар A",
        img: "/cover.jpg",
        link: "https://eec.mn/wp-content/uploads/2022/08/B-22..pdf",
      },
      {
        code: "УРТЫН ГОЛ МИНЬ ЗҮҮДНЭЭСЭЭ СЭРЖ БАЙНА Хувилбар A",
        img: "/cover.jpg",
        link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      },
      {
        code: "УРТЫН ГОЛ МИНЬ ЗҮҮДНЭЭСЭЭ СЭРЖ БАЙНА Хувилбар B",
        img: "/cover.jpg",
        link: "https://eec.mn/wp-content/uploads/2022/08/C-22..pdf",
      },
      {
        code: "ТАЛ Хувилбар B",
        img: "/cover.jpg",
        link: "https://eec.mn/wp-content/uploads/2022/08/D-22..pdf",
      },
    ],
  },
};

export default function SubjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const subjectData = data[slug as keyof typeof data];
  if (!subjectData) return notFound();

  return (
    <main className="min-h-screen py-16 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <h1 className="text-4xl font-bold text-white mb-12 drop-shadow-md">
        {subjectData.title}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {subjectData.topics.map(({ code, img, link }) => (
          <div
            key={code}
            className="w-72 h-[500px] bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 p-4 flex flex-col items-center"
          >
            <img
              src={img}
              alt={code}
              className="w-full h-80 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-white">{code}</h2>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              PDF Нээх
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}