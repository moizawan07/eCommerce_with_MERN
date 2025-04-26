import AdminFooter from '../EcomerceTab/AdminFooter'
import RightTopHeader from '../RightTopHeader'
import CreateProductForm from './CreateForm'


function CreateProduRight() {
  return (
    <div className="bg-[#020617] w-full h-auto pb-10 min-h-[100vh]  text-white">
    <RightTopHeader />
    <h1 className="px-7 lg:text-[30px] font-semibold mt-7">Create Products</h1>

    <div className='px-7 pt-5'>
         <CreateProductForm />
        <AdminFooter />
    </div>
 </div>
  )
}

export default CreateProduRight