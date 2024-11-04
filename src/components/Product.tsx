import { FC, useState } from "react";
import { isProduct, isType } from "../mock/Products";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { itemPro, chooseNumItem } from "../store/ProductSlice";
import TypeProduct from "./TypeProduct";

export const Product: FC<{ itemProduct: isProduct; index: number }> = ({
  itemProduct,
  index,
}) => {
  const { id, name, quanlity, picture, type } = itemProduct;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [chooseGB, setChooseGB] = useState<number>(1);
  const [chooseItem, setChooseItem] = useState<number>(1);

  const handleItem = (item: number) => {
    dispatch(itemPro(item));
    navigate(`/idPro?id=${item}`);
  };

  return (
    <div
      key={id}
      className="bg-pink-400 md:w-[450px] w-full p-2 flex justify-between items-center flex-wrap gap-2"
    >
      <div className="md:w-[200px] cursor-pointer w-full">
        <img
          className="object-contain w-full"
          src={picture}
          alt={`ava${index}`}
          onClick={() => {
            handleItem(id);
          }}
        />
      </div>
      <div className="flex-1 flex-wrap ">
        <p>Tên sản phẩm: {name}</p>
        <p>Số lượng:{quanlity}</p>
        <div className="flex justify-between w-36 items-center flex-col md:flex-row md:gap-1">
          {type?.map((itemType: isType) => {
            return (
              <div
                onClick={() => {
                  setChooseItem(id);
                  dispatch(chooseNumItem(id));
                }}
                key={itemType.idType}
                className="flex justify-around items-center"
              >
                <TypeProduct
                  itemType={itemType}
                  chooseItem={chooseItem}
                  chooseGB={chooseGB}
                  setChooseGB={setChooseGB}
                />
              </div>
            );
          })}
        </div>
        <p>
          Giá sản phẩm:
          {chooseItem === id
            ? itemProduct.type[chooseGB - 1].price
            : itemProduct.type[0].price}
        </p>
      </div>
    </div>
  );
};
