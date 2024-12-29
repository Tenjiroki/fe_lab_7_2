import React from 'react';
import GoodsCard from './GoodsCard';

const Gallery = () => {
  const products = [
    {
      id: 1,
      name: 'Cumin Seeds',
      price: 3.5,
      image: 'https://www.spicekitchenuk.com/cdn/shop/products/CuminSeeds.png?v=1652109795'
    },
    {
      id: 2,
      name: 'Coriander Powder',
      price: 2.8,
      image: 'https://sitarafoods.com/wp-content/uploads/2023/11/coriander-powder-dhaniya-Sitara-Foods.jpeg'
    },
    {
      id: 3,
      name: 'Turmeric Root',
      price: 5.0,
      image: 'https://growhoss.com/cdn/shop/products/turmeric-new2023.jpg?v=1701876503'
    },
    {
      id: 4,
      name: 'Ginger Powder',
      price: 4.2,
      image: 'https://cdn.prod.website-files.com/61b94df587eced2bbd705326/6454902aa93f2964e77a72ac_634defb8c65607e18fe5a892_Ginger%2520Powder.webp'
    },
    {
      id: 5,
      name: 'Chili Flakes',
      price: 1.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1tcihbGrhYS1k8sN02tdQDx1KPVtq-rCyQ&s'
    },
    {
      id: 6,
      name: 'Black Peppercorns',
      price: 6.0,
      image: 'https://www.foodandwine.com/thmb/1txeEk500n5rDe8jdgAlFaZ6HBk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/The-Power-of-Pepper-FT-MAG0323-bddac68dc6324f8fbb7ba20a3a75d25e.jpg'
    }
  ];

  return (
    <div className="gallery">
      {products.map((product) => (
        <GoodsCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Gallery;
