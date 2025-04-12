"use client";

import Link from "next/link";
import { GraduationCapIcon } from "lucide-react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center space-y-10">
      {/* 🟣 Title */}
      <div>
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white drop-shadow-md mb-4">
          
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto">
          Хэл бичгийн шалгалтын тестүүдийг эндээс!
        </p>
      </div>

      {/* 🎓 Main Card */}
      <Link
        href="/subject/alevel"
        className="group w-80 h-80 p-6 bg-white dark:bg-gray-800 border-4 border-blue-300 rounded-3xl shadow-2xl hover:scale-105 transform transition-all duration-300 flex flex-col items-center justify-between"
      >
        <GraduationCapIcon className="w-12 h-12 text-blue-600 group-hover:text-pink-500 transition" />
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          alt="A-Level"
          className="w-24 h-24 object-contain"
        />
        <p className="text-xl font-semibold text-gray-800 dark:text-white mt-4">
          ЭЕШ Монгол хэл <br /> 2023–2025
        </p>
      </Link>

      {/* 🫶 Trust Quote */}
      <div className="text-sm text-gray-500 dark:text-gray-400">
        <p>"Бид одоо цагт хийж ирээдүйг бүтээнэ."</p>
      </div>
    </section>
  );
}

