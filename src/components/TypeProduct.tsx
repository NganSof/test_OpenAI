import { useSelector } from "react-redux";
import { isType } from "../mock/Products";

interface isChildrenType {
  itemType: isType;

  chooseGB: any;
  chooseItem: any;
  setChooseGB: any;
}

const TypeProduct: React.FC<isChildrenType> = ({
  itemType,

  chooseGB,
  chooseItem,
  setChooseGB,
}) => {
  const numberItem = useSelector((state: any) => state.mockData.chooseNumItem);
  const { gb, idType } = itemType;

  return (
    <div className="flex justify-around items-center mt-1">
      <div
        key={idType}
        onClick={() => {
          setChooseGB(idType);
        }}
      >
        <p
          className={`w-20 cursor-pointer rounded-lg p-2 gap-1 
           ${
             chooseItem === numberItem
               ? idType === chooseGB
                 ? "bg-red-600"
                 : "bg-white"
               : "bg-red-400"
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
