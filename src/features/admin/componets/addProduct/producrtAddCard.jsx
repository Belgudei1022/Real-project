import React, { useState } from "react";

const ProducrtAddCard = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    images: "",
    description: "",
    brand: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    if (onAddProduct) {
      onAddProduct(formData);
    }
    setFormData({
      id: "",
      title: "",
      price: "",
      images: "",
      description: "",
      brand: "",
      category: "",
    });
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(console.log);
  };

  return (
    <div>
      <div className="flex flex-col gap-4 items-center border-2 border-gray-200 p-4 mb-16 rounded-lg">
        <input
          type="text"
          name="id"
          value={formData.id}
          placeholder="Бүтээгдэхүүний id..."
          className="input input-bordered w-full max-w-xs bg-white lg:w-screen"
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder="Бүтээгдэхүүний нэр..."
          className="input input-bordered w-full max-w-xs bg-white lg:w-screen"
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          value={formData.price}
          placeholder="Бүтээгдэхүүний үнэ..."
          className="input input-bordered w-full max-w-xs bg-white"
          onChange={handleChange}
        />
        <input
          type="text"
          name="images"
          value={formData.images}
          placeholder="Зургийн линк..."
          className="input input-bordered w-full max-w-xs bg-white"
          onChange={handleChange}
        />
        {formData.images && (
          <img
            src={formData.images}
            alt="Product"
            className="w-32 h-32 object-cover"
          />
        )}
        <input
          type="text"
          name="description"
          value={formData.description}
          placeholder="Мэдээлэл..."
          className="input input-bordered w-full max-w-xs bg-white"
          onChange={handleChange}
        />
        <input
          type="text"
          name="brand"
          value={formData.brand}
          placeholder="Брэнд..."
          className="input input-bordered w-full max-w-xs bg-white"
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          placeholder="Категори..."
          className="input input-bordered w-full max-w-xs bg-white"
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-outline" onClick={handleAdd}>
        Нэмэх
      </button>
    </div>
  );
};

export default ProducrtAddCard;