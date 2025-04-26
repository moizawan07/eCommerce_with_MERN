import LeftSidebar from "../../components/Admin/LeftSidebar"
import ProductsRight from "../../components/Admin/ProductsTab/ProductsRight"



function AdminUsers() {
  return (
    <div className="w-full h-auto flex items-stretch">
      <LeftSidebar />
      <ProductsRight />
    </div>
  )
}

export default AdminUsers