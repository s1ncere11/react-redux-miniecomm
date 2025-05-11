import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { IoIosRemove, IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";

export const ProductCard = (props) => {
  const { name, price, src, stock, id } = props;
  const clickAddToCart = () => {
    if (quantity > 0) {
      alert(`Berhasil menambah ke keranjang! (${quantity} ${name})`);
    } else {
      alert(`Kamu harus menambah minimal 1 item pada ${name}`);
    }
  };

  const [quantity, setQuantity] = useState(0);

  const incrementQty = () => {
    if (quantity === stock) {
      return quantity;
    }
    setQuantity(quantity + 1);
  };
  const decrementQty = () => {
    if (quantity === 0) {
      return quantity;
    }
    setQuantity(quantity - 1);
  };

  // KETIKA MOUNT ATAU PERTAMA KALI KE TRIGGER
  // useEffect(() => {
  //   alert("component did mount");
  // }, []);

  // // UPDATE DIBARENGIN DENGAN MOUNT JUGA: value mana yang mau nge trigger lifcycle ketika di eksekusi, dalam case ini quantity di button
  // useEffect(() => {
  //   alert("component did update");
  // }, [quantity]);

  // useEffect(() => {
  //   // unmount atau ketika component di destroy(tidak dipakai lagi), dalam case ini ketika pindah page
  //   return () => {
  //     alert("component did unmount");
  //   };
  // }, []);

  return (
    <div className="flex flex-col gap-4 p-4 border rounded-md md:max-w-96">
      <Link to={"/product/" + id}>
        <div className="w-full overflow-hidden aspect-square">
          <img src={src} alt="" />
        </div>
        <div>
          <p className="font-bold text-md">{name}</p>
          <p className="text-xl">Rp. {price.toLocaleString("id-ID")}</p>
          <p className="text-muted-foreground">Stok : {stock}</p>
        </div>
      </Link>
      <div>
        <div className="flex items-center justify-between">
          <Button
            disabled={quantity === 0}
            onClick={decrementQty}
            variant="ghost"
            size="icon"
            className="hover:scale-110 hover:bg-sky-300"
          >
            <IoIosRemove />
          </Button>
          <p className="text-xl">{quantity}</p>
          <Button
            disabled={quantity === stock}
            onClick={incrementQty}
            variant="ghost"
            size="icon"
            className="hover:scale-110 hover:bg-sky-300 "
          >
            <IoIosAdd />
          </Button>
        </div>

        <Button
          disabled={!stock}
          onClick={clickAddToCart}
          className="w-full mt-4 bg-sky-600 hover:bg-sky-500"
        >
          {stock > 0 ? "Add To Cart" : "Out of Stock!"}
        </Button>
      </div>
    </div>
  );
};
