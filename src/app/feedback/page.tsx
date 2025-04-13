<div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg space-y-4 text-white">
  <h1 className="text-2xl font-bold">Санал хүсэлт</h1>
  <p className="text-sm text-gray-300">Сайтын талаар таны бодол бидэнд чухал байна.</p>

  {/* Нэр оруулах талбар */}
  <div>
    <label className="block text-sm font-medium mb-1">Таны нэр</label>
    <input
      type="text"
      placeholder="Жишээ: Бат"
      className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
    />
  </div>

  {/* Сэтгэгдэл бичих талбар */}
  <div>
    <label className="block text-sm font-medium mb-1">Сэтгэгдэл</label>
    <textarea
      placeholder="Таны сэтгэгдэл..."
      rows={5}
      className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
    ></textarea>
  </div>

  <p className="text-xs text-gray-400">⚠️ Энэ санал хүсэлт сервер рүү илгээгдэхгүй, зүгээр л жишээ маягаар харагдана.</p>
</div>
