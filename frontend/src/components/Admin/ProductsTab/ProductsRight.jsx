import AdminFooter from '../EcomerceTab/AdminFooter'
import RightTopHeader from '../RightTopHeader'
import AllProductList from './AllProducts'

function ProductsRight() {
  return (
    <div className="bg-[#020617] w-full h-auto pb-10 min-h-[100vh]  text-white">
    <RightTopHeader />
    <h1 className="px-7 lg:text-[30px] font-semibold mt-7">Products</h1>

    <div className='px-7 pt-5'>
        <AllProductList />
        <AdminFooter />
    </div>
 </div>
  )
}

export default ProductsRight