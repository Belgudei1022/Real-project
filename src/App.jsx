import React, { useEffect, useState } from "react";
import "./App.css";
import UserInformation from "./features/userInformation/pages/userInformation";

function App() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/beauty")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTest(data);
      });
  });
  console.log(test);

  return (
    <>
      <UserInformation />
    </>
  );
}

export default App;
