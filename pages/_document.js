import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head></Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: themeInitializerScript,
            }}
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

const themeInitializerScript = `(function(){
  ${setInitialColorMode.toString()}
  setInitialColorMode();
})()`;

function setInitialColorMode() {
  function getInitialColorMode() {
    //ローカルストレージからthemeを取得する。リロードで初期化されないように。
    const storedPreferenceMode = window.localStorage.getItem("theme");
    const hasStoredPreference = typeof storedPreferenceMode === "string";
    if (hasStoredPreference) {
      return storedPreferenceMode;
    }
    //現在のpreference状態を確認する。
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof preference.matches === "boolean";
    if (hasMediaQueryPreference) {
      return preference.matches ? "dark" : "light";
    }
    return "light";
  }
  const currentColorMode = getInitialColorMode();
  if (currentColorMode === "dark") {
    //cssで事前にスタイルを当てている
    document.documentElement.setAttribute("data-theme", "dark");
  }
}
export default MyDocument;
