import React from "react";
import Head from "../../../shared/components/Nav/head";
import Category from "../../../shared/components/Nav/category";
import Main from "../components/main";
import Footer from "../../../shared/components/footer";  

const Home = () => {
  return (
    <div className="w-full h-fit md:p-0 flex flex-col items-center bg-[#f6f6f6]">
      <Head />
      <Category />
      <div className=" w-full max-w-[1440px] flex flex-col">
        <Main />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
