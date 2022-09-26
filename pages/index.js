import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(undefined);
  const handleToggle = (e) => {
    setDarkTheme(e.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);
  return (
    <div>
      <div className="container">
        <nav>
          <div className="title">私のポートフォリオ</div>
          <div>
            <form>
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={handleToggle}
                  checked={darkTheme}
                />
                <span className="slider"></span>
              </label>
            </form>
          </div>
        </nav>
        <section>
          <div className="content">
            <h1>ポートフォリオ</h1>
            <h3>
              私はプログラミングチュートリアル動画をYoutubeとUdemyで更新しています
            </h3>
            <p>
              投稿内容はフロントエンドからバックエンドまで幅広く動画を投稿しています。
              エンジニアとして幅広い知識をキャッチアップしたい人のためのチャンネルです
            </p>
            <button className="primary-btn">お問い合わせ</button>
          </div>
        </section>
      </div>
    </div>
  );
}
