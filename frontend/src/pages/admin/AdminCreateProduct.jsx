import CreateProduRight from "../../components/Admin/CreateProTab/CreateProduRight"
import LeftSidebar from "../../components/Admin/LeftSidebar"




function AdminUsers() {
  return (
    <div className="w-full h-auto flex items-stretch">
      <LeftSidebar />
     <CreateProduRight />
    </div>
  )
}

export default AdminUsers