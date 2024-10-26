import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { isProduct } from "../mock/Products";
import { itemPro } from "../store/ProductSlice";

const ItemProducts: React.FC = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const dispatch = useDispatch();
  const itemId = Number(query.get("id"));

  const [itemProduct, setItemProduct] = useState<isProduct>();

  const mockData = useSelector((state: any) => state.mockData);

  useEffect(() => {
    dispatch(itemPro(itemId));
  }, []);

  useEffect(() => {
    if (mockData) setItemProduct(mockData.selecItem);
  }, [mockData]);

  return (
    <div
      key={itemId}
      className="bg-red-300 text-black flex justify-center items-center p-2 flex-col gap-y-1"
    >
      <div className="w-full">Mã sản phẩm: {itemProduct?.id}</div>
      <div className="w-full">Tên sản phẩm: {itemProduct?.name}</div>
      <div className="w-full">Số lượng còn: {itemProduct?.quanlity}</div>
      <div className="">
        <img
          src={itemProduct?.picture}
          alt={`itemId`}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ItemProducts;
