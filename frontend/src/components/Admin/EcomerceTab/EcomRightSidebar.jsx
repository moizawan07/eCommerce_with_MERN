import RightTopHeader from "../RightTopHeader"
import EcomCards from "./EcomCards"
import OverviewChart from "./OverviewChart"
import RecentSales from "./RecentSales"
import TopOrders from "./TopOrders"


function EcomRightSidebar() {
  return (
    <div className="bg-[#020617] w-full h-auto pb-10 min-h-[100vh]  text-white">
     <RightTopHeader />

     <h1 className="px-7 lg:text-[30px] font-semibold mt-7">Dashboard</h1>
     
     {/* All Cards */}
    <div className="w-full px-4 py-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <EcomCards title="Total Products" value="25,154" growth="25%" type="products" />
      <EcomCards title="Total Paid Orders" value="$16,000" growth="12%" type="orders" />
      <EcomCards title="Total Customers" value="15,400k" growth="15%" type="customers" />
      <EcomCards title="Sales" value="12,340" growth="19%" type="sales" />
    </div>
 
     {/* Overview Chart */}
     <div className=" w-full px-7 flex lg:justify-between items-center flex-wrap gap-5 justify-center">
     <OverviewChart />
     <RecentSales />
     </div>

     {/* Top Orders */}
     <div className="px-7">
     <TopOrders />
     </div>

    </div>
  )
}

export default EcomRightSidebar