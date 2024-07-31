"use client" // // Client-Side Data Fetching: Data is fetched on the client, data is not present in the initial HTML response. - You can check view-page-source on chrome you will not find Title and Content
import styles from './home.module.css';
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Blog() {

  const [data, setData] = useState([]);

  async function getData(){
    try {
      const res = await fetch('http://localhost:3000/api/blogs');
      const {data} = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [])
  



  return (
    <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>Blogs</h1>
        </div>
        <div className={styles.blog}>
          <div className="blogItem">
            {
              data.map((item) => {
                return <div key={item}><Link href={`/blogpost/${item}`}><h2 className={styles.title}>Title: {item}</h2></Link>
                <p>Content</p></div>
              })
            }
          </div>
        </div>
    </div>
  );
}
