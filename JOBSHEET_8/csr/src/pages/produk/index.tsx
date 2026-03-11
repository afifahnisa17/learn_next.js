import TampilanProduk from "../views/produk"; 
import useSWR from "swr";
import fetcher from "../utils/swr/fetcher";

const Kategori = () => {
  // SWR otomatis menghandle data, error, dan loading state.
  // Tidak butuh useState manual lagi untuk menampung products.
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  // Jika terjadi error pada API/Firebase
  if (error) return <div>Gagal memuat data. Coba refresh kembali.</div>;

  return (
    <div>
      {/* LOGIKA:
        Jika isLoading true, kirim array kosong [] agar View menampilkan Skeleton.
        Jika data ada, kirim data.data (isi produk dari API).
        Pake '?.data || []' sebagai pengaman agar tidak error 'undefined'.
      */}
      <TampilanProduk products={isLoading ? [] : data?.data || []} />
    </div>
  );
};

export default Kategori;

