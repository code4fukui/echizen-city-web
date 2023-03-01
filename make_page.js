import { CSV } from "https://js.sabae.cc/CSV.js";

const html = await Deno.readTextFile("./static/demo1/index.template.html");
const htmlcontent = await Deno.readTextFile("./static/demo1/content.template.html");

const data = await CSV.fetchJSON("./static/page_all.csv")

const make = (html) => {
  const news = [];
  for (let i = 0; i < 3; i++) {
    const d = data[i];
    const date = "2023-02-28";
    const title = d.タイトル;
    const url = d.ページ番号 + ".html";
    news.push(`        <p class="py-2 px-2 px-lg-4 mb-0"><span class="d-block d-lg-inline-block mr-lg-4">${date}</span><a href=${url}>${title}</a></p>`);
  }

  const html2 = html
    .replace("無料体験<br>レッスン", "市民の<br>方へ")
    .replace("資料請求<br>はこちら", "観光客の<br>方へ")
    .replace("img/logo.png", "../img/echizen-city-logo.png")
    .replace("Hello World", "ようこそ、越前市へ")
    .replace("これは単純なヒーローユニット、注目のコンテンツや情報に特別な注意を喚起するためのシンプルなジャンボトロンスタイルのコンポーネント。", "越前市は、市民がテクノロジーでまちをよくする、シビックテックを推奨しています。")
    .replace("入学のお申し込みはこちら", "詳しくはこちら")
    .replace(`        <p class="py-2 px-2 px-lg-4 mb-0"><span class="d-block d-lg-inline-block mr-lg-4">2018/12/01</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, se.</p>`, news.join("\n"))
  ;

  let html3 = html2;
  for (let i = 1; i <= 5; i++) {
    const d = data[i + 3];
    html3 = html3.replace("MENU" + i, d.タイトル);
    html3 = html3.replace("sample/index.html?" + i, d.ページ番号 + ".html");
  }
  return html3;
};

await Deno.writeTextFile("./static/demo1/index.html", make(html));

for (let i = 0; i < 30; i++) {
  const d = data[i];
  const html2 = make(htmlcontent);
  const html3 = html2
    .replace("CONTENT", d.タイトル)
    .replace("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", d["本文テキスト（パソコン）"].replace(/\\n/g, "<br>"))
  ;

  await Deno.writeTextFile("./static/demo1/" + d.ページ番号 + ".html", html3);
}
