import LeftSidebar from '../../components/Admin/LeftSidebar'
import AdminProfileCom from '../../components/Admin/profile/AdminProfileCom'

const AdminProfile = () => {
  return (
    <div className="w-full h-auto flex items-stretch">
      <LeftSidebar />
      <AdminProfileCom />
    </div>
  )
}

export default AdminProfile
