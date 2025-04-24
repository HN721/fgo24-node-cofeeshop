import { input } from "@inquirer/prompts";

export default async function addOrder(index, item) {
  let cart = [];
  const answer = await input({ message: `Apakah Kamu Yakin? (Y/N):` });
  if (answer === "Y" || answer === "y") {
    console.log(
      `Kamu Memesan 1x ${item[index].nama} dengan harga ${item[index].harga}`
    );
    setTimeout(
      () =>
        console.log(
          `${item[index].nama} dengan harga ${item[index].harga} Berhasil Ditambahkan ke Keranjang`
        ),
      2000
    );
    cart.push(item[index].nama, item[index].harga);
    const urcart = await input({ message: "Lihat Keranjang? (Y/N)" });
    if (urcart === "Y" || urcart === "y") {
      console.log(`Isi Keranjang-Mu ${cart[0]} Rp.${cart[1]}`);
    }
  }
}
