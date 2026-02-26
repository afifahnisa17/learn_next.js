import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const HalamanProduk = () => {
    // Simulasi: false berarti user belum login
    const [isLogin, setIsLogin] = useState(false); 
    const router = useRouter();

    useEffect(() => {
        // Logika Tugas: Jika belum login, paksa ke halaman login
        if (!isLogin) {
            router.push("/auth/login");
        }
    }, [isLogin, router]);

    if (!isLogin) {
        return <p>Memeriksa akses... Anda akan dialihkan ke Login.</p>;
    }

    return (
        <div>
            <h1>Selamat Datang di Halaman Produk Privat</h1>
            <p>Hanya user yang sudah login yang bisa melihat ini.</p>
        </div>
    );
};

export default HalamanProduk;