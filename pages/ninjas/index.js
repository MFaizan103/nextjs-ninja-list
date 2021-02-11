import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

// This Data Will Be Fetched at Build Time So Dont Put Any Data Which You Want To Fetch Inside Browser User Click Event
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>Naruto Shippuden Characters!</h1>
      {ninjas.map((n) => (
        <Link href={`/ninjas/${n.id}`} key={n.id}>
          <a className={styles.single}>
            <h3>{n.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
