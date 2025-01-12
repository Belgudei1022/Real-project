import React from "react";
import ProducrtAddCard from "../componets/addProduct/producrtAddCard";
import ProductCard from "../../home/components/productCard";
import Layout from "../componets/layout";
import { useProducts } from "../componets/ProductProvider";

const AddProduct = () => {
  const { products, setProducts } = useProducts();

  const addProduct = (newProduct) => {
    if (
      newProduct &&
      newProduct.title &&
      newProduct.price &&
      newProduct.description
    ) {
      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    } else {
      console.error("Талбарыг бүгдийг бөглөнө үү!", newProduct);
    }
  };

  return (
    <Layout>
      <div className="p-[30px] my-36 flex flex-col w-full gap-8 lg:my-6 lg:px-52 lg:h-fit lg:right-1 lg:absolute lg:w-5/6">
        <h1 className="font-bold text-2xl">Бүтээгдэхүүн нэмэх</h1>
        <ProducrtAddCard onAddProduct={addProduct} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} el={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;