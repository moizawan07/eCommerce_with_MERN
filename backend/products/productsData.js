const productData = [
  {
    discount: "-5%",
    imageUrl: "Pmobile2.png", // iPhone 13 (Blue)
    title: "iPhone 13 Blue 128GB",
    oldPrice: 270000,
    newPrice: 256000,
    rating: 5,
    reviews: 103,
    category: "phones",
  },
  {
    discount: "-6%",
    imageUrl: "Pmobile3.png", // iPhone 13 (Pink)
    title: "iPhone 13 Pink 128GB",
    oldPrice: 270000,
    newPrice: 254999,
    rating: 5,
    reviews: 97,
    category: "phones",
  },
  {
    discount: "-8%",
    imageUrl: "Pmobile5.png", // Samsung Galaxy Z Flip (guess)
    title: "Samsung Galaxy Z Flip 4",
    oldPrice: 190000,
    newPrice: 175000,
    rating: 4,
    reviews: 42,
    category: "phones",
  },
  {
    discount: "-9%",
    imageUrl: "Pmobile7.png", // Samsung Galaxy S21 Ultra
    title: "Samsung Galaxy S21 Ultra",
    oldPrice: 205000,
    newPrice: 186000,
    rating: 5,
    reviews: 88,
    category: "phones",
  },
  {
    discount: "-8%",
    imageUrl: "Pheadphone2.png",
    title: "JBL Tune 510BT",
    oldPrice: 12000,
    newPrice: 11040,
    rating: 4,
    reviews: 275,
    category: "headphones",
  },
  {
    discount: "-6%",
    imageUrl: "Pmobile9.png", // Samsung A52 (Guess)
    title: "Samsung Galaxy A52",
    oldPrice: 78000,
    newPrice: 73500,
    rating: 4,
    reviews: 34,
    category: "phones",
  },
  {
    discount: "-7%",
    imageUrl: "Pmobile11.png", // Google Pixel 6 (guess)
    title: "Google Pixel 6",
    oldPrice: 98000,
    newPrice: 89999,
    rating: 5,
    reviews: 61,
    category: "phones",
  },
  {
    discount: "-10%",
    imageUrl: "Plaptop1.png",
    title: "ASUS ROG G15",
    oldPrice: 290000,
    newPrice: 260000,
    rating: 5,
    reviews: 112,
    category: "laptops",
  },
  {
    discount: "-7%",
    imageUrl: "Pmobile12.png", // Google Pixel 6a (guess)
    title: "Google Pixel 6a",
    oldPrice: 88000,
    newPrice: 81999,
    rating: 4,
    reviews: 58,
    category: "phones",
  },
  {
    discount: "-6%",
    imageUrl: "Plaptop2.png",
    title: "Dell XPS 13",
    oldPrice: 310000,
    newPrice: 291000,
    rating: 5,
    reviews: 85,
    category: "laptops",
  },
  {
    discount: "-6%",
    imageUrl: "Pmobile13.png", // Google Pixel 5 (guess)
    title: "Google Pixel 5",
    oldPrice: 75000,
    newPrice: 69999,
    rating: 4,
    reviews: 47,
    category: "phones",
  },
  {
    discount: "-8%",
    imageUrl: "Plaptop3.png",
    title: "HP Spectre x360",
    oldPrice: 285000,
    newPrice: 262200,
    rating: 4,
    reviews: 74,
    category: "laptops",
  },
  {
    discount: "-10%",
    imageUrl: "Pmobile14.png", // Google Pixel 7 Pro
    title: "Google Pixel 7 Pro",
    oldPrice: 165000,
    newPrice: 149999,
    rating: 5,
    reviews: 109,
    category: "phones",
  },
  {
    discount: "-9%",
    imageUrl: "Plaptop5.png",
    title: "Acer Predator",
    oldPrice: 245000,
    newPrice: 222000,
    rating: 5,
    reviews: 94,
    category: "laptops",
  },
  {
    discount: "-9%",
    imageUrl: "Pwatch5.png",
    title: "Fire-Boltt Max",
    oldPrice: 13000,
    newPrice: 11830,
    rating: 4,
    reviews: 130,
    category: "smart watch",
  },
  {
    discount: "-8%",
    imageUrl: "Plaptop7.png",
    title: "Dell Inspiron",
    oldPrice: 125000,
    newPrice: 115000,
    rating: 4,
    reviews: 48,
    category: "laptops",
  },
  {
    discount: "-5%",
    imageUrl: "Fcamera2.png",
    title: "Nikon D3500", // product-specific title
    oldPrice: 45000,
    newPrice: 42750,
    rating: 4,
    reviews: 110,
    category: "camera",
  },
  {
    discount: "-7%",
    imageUrl: "Fcamera1.png",
    title: "Canon EOS R", // product-specific title
    oldPrice: 330000,
    newPrice: 306900,
    rating: 5,
    reviews: 122,
    category: "camera",
  },
  {
    discount: "-8%",
    imageUrl: "Pwatch4.png",
    title: "Boat Xtend Pro",
    oldPrice: 12000,
    newPrice: 11040,
    rating: 3,
    reviews: 95,
    category: "smart watch",
  },
  {
    discount: "-7%",
    imageUrl: "Plaptop8.png",
    title: "MacBook Air M2",
    oldPrice: 330000,
    newPrice: 306900,
    rating: 5,
    reviews: 122,
    category: "laptops",
  },
  
  
  {
    discount: "-11%",
    imageUrl: "Pgamingcon5.png",
    title: "Enter GX 200",
    oldPrice: 4300,
    newPrice: 3827,
    rating: 4,
    reviews: 120,
    category: "gaming",
  },
  
  {
    discount: "-6%",
    imageUrl: "Fcamera6.png",
    title: "Olympus OM-D", // product-specific title
    oldPrice: 60000,
    newPrice: 56400,
    rating: 4,
    reviews: 130,
    category: "camera",
  },
  
  {
    discount: "-5%",
    imageUrl: "Fcamera4.png",
    title: "Fujifilm X-T4", // product-specific title
    oldPrice: 120000,
    newPrice: 114000,
    rating: 4,
    reviews: 80,
    category: "camera",
  },
  
  {
    discount: "-12%",
    imageUrl: "Pheadphone3.png",
    title: "Realme Buds Q2",
    oldPrice: 9000,
    newPrice: 7920,
    rating: 4,
    reviews: 198,
    category: "headphones",
  },
  {
    discount: "-10%",
    imageUrl: "Pmobile1.png",
    title: "Samsung Galaxy A23",
    oldPrice: 28000,
    newPrice: 25000,
    rating: 4,
    reviews: 56,
    category: "phones",
  },
  {
    discount: "-8%",
    imageUrl: "Fcamera5.png",
    title: "GoPro Hero 9", // product-specific title
    oldPrice: 55000,
    newPrice: 50600,
    rating: 5,
    reviews: 150,
    category: "camera",
  },
  
  {
    discount: "-6%",
    imageUrl: "Plaptop6.png",
    title: "HP Pavilion 14",
    oldPrice: 135000,
    newPrice: 126900,
    rating: 4,
    reviews: 53,
    category: "laptops",
  },
  
  {
    discount: "-10%",
    imageUrl: "Pheadphone1.png",
    title: "boAt Rockerz 450",
    oldPrice: 15000,
    newPrice: 13500,
    rating: 4,
    reviews: 320,
    category: "headphones",
  },
  {
    discount: "-15%",
    imageUrl: "Pheadphone4.png",
    title: "Redmi SonicBass",
    oldPrice: 8500,
    newPrice: 7225,
    rating: 3,
    reviews: 145,
    category: "headphones",
  },
  {
    discount: "-10%",
    imageUrl: "Fcamera3.png",
    title: "Sony Alpha 7", // product-specific title
    oldPrice: 80000,
    newPrice: 72000,
    rating: 5,
    reviews: 98,
    category: "camera",
  },
  {
    discount: "-10%",
    imageUrl: "Pheadphone5.png",
    title: "Noise One",
    oldPrice: 10000,
    newPrice: 9000,
    rating: 4,
    reviews: 160,
    category: "headphones",
  },
  {
    discount: "-7%",
    imageUrl: "Pheadphone6.png",
    title: "Zebronics Zeb-Rush",
    oldPrice: 7500,
    newPrice: 6975,
    rating: 4,
    reviews: 120,
    category: "headphones",
  },
  
  {
    discount: "-10%",
    imageUrl: "Pgamingcon1.png",
    title: "Redgear Blaze",
    oldPrice: 5000,
    newPrice: 4500,
    rating: 4,
    reviews: 105,
    category: "gaming",
  },
  {
    discount: "-15%",
    imageUrl: "Pwatch3.png",
    title: "NoiseFit Halo",
    oldPrice: 14000,
    newPrice: 11900,
    rating: 4,
    reviews: 150,
    category: "smart watch",
  },
  {
    discount: "-12%",
    imageUrl: "Pgamingcon2.png",
    title: "Quantum Pad",
    oldPrice: 4500,
    newPrice: 3960,
    rating: 3,
    reviews: 98,
    category: "gaming",
  },
  {
    discount: "-9%",
    imageUrl: "Pmobile8.png", // Samsung Galaxy S21 Ultra (Red)
    title: "Samsung Galaxy S21 Ultra Red",
    oldPrice: 207000,
    newPrice: 187999,
    rating: 5,
    reviews: 76,
    category: "phones",
  },
  {
    discount: "-8%",
    imageUrl: "Pgamingcon4.png",
    title: "Ant Play Pro",
    oldPrice: 4700,
    newPrice: 4324,
    rating: 3,
    reviews: 88,
    category: "gaming",
  },
  
  {
    discount: "-12%",
    imageUrl: "Pwatch1.png",
    title: "Apple Watch SE",
    oldPrice: 15000,
    newPrice: 13200,
    rating: 5,
    reviews: 210,
    category: "smart watch",
  },
  {
    discount: "-9%",
    imageUrl: "Pgamingcon3.png",
    title: "Cosmic Fury",
    oldPrice: 4000,
    newPrice: 3640,
    rating: 4,
    reviews: 115,
    category: "gaming",
  },
  {
    discount: "-10%",
    imageUrl: "Pwatch2.png",
    title: "Galaxy Watch 4",
    oldPrice: 18000,
    newPrice: 16200,
    rating: 4,
    reviews: 180,
    category: "smart watch",
  },
  {
    discount: "-7%",
    imageUrl: "Plaptop4.png",
    title: "Lenovo IdeaPad",
    oldPrice: 180000,
    newPrice: 167400,
    rating: 4,
    reviews: 62,
    category: "laptops",
  },
];


// Upadted Product Data 
const updatedProductData = productData.map((product) => {
  
  if(product.newPrice == "254999" || product.newPrice == "16200" ||
    product.newPrice == "4500"    || product.newPrice == "7920" ||
    product.newPrice == "167400"  || product.newPrice == "50600" || product.newPrice == "187999" ){
      
      return {...product, inStock : false}
    }
    
    return  {...product, inStock : true}
})



module.exports = updatedProductData



