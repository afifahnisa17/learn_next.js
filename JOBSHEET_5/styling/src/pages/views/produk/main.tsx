const Main = () => {
  const products = [
    { id: 1, name: 'Acer Aspire 7', price: 'Rp 10.200.000', stock: 5 },
    { id: 2, name: 'MacBook Air M3', price: 'Rp 18.500.000', stock: 2 },
    { id: 3, name: 'ThinkPad X1 Carbon', price: 'Rp 22.000.000', stock: 3 },
  ];

  return (
    <main className="container mx-auto py-16 px-6">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Rekomendasi Laptop</h2>
        <button className="text-blue-600 font-semibold hover:underline">Lihat Semua</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="h-40 bg-gray-100 rounded-2xl mb-6 flex items-center justify-center text-gray-400">Image Placeholder</div>
            <h3 className="text-xl font-bold mb-2">{p.name}</h3>
            <p className="text-2xl text-blue-600 font-extrabold mb-4">{p.price}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Stok: {p.stock}</span>
              <button className="bg-black text-white px-5 py-2 rounded-full text-sm">Tambah</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;