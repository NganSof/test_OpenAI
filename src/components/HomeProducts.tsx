import { useEffect, useState } from "react";
import { isProduct, Products } from "../mock/Products";
import { useSelector } from "react-redux";
import { Product } from "./Product";

const HomeProducts = () => {
  // lấy ds từ redux sau
  const [products, setProducts] = useState<isProduct[]>([]);

  const mockData = useSelector((state: any) => state.mockData.Products);
  const [showMore, setShowMore] = useState<boolean>(false);

  useEffect(() => {
    if (mockData) setProducts(mockData);
  }, [mockData]);

  const handleShowProducts = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex justify-between items-center bg-slate-600 w-full flex-col p-2">
      <div className="flex justify-evenly items-center flex-wrap  gap-x-2 gap-y-1">
        {products
          ?.slice(0, showMore ? 4 : Products.length)
          .map((items: isProduct, indPro: number) => {
            return <Product itemProduct={items} index={indPro} />;
          })}
      </div>

      <button
        onClick={handleShowProducts}
        className="bg-red-600 mt-2 hover:border w-36 h-10 overflow-hidden hover:border-white outline-none rounded-md p-2 hover:bg-red-400 hover:shadow-lg hover:text-white"
      >
        {showMore ? "Hiển thị thêm" : "Ẩn bớt"}
      </button>
    </div>
  );
};

export default HomeProducts;
