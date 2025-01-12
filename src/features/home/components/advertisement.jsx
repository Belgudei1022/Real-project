import React, { useEffect, useState } from "react";

const Advertisement = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "https://static.vecteezy.com/system/resources/previews/023/014/948/original/3d-t-shirt-with-black-color-template-free-vector.jpg",
    "https://th.bing.com/th/id/R.243fa0bf7196cf715778364c400d37dd?rik=5cBzTx0lzGJaEA&pid=ImgRaw&r=0",
    "https://www.creativefabrica.com/wp-content/uploads/2022/12/28/Varsity-Jacket-Mockup-on-blue-white-Graphics-54877397-1.jpg",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="flex  gap-2">
        <div className="hidden md:flex md:w-[45%]  h-[30vh] gap-2">
          <div className="carousel w-3/5 rounded-2xl ">
            <img
              src="https://static1.squarespace.com/static/502aab3fe4b0fbae871c6c1f/t/529509b1e4b0ea40d2693093/1385499057298/McDonalds+Fry+billboard_comp.jpg"
              alt=""
              className="w-full object-fill border-[1px] rounded-2xl"
            />
          </div>
          <div className="flex flex-col w-2/5 gap-2">
            <div className="carousel w-full rounded-2xl h-1/2">
              <img
                src="https://www.apetogentleman.com/wp-content/uploads/2020/01/greastestsneakerbrands17.jpg"
                alt=""
                className="w-full object-fill border-[1px] rounded-2xl"
              />
            </div>
            <div className="carousel w-full rounded-2xl h-1/2">
              <img
                src="https://th.bing.com/th/id/R.9e56c56d920ee955d6c17d1efab369ef?rik=uSlMIa5K%2frCDgw&riu=http%3a%2f%2fesq.h-cdn.co%2fassets%2f16%2f48%2f1600x800%2flandscape-1480540651-best-of-4.jpg&ehk=2qF919IQgwtC7qUBEPQHA%2fgQsCAf3RiruN2kKlKNRt4%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="w-full object-fill border-[1px] rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div className="carousel flex items-center justify-center md:w-[55%] ">
          <div className="carousel-item w-full h-[30vh] object-contain">
            <img
              src={images[activeIndex]}
              className="w-full object-fill border-[1px] rounded-2xl"
              alt="Advertisement Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
