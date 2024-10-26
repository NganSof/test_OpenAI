import { useState } from "react";
import { isType } from "../mock/Products";

interface isChildrenType {
  itemType: isType;
  index: number;
  id: number;
  chooseGB: any;
  chooseItem: any;
  setChooseGB: any;
}

const TypeProduct: React.FC<isChildrenType> = ({
  itemType,
  index,
  id,
  chooseGB,
  chooseItem,
  setChooseGB,
}) => {
  const { gb, idType } = itemType;

  return (
    <div className="flex justify-around items-center">
      <div
        key={idType}
        onClick={() => {
          setChooseGB(idType);
        }}
      >
        <p
          className={`w-20 cursor-pointer rounded-lg p-2 gap-1 
           ${
             chooseGB === idType
               ? "bg-red-400"
               : chooseItem === id
               ? "bg-red-700"
               : "bg-white"
           }
          `}
        >
          GB: {gb}
        </p>
      </div>
    </div>
  );
};

export default TypeProduct;
