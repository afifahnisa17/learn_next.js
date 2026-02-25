import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <div>
        <h1>Nama Mahasiswa: Afifah Khoirunnisa</h1>
        <h1>NIM           : 2141720085</h1>
        <h1>Program Studi : D4 Teknik Informatika</h1>
    </div>
  )
}