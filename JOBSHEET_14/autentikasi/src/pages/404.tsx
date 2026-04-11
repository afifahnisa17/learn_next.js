import Link from 'next/link';
import styles from '@/styles/404.module.scss';

const Custom404 = () => {
    return (
        <div className={styles.error}>
            <img src="/page-not-found.png" alt="404" className={styles.error__image} />
            <h1 className={styles.error__title}>404 - Halaman Tidak Ditemukan</h1>
            <p className={styles.error__description}>
                Waduh! Sepertinya halaman yang kamu cari sudah pindah ke dimensi lain atau memang tidak pernah ada.
            </p>
            
            {/* Tugas 3: Tombol Kembali ke Home */}
            {/* <Link href="/" className={styles.error__button}>
                Kembali ke Home
            </Link> */}
        </div>
    );
};

export default Custom404;