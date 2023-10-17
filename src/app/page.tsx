"use client";
import { useState } from "react";
import Markdown from "react-markdown";
import { defaultTextInEditor } from "./defaultTextInEditor";
import styles from "./page.module.css";

const Home = () => {
const [preview, setPreview] = useState(defaultTextInEditor)

  return <main className={styles.main}>
    <textarea id={styles.editor} className={styles.column} value={preview} onChange={e => setPreview(e.target.value)}></textarea>
      <div id={styles.preview} className={styles.column}>
        <Markdown>{preview}</Markdown>
      </div>
  </main>;
};

export default Home;
