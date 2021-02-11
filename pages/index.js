import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Naruto Shippuden | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde iste
          saepe officiis. Laudantium facere error quae nobis provident dolorum
          hic excepturi possimus, vel porro explicabo, tempore necessitatibus
          tempora sequi aut, alias ipsa? Dignissimos minus tempora consectetur
          aspernatur provident mollitia et cumque sed officiis esse. Aspernatur
          facilis harum dignissimos accusamus velit!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja List</a>
        </Link>
      </div>
    </>
  );
}
