import { notFound } from "next/navigation";
import React, {  use } from "react";

type PageProps = {
  params: {
    slug: string;
  };
};

const data = {
  alevel: {
    title: "ЭЕШ Монгол хэл 2023–2025",
    topics: [
      { code: "P1", img: "https://i.ibb.co/1RMhYLM/mon1.png", 
        link: "https://yourdomain.com/pdfs/p1.pdf" },
      { code: "P2", img: "https://i.ibb.co/QQt5Z6H/mon2.png", 
        link: "https://yourdomain.com/pdfs/p2.pdf" },
      { code: "P3", img: "https://i.ibb.co/Nr9RYcj/mon3.png", 
        link: "https://yourdomain.com/pdfs/p3.pdf" },
      { code: "P4", img: "https://i.ibb.co/xFR3RrJ/mon4.png", 
        link: "https://yourdomain.com/pdfs/p4.pdf" },
      { code: "P5", img: "https://i.ibb.co/PgJzFWD/p1.png", 
        link: "https://yourdomain.com/pdfs/p5.pdf" },
      { code: "P6", img: "https://i.ibb.co/Ykq0r3R/p2.png", 
        link: "https://yourdomain.com/pdfs/p6.pdf" },
      { code: "P7", img: "https://i.ibb.co/MMyRZq8/p3.png", 
        link: "https://yourdomain.com/pdfs/p7.pdf" },
      { code: "P8", img: "https://i.ibb.co/xMq1DDB/p4.png", 
        link: "https://yourdomain.com/pdfs/p8.pdf" },
      { code: "P9", img: "https://i.ibb.co/0sBKWkN/p5.png", 
        link: "https://yourdomain.com/pdfs/p9.pdf" },
      { code: "P10", img: "https://i.ibb.co/6yLkZKg/p6.png",
         link: "https://yourdomain.com/pdfs/p10.pdf" },
    ],
  },
};

export default function SubjectPage({ params }: { params: Promise<{ slug: string }> }){
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
            className="w-72 h-[420px] bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 p-4 flex flex-col items-center"
          >
            <img
              src={img}
              alt={code}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-white">{code}</h2>
            <p className="text-sm text-gray-400 mb-4">{subjectData.title}</p>
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
