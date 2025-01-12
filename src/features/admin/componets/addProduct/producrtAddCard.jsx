import React from "react";

const ProducrtAddCard = () => {
  return (
    <div className="flex flex-col gap-4 items-center border-2 border-gray-200 p-4 mb-16 rounded-lg"> 
      <input
        type="text"
        placeholder="Бүтээгдэхүүний нэр..."
        className="input input-bordered w-full max-w-xs bg-white lg:w-screen"
      />
      <input
        type="text"
        placeholder="Бүтээгдэхүүний үнэ..."
        className="input input-bordered w-full max-w-xs bg-white"
      />
      <input
        type="text"
        placeholder="Зургийн линк..."
        className="input input-bordered w-full max-w-xs bg-white"
      />
      <input
        type="text"
        placeholder="Мэдээлэл..."
        className="input input-bordered w-full max-w-xs bg-white"
      />
      <input
        type="text"
        placeholder="Брэнд..."
        className="input input-bordered w-full max-w-xs bg-white"
      />
      <input
        type="text"
        placeholder="Категори..."
        className="input input-bordered w-full max-w-xs bg-white"
      />
    </div>
  );
};

export default ProducrtAddCard;
