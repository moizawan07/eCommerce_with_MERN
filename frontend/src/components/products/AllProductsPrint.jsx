import ProductCard from '../ProductCard'

function AllProductsPrint() {

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[15px] gap-y-[40px] px-10 mt-10  mb-25'>
       <ProductCard title='hello' imageUrl='/assets/slide2.png' oldPrice='2500' newPrice='2000' reviews='5' rating={7}/>
       <ProductCard title='hello' imageUrl='/assets/slide2.png' oldPrice='2500' newPrice='2000' reviews='5' rating={7}/>
       <ProductCard title='hello' imageUrl='/assets/slide2.png' oldPrice='2500' newPrice='2000' reviews='5' rating={7}/>
       <ProductCard title='hello' imageUrl='/assets/slide2.png' oldPrice='2500' newPrice='2000' reviews='5' rating={7}/>
       <ProductCard title='hello' imageUrl='/assets/slide2.png' oldPrice='2500' newPrice='2000' reviews='5' rating={7}/>
       <ProductCard title='hello' imageUrl='/assets/slide2.png' oldPrice='2500' newPrice='2000' reviews='5' rating={7}/>
       <ProductCard title='hello' imageUrl='/assets/slide2.png' oldPrice='2500' newPrice='2000' reviews='5' rating={7}/>
       <ProductCard title='hello' imageUrl='/assets/slide2.png' oldPrice='2500' newPrice='2000' reviews='5' rating={7}/>
       <ProductCard title='hello' imageUrl='/assets/slide2.png' oldPrice='2500' newPrice='2000' reviews='5' rating={7}/>
       <ProductCard title='hello' imageUrl='/assets/slide2.png' oldPrice='2500' newPrice='2000' reviews='5' rating={7}/>
       <ProductCard title='hello' imageUrl='/assets/slide2.png' oldPrice='2500' newPrice='2000' reviews='5' rating={7}/>
       <ProductCard title='hello' imageUrl='/assets/slide2.png' oldPrice='2500' newPrice='2000' reviews='5' rating={7}/>
    </div>
  )
}

export default AllProductsPrint