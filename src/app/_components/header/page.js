import Image from "next/image";
import styles from './page.module.css';
import Link from "next/link";

export default function Page() {
  return (
    <div className={styles.container}>
        <ul className={styles.ul}>
            <Link href={"/"}><li className={styles.li}>Home</li></Link>
            <Link href={"/about"}><li className={styles.li}>About</li></Link>
            <Link href={"/contact"}><li className={styles.li}>Contact</li></Link>
            <Link href={"/blogs"}><li className={styles.li}>Blogs</li></Link>
        </ul>
    </div>
  );
}
