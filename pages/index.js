import Head from "next/head";
import Image from "next/image";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja list | home</title>
      <meta name="keywords" content="ninja" />
    </Head>
    <div>
      <h1 className={styles.title}>homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati
        nemo autem distinctio laudantium, quis, consequatur totam ex placeat,
        sequi nisi dicta voluptatum incidunt cum commodi animi nihil sit magni.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet in
        distinctio laboriosam officiis error tempora voluptate repellendus,
        vitae voluptatibus autem doloribus. Molestiae optio explicabo aperiam
        quas inventore assumenda et odio.
      </p>
      <Link href='/ninja/test'>
        <a className={styles.btn}>See ninja listing</a>
      </Link>
    </div>
    </>
    
  );
}
