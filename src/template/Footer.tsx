import {
  HiMap,
  HiMiniPhone,
  HiMiniChatBubbleBottomCenterText,
} from "react-icons/hi2";

export const Footer = () => {
  return (
    <div className="bg-black text-white w-full overflow-hidden">
      <div className=" flex justify-evenly items-center flex-col md:flex-row gap-2">
        <div className="w-full md:w-[350px]">
          <div>
            <p className="text-pink-700 text-2xl">Nell Mart</p>
            <p>Thiên đường mua sắm</p>
          </div>
          <div>
            <div className="flex justify-start items-center gap-x-1">
              <HiMap />
              <p> Thành phố Thủ đức</p>
            </div>
            <div className="flex justify-start items-center gap-x-1">
              <HiMiniPhone />
              <p> 0909629175</p>
            </div>
            <div className="flex justify-start items-center gap-x-1">
              <HiMiniChatBubbleBottomCenterText />
              <p>testiqag@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[450px]">
          <div className="flex justify-start items-center gap-x-1">
            <p>Mã số doanh nghiệp</p>
            <p>0315532495 cấp ngày 28/02/2020.</p>
          </div>
          <div className="flex justify-start items-center gap-x-1">
            <p>Nơi cấp</p>
            <p>SỞ KẾ HOẠCH VÀ ĐẦU TƯ THÀNH PHỐ HỒ CHÍ MINH</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-x-1 flex-col md:flex-row w-full md:w-[450px]">
          <p>© 2024 - MBTI.vn. All rights reserved.</p>
          <p>Chính sách và điều khoản</p>
        </div>
      </div>
    </div>
  );
};
