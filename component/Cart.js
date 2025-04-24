import { input } from "@inquirer/prompts";
import menu from "./OrderMenu.js";
import { menubar } from "../index.js";
const Cart = async (items) => {
  if (items.length === 0) {
    console.log(`Keranjang Kosong `);
    setTimeout(() => menu(menubar), 1000);
  } else {
    items.forEach((item, index) =>
      console.log(`${index + 1}. ${item.nama} - Rp.${item.harga}`)
    );
    const returning = await input({ message: "Belanja Lagi? (Y/N)" });
    if (returning === "y") {
      menu(menubar);
    } else {
      console.log(`Program Selesai`);
    }
  }
};
export default Cart;
