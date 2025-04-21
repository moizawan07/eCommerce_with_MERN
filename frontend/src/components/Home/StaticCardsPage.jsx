import  DameCards from '../ProductCard'
import ViewProductsBtn from './ViewProductsBtn';
const StaticCardPage = () => {
  const products = [
    {
      discount: '-40%',
      imageUrl: '/assets/slide1.png', // Replace with actual image URL
      title: 'HAVIT HV-G92 Gamepad',
      oldPrice: 160,
      newPrice: 120,
      rating: 4.5,
      reviews: 88,
      btnHide : true,
    },
    {
      discount: '-35%',
      imageUrl: '/assets/slide2.png', // Replace with actual image URL
      title: 'AK-900 Wired Keyboard',
      oldPrice: 1160,
      newPrice: 960,
      rating: 4.0,
      reviews: 75,
      btnHide : true
    },
    {
      discount: '-30%',
      imageUrl: '/assets/slide3.png', // Replace with actual image URL
      title: 'IPS LCD Gaming Monitor',
      oldPrice: 400,
      newPrice: 370,
      rating: 3.5,
      reviews: 99,
      btnHide : true
    },
    {
      discount: '-25%',
      imageUrl: '/assets/slide4.png', // Replace with actual image URL
      title: 'S-Series Comfort Chair',
      oldPrice: 400,
      newPrice: 375,
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