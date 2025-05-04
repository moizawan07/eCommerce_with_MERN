import OrdersRight from "../../components/Admin/orders/OrdersRight"
import LeftSidebar from '../../components/Admin/LeftSidebar'

const AdminOrders = () => {
  return (
    <div className="w-full h-auto flex items-stretch">
      <LeftSidebar />
    <OrdersRight/>
    </div>
  )
}

export default AdminOrders
