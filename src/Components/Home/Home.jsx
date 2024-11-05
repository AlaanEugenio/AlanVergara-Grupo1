import React from "react";
import ItemList from "../ItemList/ItemList";

function Inicio() {
  return (
    <>
      <div className="flex flex-col items-center my-8">
        <h1 className="text-3xl font-bold text-white bg-blue-950 p-6 rounded-lg shadow-lg text-center mb-6">
          El cubo que buscas lo tenemos{" "}
        </h1>
        <div>
          <ItemList />
        </div>
      </div>
    </>
  );
}

export default Inicio;
