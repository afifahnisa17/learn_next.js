import Link from 'next/link';
import styles from './register.module.scss';

const RegisterPage = () => {
  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerCard}>
        <h1 className={styles.title}>Daftar Akun</h1>
        <p className={styles.subtitle}>Bergabunglah untuk mulai belanja!</p>
        
        <form>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nama Lengkap</label>
            <input type="text" className={styles.inputField} placeholder="Masukkan nama..." />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input type="email" className={styles.inputField} placeholder="contoh@mail.com" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Password</label>
            <input type="password" className={styles.inputField} placeholder="******" />
          </div>

          <button type="button" className={styles.btnRegister}>
            Buat Akun
          </button>
        </form>

        <p className={styles.footerText}>
          Sudah punya akun?{' '}
          <Link href="/auth/login" className={styles.linkText}>
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;