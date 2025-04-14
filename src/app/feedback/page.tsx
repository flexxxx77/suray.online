"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function FeedbackPage() {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_7ypj80q",       
        "template_m712dut",      
        form.current,
        "5SQifsW93f9FflQ4H"      
      )
      .then(
        () => {
          setIsSent(true);
          form.current?.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Алдаа гарлаа! Дахин оролдоно уу.");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-pink-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 px-4">
      <div className="w-full max-w-md p-6 rounded-xl shadow-xl bg-blue-100 dark:bg-blue-900">
        <h2 className="text-center text-xl font-semibold text-gray-800 dark:text-white mb-6">
          Санал хүсэлт
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          {/* Нэр */}
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Нэр:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Таны нэр"
            />
          </div>

          {/* Имэйл */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Имэйл:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="email@example.com"
            />
          </div>

          {/* Зурвас */}
          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Зурвас:
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Санал хүсэлтээ энд бичнэ үү..."
            ></textarea>
          </div>

          {/* Илгээх товч */}
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition"
          >
            Илгээх
          </button>
        </form>

        {/* Амжилттай илгээгдсэн мессеж */}
        {isSent && (
          <p className="text-pink-500 text-center mt-4 text-lg font-medium">
            Баярлалаа! ❤️ Санал хүсэлт амжилттай илгээгдлээ.
          </p>
        )}
      </div>
    </div>
  );
}
