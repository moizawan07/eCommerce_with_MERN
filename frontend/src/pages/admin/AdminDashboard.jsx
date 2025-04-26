import EcomRightSidebar from "../../components/Admin/EcomerceTab/EcomRightSidebar"
import LeftSidebar from "../../components/Admin/LeftSidebar"


function AdminDashboard() {

    
  return (
    <div className="w-full h-auto flex items-stretch">
     <LeftSidebar />
     <EcomRightSidebar />
    </div>
  )
}

export default AdminDashboard