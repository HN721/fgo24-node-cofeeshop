import menu from "./component/OrderMenu.js";
const url =
  "https://raw.githubusercontent.com/HN721/fgo24-node-datasource/refs/heads/main/listMenu.txt";
export let menubar = null;
async function fetchMenu() {
  try {
    const result = await fetch(url);
    const res = await result.json();
    return res;
  } catch (err) {
    console.log(err);
  }
}
fetchMenu().then((e) => {
  menu(e);
  menubar = e;
});
// const foods = [
//   { nama: "Nasi Goreng", harga: 20000 },
//   { nama: "Bakso", harga: 12000 },
//   { nama: "Mie Goreng", harga: 5000 },
//   { nama: "Nasi Uduk", harga: 10000 },
// ];
// const minuman = [
//   { nama: "Es Teler", harga: 20000 },
//   { nama: "Coffe", harga: 12000 },
//   { nama: "Estea", harga: 5000 },
//   { nama: "GreenTea", harga: 10000 },
// ];
// const snack = [
//   { nama: "Nugget", harga: 20000 },
//   { nama: "Gorengan", harga: 12000 },
//   { nama: "Ciki", harga: 5000 },
//   { nama: "Burger", harga: 10000 },
// ];
// export const menu = [
//   {
//     category: "Makanan",
//     item: minuman,
//   },
//   {
//     category: "Minuman",
//     item: minuman,
//   },
//   {
//     category: "Snack",
//     item: snack,
//   },
// ];
//
