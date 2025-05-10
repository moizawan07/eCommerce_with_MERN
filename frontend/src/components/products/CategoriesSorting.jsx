import FlashSaleHeader from "../Home/FlashSaleHeader";
import CategoryCard from "./CategoryCard";
// Icons

import { TfiMobile } from "react-icons/tfi"
import { TbDeviceWatchExclamation } from "react-icons/tb";
import { CiCamera } from "react-icons/ci";
import { AiOutlineDesktop } from 'react-icons/ai';
import { CiHeadphones } from "react-icons/ci";
import { PiGameControllerThin } from "react-icons/pi";
import { t } from "i18next";




function CategoriesSorting() {

const categories = [
    { name: t('categorySorting.second'), icon: TfiMobile },
    { name: 'Computers', icon: AiOutlineDesktop },
    { name: 'SmartWatch', icon: TbDeviceWatchExclamation },
    { name: 'Camera', icon: CiCamera },
    { name: 'HeadPhones', icon: CiHeadphones },
    { name: 'Gaming', icon: PiGameControllerThin },
];
// console.log("moiz" ,categories[0]);

  return (
    <div>
      <FlashSaleHeader title="Categories" description="Browse by Category" />

      {/* Categories Print Like Mobile Tablets Headphones Us ka Mian Div */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">

            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesSorting;
