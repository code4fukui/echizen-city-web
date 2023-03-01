import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetchJSON("./pagelist.csv");
const data2 = data.filter(d => d.状態名 == "公開中");
console.log(data.length, "->", data2.length);
await Deno.writeTextFile("./static/page_all.csv", CSV.stringify(data2));
