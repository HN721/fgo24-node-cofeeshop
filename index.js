import menu from "./component/OrderMenu.js";
const url =
  "https://raw.githubusercontent.com/HN721/fgo24-node-datasource/refs/heads/main/listMenu.txt";
export let menubar = null;
async function fetchMenu() {
  try {
    const result = await fetch(url);
    const res = await result.json();
    if (!res) throw new Error("Gagal Fetching Api");
    return res;
  } catch (err) {
    console.log(err.message);
  }
}
fetchMenu().then((e) => {
  menu(e);
  menubar = e;
});
