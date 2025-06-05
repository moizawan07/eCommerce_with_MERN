import { useEffect, useState } from "react"
import RightTopHeader from "../RightTopHeader"
import AdminFooter from "./AdminFooter"
import EcomCards from "./EcomCards"
import OverviewChart from "./OverviewChart"
import RecentSales from "./RecentSales"
import TopOrders from "./TopOrders"


function EcomRightSidebar() {
  let [dashInfo, setdashinfo] = useState(false)

 useEffect(() => {
   fetch('https://ecommercewithmern-production.up.railway.app/admin/analytics', {
    method: 'GET',
    headers: {'authorization' : `bearer ${window.localStorage.getItem('token')}`}
   })
   .then(res => res.json())
   .then(data => setdashinfo(data.data))
   .catch(err => console.error(err))
 },[])

  return (
    <div className="bg-[#020617] w-full h-auto pb-5 min-h-[100vh]  text-white">
     <RightTopHeader />

     <h1 className="px-7 lg:text-[30px] font-semibold mt-7">Dashboard</h1>
     
     {/* All Cards */}
    <div className="w-full px-4 py-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <EcomCards title="Total Products" value={dashInfo.totalProducts} growth="25%" type="products" />
      <EcomCards title="Total  Orders"value={dashInfo.totalOrders} growth="12%" type="orders" />
      <EcomCards title="Total Customers" value={dashInfo.totalUsers} growth="15%" type="customers" />
      <EcomCards title="Sales"value={dashInfo.totalSales} growth="19%" type="sales" />
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

     {/* Footre */}
     <AdminFooter />

    </div>
  )
}

export default EcomRightSidebar