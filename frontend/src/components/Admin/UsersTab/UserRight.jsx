import AdminFooter from '../EcomerceTab/AdminFooter';
import RightTopHeader from '../RightTopHeader'
import AllUserTable from './AllUsers';


function UserRight() {
  return (
    <div className="bg-[#020617] w-full h-auto pb-10 min-h-[100vh]  text-white">
       <RightTopHeader />
       <h1 className="px-7 lg:text-[30px] font-semibold mt-7">Users</h1>

      <div className="px-7 pt-5">
         <AllUserTable />
         <AdminFooter />
      </div>
    </div>
  )
}

export default UserRight;