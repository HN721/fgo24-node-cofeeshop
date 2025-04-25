import { input } from "@inquirer/prompts";
import numeral from "numeral";
import addOrder from "./order.js";
import Cart from "./Cart.js";
import keranjang from "./Cartdata.js";

export default async function menu(menu) {
  console.log("---- Welcome To HoseaCoffe-----");
  const data = menu.menu;
  data.forEach((item, index) => {
    console.log(`${index + 1}. ${item.category}`);
  });
  console.log(`4. Lihat Keranjang`);
  const answer = await input({
    message: `Pilih Menu dari 1-${data.length + 1} :`,
  });
  const num = parseInt(answer) - 1;
  if (num >= 0 && num < data.length) {
    const choice = data[num];

    console.log(`\nMenu ${choice.category}:`);
    choice.item.forEach((menu, index) => {
      console.log(
        `${index + 1}. ${menu.nama} - Rp${numeral(menu.harga).format(",")}`
      );
    });
    const ask = await input({
      message: `Pilih ${choice.category} dari 1-${choice.item.length} :`,
    });

    const urchoose = parseInt(ask) - 1;
    addOrder(urchoose, choice.item);
  } else if (4 === num + 1) {
    Cart(keranjang);
  } else {
    console.log(`Pilihan Tidak Valid`);
  }
}
