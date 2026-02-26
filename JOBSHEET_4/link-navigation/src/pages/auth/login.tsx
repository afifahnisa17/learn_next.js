import Link from "next/link";
import { useRouter } from "next/router";

const HalamanLogin = () => {
    const router = useRouter();

    const handleLogin = () => {
        // Navigasi Imperatif: Pindah ke produk setelah aksi klik
        router.push("/produk");
    };

    return (
        <div>
            <h1>Halaman Login</h1>
            <button onClick={handleLogin}>Login</button>
            <br />
            
            <p>
                Belum punya akun? 
                <Link href="/auth/register"> Ke Halaman Register</Link>
            </p>
        </div>
    );
};

export default HalamanLogin;