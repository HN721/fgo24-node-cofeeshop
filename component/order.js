import { input } from "@inquirer/prompts";

export default async function addOrder(index, item) {
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
      1000
    );
  }
}
