"use client";

import Link from "next/link";
import { GraduationCapIcon, Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { GiBrain } from "react-icons/gi"; // 🧠 ЕШ-ийн тест icon
import { event } from "@/app/lib/gtag";

export default function Home() {
  const handleCardClick = (label: string) => {
    event({
      action: "click_button",
      category: "navigation",
      label,
      value: 1,
    });
  };

  const handleInstagramClick = () => {
    event({
      action: "click_button",
      category: "social",
      label: "Instagram Link",
      value: 1,
    });
  };

  const handleEmailClick = () => {
    event({
      action: "click_button",
      category: "contact",
      label: "Email Link",
      value: 1,
    });
  };

  return (
    <section className="flex flex-col items-center justify-center text-center space-y-10 min-h-screen py-10 bg-gradient-to-br from-yellow-50 to-pink-100">
      {/* 🟣 Title */}
      <div>
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white drop-shadow-md mb-4">
          {/* Optional main title */}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto">
          Хэл бичгийн шалгалтын тестүүдийг эндээс!
        </p>
      </div>

      {/* 🎓 Cards */}
      <div className="flex flex-col sm:flex-row gap-8">
        {/* Хэл бичгийн тест */}
        <Link
          href="/subject/alevel"
          className="group w-72 h-80 p-6 bg-white dark:bg-gray-800 border-4 border-blue-300 rounded-3xl shadow-2xl hover:scale-105 transform transition-all duration-300 flex flex-col items-center justify-between"
          onClick={() => handleCardClick("Хэл бичгийн тест")}
        >
          <GraduationCapIcon className="w-10 h-10 text-blue-600 group-hover:text-pink-500 transition" />
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
            alt="A-Level"
            className="w-24 h-24 object-contain"
          />
          <p className="text-xl font-semibold text-gray-800 dark:text-white mt-4">
            Хэл бичгийн тест
          </p>
        </Link>

        
        
        
        
      
                
      </div>

      {/* 🫶 Quote + Icons */}
      <div className="text-sm text-gray-500 dark:text-gray-400 flex flex-col items-center space-y-2">
        <p>"Бид одоо цагт хийж ирээдүйг бүтээнэ"</p>
        <div className="flex space-x-4 mt-1">
          <a
            href="https://www.instagram.com/suray.online?igsh=MWtlcGpqa3l1dzF2dw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleInstagramClick}
          >
            <FaInstagram className="w-6 h-6 text-pink-600 hover:text-pink-800 transition" />
          </a>
          <a
            href="mailto:suray.online.edu@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleEmailClick}
          >
            <Mail className="w-6 h-6 text-red-600 hover:text-red-800 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}