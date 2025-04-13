'use client';

export default function FeedbackPage() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Санал хүсэлт илгээгдлээ (туршилт)!");
      }}
      className="max-w-xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg space-y-4 text-white"
    >
      <h1 className="text-2xl font-bold">Санал хүсэлт</h1>
      <p className="text-sm text-gray-300">Сайтын талаар таны бодол бидэнд чухал байна</p>

      <div>
        <label className="block text-sm font-medium mb-1">Таны нэр</label>
        <input
          type="text"
          name="name"
          placeholder="Жишээ: Бат"
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Сэтгэгдэл</label>
        <textarea
          name="message"
          placeholder="Таны сэтгэгдэл..."
          rows={5}
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-white transition duration-200"
      >
        Илгээх
      </button>
    </form>
  );
}
