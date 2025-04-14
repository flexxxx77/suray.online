"use client";

import React from "react";

export default function FeedbackPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-pink-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 px-4">
      <div className="w-full max-w-md p-6 rounded-xl shadow-xl bg-blue-100 dark:bg-blue-900">
        <h2 className="text-center text-xl font-semibold text-gray-800 dark:text-white mb-6">
          Санал хүсэлт
        </h2>

        <form className="space-y-5">
          {/* Нэр */}
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Нэр:
            </label>
            <input
              type="text"
              id="name"
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
              rows={4}
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
      </div>
    </div>
  );
}
