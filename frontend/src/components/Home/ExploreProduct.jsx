import DameCards from       "../ProductCard"
import FlashSaleHeader from "./FlashSaleHeader" 
import ViewProductsBtn from "./ViewProductsBtn";

const products = [
    {
      discount: '-5%',
      imageUrl: '/assets/Stlaptop1.png', // Replace with actual image URL
      title: 'Laptop',
      oldPrice: 75000,
      newPrice: 69000,
      rating: 4.3,
      reviews: 82,
      btnHide : true
    },
    {
      discount: '-25%',
      imageUrl: '/assets/Stwatch2.png', // Replace with actual image URL
      title: 'Head Phone',
      oldPrice: 2760,
      newPrice: 1850,
      rating: 3.8,
      reviews: 62,
      btnHide : true
    },
    {
      discount: '-36%',
      imageUrl: '/assets/Stgamingc2.png', // Replace with actual image URL
      title: 'Gaming Controller',
      oldPrice: 4500,
      newPrice: 3800,
      rating: 4.5,
      reviews: 73,
      btnHide : true
    },
    {
      discount: '-10%',
      imageUrl: '/assets/Stphone1.png', // Replace with actual image URL
      title: 'Phone',
      oldPrice: 32000,
      newPrice: 29500,
      rating: 3.1,
      reviews: 150,
      btnHide : true
    },
    {
      discount: '-25%',
      imageUrl: '/assets/Stphone3.png', // Replace with actual image URL
      title: 'Phone',
      oldPrice: 22500,
      newPrice: 20500,
      rating: 3,
      reviews: 45,
      btnHide : true
    },
    {
      discount: '-35%',
      imageUrl: '/assets/Stlaptop3.png', // Replace with actual image URL
      title: 'Tablet',
      oldPrice: 50000,
      newPrice: 42000,
      rating: 6.7,
      reviews: 36,
      btnHide : true
    },
    {
      discount: '-7%',
      imageUrl: '/assets/Stwatch3.png', // Replace with actual image URL
      title: 'Phone',
      oldPrice: 45000,
      newPrice: 39000,
      rating: 5.7,
      reviews: 75,
      btnHide : true
    },
    {
      discount: '-16%',
      imageUrl: '/assets/Stheadp2.png', // Replace with actual image URL
      title: 'Head Phone',
      oldPrice: 3000,
      newPrice: 1850,
      rating: 5.7,
      reviews: 75,
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