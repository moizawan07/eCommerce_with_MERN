import DameCards from       "../ProductCard"
import FlashSaleHeader from "./FlashSaleHeader" 
import ViewProductsBtn from "./ViewProductsBtn";

const products = [
    {
      discount: '-5%',
      imageUrl: '/assets/slide3.png', // Replace with actual image URL
      title: 'Camera',
      oldPrice: 550,
      newPrice: 500,
      rating: 4.3,
      reviews: 82,
      btnHide : true
    },
    {
      discount: '-25%',
      imageUrl: '/assets/slide1.png', // Replace with actual image URL
      title: 'Laptap keyboard',
      oldPrice: 1360,
      newPrice: 900,
      rating: 3.8,
      reviews: 62,
      btnHide : true
    },
    {
      discount: '-10%',
      imageUrl: '/assets/slide5.png', // Replace with actual image URL
      title: 'headPhone',
      oldPrice: 600,
      newPrice: 450,
      rating: 3.1,
      reviews: 150,
      btnHide : true
    },
    {
      discount: '-16%',
      imageUrl: '/assets/slide2.png', // Replace with actual image URL
      title: 'Gaming Remote',
      oldPrice: 3000,
      newPrice: 1550,
      rating: 5.7,
      reviews: 75,
      btnHide : true
    },
    {
      discount: '-25%',
      imageUrl: '/assets/slide4.png', // Replace with actual image URL
      title: 'watch',
      oldPrice: 6500,
      newPrice: 4550,
      rating: 3,
      reviews: 45,
      btnHide : true
    },
    {
      discount: '-35%',
      imageUrl: '/assets/slide1.png', // Replace with actual image URL
      title: 'mobile',
      oldPrice: 50000,
      newPrice: 42000,
      rating: 6.7,
      reviews: 36,
      btnHide : true
    },
    {
      discount: '-7%',
      imageUrl: '/assets/slide2.png', // Replace with actual image URL
      title: 'creative',
      oldPrice: 4500,
      newPrice: 3900,
      rating: 5.7,
      reviews: 75,
      btnHide : true
    },
    {
      discount: '-36%',
      imageUrl: '/assets/slide4.png', // Replace with actual image URL
      title: 'creative',
      oldPrice: 2300,
      newPrice: 3600,
      rating: 4.5,
      reviews: 73,
      btnHide : true
    },
  ];

function ExploreProduct() {
  return (
     <>
       <FlashSaleHeader title='Our Products' description='Explore Our Products'/>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:px-8 py-10 px-4">
         {products.map((product, index) => {
           return <DameCards
            key={index} 
            {...product}
            />
         })}
       </div>
       <ViewProductsBtn />
    </>
  )
}

export default ExploreProduct