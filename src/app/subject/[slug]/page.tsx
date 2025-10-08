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
        code: "Гагнаас Хувилбар А-2016",
        img: "/cover.jpg",
        link: "https://drive.google.com/file/d/1zBpgJ_pfeZSDH9POmJBZDCkMYPsKohyY/view?usp=sharing",
      },
      {
        code: "Гагнаас Хувилбар B-2016",
        img: "/cover.jpg",
        link: "https://drive.google.com/file/d/1ihNkOXvzFZ0zzzFEoWoUPIwovF585NAa/view?usp=sharing",
      },
      {
        code: "Саахалтын нууранд ангир дуугарна Хувилбар A-2017",
        img: "/cover.jpg",
        link: "https://drive.google.com/file/d/11lHvRXSHITp7H9z-W9la6fu87Ojcy8YK/view?usp=sharing",
      },
      {
        code: "Саахалтын нууранд ангир дуугарна Хувилбар B-2017",
        img: "/cover.jpg",
        link: "https://drive.google.com/file/d/11zOws4dDZDeiRE3CxtHxU8N265ixrRtV/view?usp=sharing",
      },
      {
        code: "Алтан аргамж Хувилбар А-2018",
        img: "/cover.jpg",
        link: "https://drive.google.com/file/d/1M38Bu3Pq7MWC5D_TKv8sQtm6gMbNqCUV/view?usp=sharing",
      },
      {
        code: "Алтан аргамж Хувилбар В-2018",
        img: "/cover.jpg",
        link: "https://drive.google.com/file/d/1yh4rUB0tCAp5WK0ZcXFFD1vLGdian66Y/view?usp=sharing",
      },
      {
        code: "Хашин бор Хувилбар A-2019",
        img: "/cover.jpg",
        link: "https://drive.google.com/file/d/1sgszY2Hk1kc0j61bfLQOB3eIGSosqJcd/view?usp=sharing",
      },
      {
        code: "Хашин бор Хувилбар B-2019",
        img: "/cover.jpg",
        link: "https://drive.google.com/file/d/15O9rRBiNgW3AAgOqdP7TYDgHZC1qHHOS/view?usp=sharing",
      },
      {
        code: "НҮД Хувилбар A-2022",
        img: "/cover.jpg",
        link: "https://drive.google.com/file/d/1FMEXFPxHEgJvVv6wsbfFgmWLnPkP9vdu/view?usp=sharing",
      },
      {
        code: "Усанд явахад Хувилбар A-2023",
        img: "/cover.jpg",
        link: "https://drive.google.com/file/d/1xoT_oTgvKRuC1tahaRi54_vay1y9fAAC/view?usp=sharing",
      },
      {
        code: "Усанд явахад Хувилбар B-2023",
        img: "/cover.jpg",
        link: "https://drive.google.com/file/d/1eBm_lmeroHwLJA4ROQyUcVL6yhp102dM/view?usp=sharing",
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
            <h2 className="text-xl font-semibold text-white text-center">{code}</h2>
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
