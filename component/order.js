import { input } from "@inquirer/prompts";
import Cart from "./Cart.js";
import keranjang from "./Cartdata.js";
import menu from "./OrderMenu.js";
import { menubar } from "../index.js";

export default async function addOrder(index, item) {
  const answer = await input({ message: `Apakah Kamu Yakin? (Y/N):` });
  if (answer.toLowerCase() === "y") {
    const selected = item[index];
    console.log(
      `Kamu Memesan 1x ${selected.nama} dengan harga ${selected.harga}`
    );
    keranjang.push(selected);
    console.log(`${selected.nama} berhasil ditambahkan ke keranjang`);

    const urcart = await input({ message: "Lihat Keranjang? (Y/N)" });
    if (urcart.toLowerCase() === "y") {
      Cart(keranjang);
    }
  } else {
    setTimeout(() => menu(menubar), 1000);
  }
}
