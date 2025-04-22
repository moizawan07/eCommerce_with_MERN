import  DameCards from '../ProductCard'
import ViewProductsBtn from './ViewProductsBtn';
const StaticCardPage = () => {
  const products = [
    {
      discount: '-40%',
      imageUrl: '/assets/Stgamingc2.png', // Replace with actual image URL
      title: 'Gaming Controller',
      oldPrice: 3000,
      newPrice: 2400,
      rating: 4.5,
      reviews: 88,
      btnHide : true,
    },
    {
      discount: '-35%',
      imageUrl: '/assets/Stphone2.png', // Replace with actual image URL
      title: 'Mobile',
      oldPrice: 95600,
      newPrice: 85000,
      rating: 4.0,
      reviews: 75,
      btnHide : true
    },
    {
      discount: '-30%',
      imageUrl: '/assets/Stlaptop2.png', // Replace with actual image URL
      title: 'Laptop',
      oldPrice: 55500,
      newPrice: 49500,
      rating: 3.5,
      reviews: 99,
      btnHide : true
    },
    {
      discount: '-25%',
      imageUrl: '/assets/Stheadp1.png', // Replace with actual image URL
      title: 'Head Phone',
      oldPrice: 3500,
      newPrice: 2200,
      rating: 4.8,
      reviews: 99,
      btnHide : true
    },
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-8">
        {products.map((product, index) => (
          <DameCards key={index} {...product} />
        ))}
      </div>
        <ViewProductsBtn />
      {/* Speaker Img */}
      <div className='flex justify-center mt-15 w-full'>
        <img className='w-full rounded-2xl' src="/assets/speaker.png" alt="Big Speaker" />
      </div>
    </div>
  );
};

export default StaticCardPage;