import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.products || []);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    setIsDropdownVisible(query.trim() !== "");

    if (query.trim() !== "") {
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setItems(data.products || []);
        })
        .catch((error) => console.error("Error fetching products:", error));
    } else {
      setItems([]);
    }
  };

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="relative flex w-full items-center justify-between gap-8"
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}
    >
      <div className="relative w-full max-w-[400px] flex gap-8">
        <input
          type="text"
          placeholder="нэр, категооиор хай"
          value={searchTerm}
          onChange={handleSearch}
          onFocus={() => setIsDropdownVisible(searchTerm.trim() !== "")}
          onBlur={() => setTimeout(() => setIsDropdownVisible(false), 150)}
          className="w-full bg-white rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <img
          src="/src/assets/search-svgrepo-com (1).svg"
          alt="Search Icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
        />
      </div>
      {isDropdownVisible && (
        <ul
          className="absolute top-12 w-full bg-white shadow-md rounded-lg max-h-[300px] overflow-y-auto"
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 border-b last:border-none"
              >
                {item.title} -{" "}
                <span className="text-gray-500">{item.category}</span>
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

Search.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ),
};

export default Search;