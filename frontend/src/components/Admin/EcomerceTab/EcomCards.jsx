import { FaBox, FaDollarSign, FaUsers, FaCreditCard, } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
const iconMap = {
  products: <FaBox className="text-xl text-[#3B82F6]" />,
  orders: <FaDollarSign className="text-xl text-[#3B82F6]" />,
  customers: <FaUsers className="text-xl text-[#3B82F6]" />,
  sales: <FaCreditCard className="text-xl text-[#3B82F6]" />
};

const EcomCards = ({ title, value, growth, type }) => {
  return (
    <div className="bg-[#0E1628] rounded-xl py-5 px-3 border border-[#334155] shadow-md w-full max-w-sm">
      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-[#132651] p-3 rounded-md">
          {iconMap[type]}
        </div>
        <p className="text-white font-semibold text-[15px]">{title}</p>
      </div>

      <div className="bg-black p-5 rounded-md">

      {/* Value */}
      <h2 className="text-[28px] font-bold text-white mb-3">
        {value < 10 ? '0' + value : value}
      </h2>

      {/* Growth */}
      <div className="flex items-center gap-2 text-[#3B82F6] border-1  border-[#1a52d6] px-4 py-1.5 rounded-full w-max text-sm">
        <IoMdTrendingUp /> 
        <span>{growth}</span>
      </div>
      </div>

    </div>
  );
};

export default EcomCards;
