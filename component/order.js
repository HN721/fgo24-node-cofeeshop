import { input } from "@inquirer/prompts";
import Cart from "./Cart.js";

export default async function addOrder(index, item) {
  let cart = [];
  const answer = await input({ message: `Apakah Kamu Yakin? (Y/N):` });
  if (answer === "Y" || answer === "y") {
    console.log(
      `Kamu Memesan 1x ${item[index].nama} dengan harga ${item[index].harga}`
    );

    console.log(
      `${item[index].nama} dengan harga ${item[index].harga} Berhasil Ditambahkan ke Keranjang`
    );
    cart.push({ nama: item[index].nama, harga: item[index].harga });
    const urcart = await input({ message: "Lihat Keranjang? (Y/N)" });
    if (urcart === "Y" || urcart === "y") {
      Cart(cart);
    }
  }
}
