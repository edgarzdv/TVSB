import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'
import Header from "@/components/header";
import Home from "@/pages/Home";


export default function Page() {



  return (
    <main className={styles.main}>
      <Header/>
      <Home/>
    </main>
  );
}
