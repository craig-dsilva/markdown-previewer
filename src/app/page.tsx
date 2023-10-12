"use client";
import { useState } from "react";
import Markdown from "react-markdown";
import styles from "./page.module.css";

const Home = () => {
const [preview, setPreview] = useState("")

  return <main className={styles.main}>
    <textarea id={styles.editor} value={preview} onChange={e => setPreview(e.target.value)}></textarea>
      <div id={styles.preview}>
        <Markdown>{preview}</Markdown>
      </div>
  </main>;
};

export default Home;
