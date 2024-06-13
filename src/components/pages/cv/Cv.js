import { useEffect, useState } from "react";
import React from "react";
import curriculum from "./curriculum";

function Cv() {
  const [data, setData] = useState();

  useEffect(() => {
    setData(curriculum);
}, []);
console.log(data);

  return (
    <h1>Hola cv</h1>
  );
};

export default Cv;