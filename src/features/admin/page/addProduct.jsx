import React from "react";
import ProductNemeh from "../componets/addProduct/productNemeh";
import Footer from "../../../shared/components/footer";
import Layout from "../componets/layout";

const AddProduct = () => {
  return (
    <Layout>
      <div className="p-[30px] my-36  flex flex-col w-full gap-8 lg:my-6 lg:px-52 lg:h-fit lg:right-1 lg:absolute lg:w-5/6">
        <ProductNemeh />
      </div>
      {/* <Footer /> */}
    </Layout>
  );
};

export default AddProduct;
