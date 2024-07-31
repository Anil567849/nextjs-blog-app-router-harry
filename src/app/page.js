import Image from "next/image";
import styles from './css/home.module.css';

export default function Home() {
  const url = "https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>Hunting Coder</h1>
          <div>
          <Image 
          src={url}
          width={500}
          height={500}
          alt="Picture of the author"/>
          </div>
        </div>
        <div className={styles.blog}>
          <div className="blogItem">
            <h2 className="title">Title</h2>
            <p>Content</p>
          </div>
        </div>
    </div>
  );
}
