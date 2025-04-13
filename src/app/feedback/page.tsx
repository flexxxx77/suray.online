export default function FeedbackPage() {
    return (
      <main className="min-h-screen bg-gray-900 text-white py-16 px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Санал хүсэлт илгээх</h1>
        <form className="max-w-xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Нэр</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
              placeholder="Таны нэр"
              required
            />
          </div>
  
          <div>
            <label className="block mb-2 text-sm font-medium">Имэйл</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
              placeholder="example@email.com"
              required
            />
          </div>
  
          <div>
            <label className="block mb-2 text-sm font-medium">Санал / Хүсэлт</label>
            <textarea
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
              placeholder="Таны бичих зүйл..."
              rows={5}
              required
            />
          </div>
  
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full text-white font-semibold"
          >
            Илгээх
          </button>
        </form>
      </main>
    );
  }
  