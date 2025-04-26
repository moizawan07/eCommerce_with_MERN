import LeftSidebar from "../../components/Admin/LeftSidebar"
import UserRight from "../../components/Admin/UsersTab/UserRight"


function AdminUsers() {
  return (
    <div className="w-full h-auto flex items-stretch">
      <LeftSidebar />
      <UserRight />
    </div>
  )
}

export default AdminUsers