import RightTopHeader from '../RightTopHeader'
import AllOrdersPrint from "./AllOrdersPrint"
import AdminFooter from '../EcomerceTab/AdminFooter'


function OrdersRight() {
  return (
    <div className="w-full min-h-[100vh] bg-[#020617]">
        <RightTopHeader />

        <h1 className="px-7 lg:text-[30px] font-semibold mt-7 text-white">Orders</h1>

        <div className="px-7 pt-6">
          <AllOrdersPrint />
        </div>

        <AdminFooter />
    </div>
  )
}

export default OrdersRight