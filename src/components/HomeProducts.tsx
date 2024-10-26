import { useEffect, useState } from "react";
import { isProduct, isType, Products } from "../mock/Products";
import { useDispatch, useSelector } from "react-redux";
import { itemPro } from "../store/ProductSlice";
import TypeProduct from "./TypeProduct";
import { useNavigate } from "react-router-dom";

const HomeProducts = () => {
  // lấy ds từ redux sau
  const [products, setProducts] = useState<isProduct[]>([]);
  const [chooseGB, setChooseGB] = useState<number>(1);
  const [chooseItem, setChooseItem] = useState<number>(1);

  const mockData = useSelector((state: any) => state.mockData.Products);
  const [showMore, setShowMore] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (mockData) setProducts(mockData);
  }, [mockData]);

  const handleShowProducts = () => {
    setShowMore(!showMore);
  };

  const handleItem = (item: number) => {
    dispatch(itemPro(item));
    navigate(`/idPro?id=${item}`);
  };

  return (
    <div className="flex justify-between items-center bg-slate-600 w-full flex-col p-2">
      <div className="flex justify-evenly items-center flex-wrap  gap-x-2 gap-y-1">
        {products
          ?.slice(0, showMore ? 4 : Products.length)
          .map((items: isProduct, indPro: number) => {
            const { id, name, quanlity, picture, type } = items;
            return (
              <div
                key={id}
                className="bg-pink-400 md:w-[450px] w-full p-2 flex justify-between items-center flex-wrap gap-y-1"
              >
                <div className="w-[250px] cursor-pointer">
                  <img
                    className="object-contain"
                    src={picture}
                    alt={`ava${id}`}
                    onClick={() => {
                      handleItem(id);
                    }}
                  />
                </div>
                <div className="flex-1 flex-wrap">
                  <p>Tên sản phẩm: {name}</p>
                  <p>Số lượng:{quanlity}</p>
                  <div className="flex justify-between w-36 flex-wrap items-center">
                    {type?.map((itemType: isType, ind: number) => {
                      return (
                        <div
                          onClick={() => {
                            setChooseItem(id);
                          }}
                          key={itemType.idType}
                          className="gap-2 flex justify-around items-center"
                        >
                          <TypeProduct
                            id={id}
                            index={ind}
                            itemType={itemType}
                            chooseItem={chooseItem}
                            chooseGB={chooseGB}
                            setChooseGB={setChooseGB}
                          />
                        </div>
                      );
                    })}
                    <p>
                      Giá sản phẩm:
                      {chooseItem === id
                        ? items.type[chooseGB - 1].price
                        : items.type[0].price}
                    </p>
                  </div>
                </div>
              </div>
            );
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
