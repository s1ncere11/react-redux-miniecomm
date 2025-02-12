import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";

const productRow = [
  {
    id: 1,
    name: "Kaos Item",
    price: 70000,
    src: "https://contents.mediadecathlon.com/p2157319/k$45a8143f29ae498e05be9c1588d95135/kaos-running-dry-fit-baju-lari-pria-breathable-hitam-decathlon-8488034.jpg?f=1920x0&format=auto",
    stock: 3,
  },
  {
    id: 2,
    name: "Kaos Kerah Kuning",
    price: 110000,
    src: "https://img.id.my-best.com/product_images/9df59c922568fec0e54d0b234fc7bedd.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=52fa69a459e7f214eb67d2b5ca77c2fc",
    stock: 0,
  },
  {
    id: 3,
    name: "Kemeja Biru",
    price: 150000,
    src: "https://www.consina.com/wp-content/uploads/2021/08/Trentino-DBL-2021-1600x1600.jpg",
    stock: 2,
  },
  {
    id: 4,
    name: "Jaket Bomber Kece Abis",
    price: 230000,
    src: "https://spistorage.sgp1.cdn.digitaloceanspaces.com/public/uploads/all/lERMS9ZLvgXbkxFzsuyw5xTA2uNkYoTHnyC21Jvc.jpg",
    stock: 7,
  },
];

const HomePage = () => {
  const products = productRow.map((data) => {
    return (
      <ProductCard
        key={data.id}
        name={data.name}
        price={data.price}
        src={data.src}
        stock={data.stock}
      />
    );
  });
  return (
    <>
      <Header />
      <main className="min-h-[84vh] max-w-screen-xl mx-auto px-4 mt-32">
        <div className="flex flex-col items-center max-w-3xl pb-20 mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-500 sm:text-6xl">
            Belanja dikit untung banyak!
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            illum!
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">{products}</div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
