
import { useDispatch } from 'react-redux';
// import React, { useState } from 'react';
// import { addToCart, removeFromCart } from '../Store/cartSlice';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { addToCart } from '../Store/cartSlice';
import { useState } from 'react';
import Button from '../componets/Button';
import { toast, ToastContainer } from 'react-toastify'; // Add this import
import 'react-toastify/dist/ReactToastify.css';
import DynamicText from "./dynamicText";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ButtonGroup from '@mui/material/ButtonGroup';

import React, { useState } from "react";

const Shop = () => {
  // Sample data for demonstration
  const items = [
    { id: 1, name: "Hot Coffee", category: "Hot" },
    { id: 2, name: "Cold Coffee", category: "Cold" },
    { id: 3, name: "Sandwich", category: "Food" },
    { id: 4, name: "Tea", category: "Hot" },
    { id: 5, name: "Iced Tea", category: "Cold" },
    { id: 6, name: "Pizza", category: "Food" },
  ];

  const [filter, setFilter] = useState("All");

  // Filter items based on the selected category
  const filteredItems =
    filter === "All"
      ? items
      : items.filter((item) => item.category === filter);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Coffee Shop</h1>
      
      {/* Filter Buttons */}
      <div className="mb-6 space-x-4">
        <button
          className={`px-4 py-2 rounded ${filter === "Hot" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setFilter("Hot")}
        >
          Hot
        </button>
        <button
          className={`px-4 py-2 rounded ${filter === "Cold" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setFilter("Cold")}
        >
          Cold
        </button>
        <button
          className={`px-4 py-2 rounded ${filter === "Food" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setFilter("Food")}
        >
          Food
        </button>
        <button
          className={`px-4 py-2 rounded ${filter === "All" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
      </div>

      {/* Display Filtered Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-500">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ShopContainer = styled.div`
  padding: 6rem 2rem 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fffbeb;
  padding-top: 1.5rem;
  padding-top: 1.5rem; /* Adjusted padding for top */
  


`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  color: #78350f;
`;


const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, max-content));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  margin-top : 50px;

 
`;

const ProductCard = styled(motion.div)`
 
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  flex-direction: column;
    justify-content: space-between;
  height : 250px
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -2px -2px 8px rgba(255, 255, 255, 0.8);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.15), -4px -4px 12px rgba(255, 255, 255, 0.9);
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const ProductImage = styled(motion.img)`
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.5s ease-out; /* Smooth scaling transition */
  
  &:hover {
    transform: scale(1.05); /* Scale the image on hover */
  }
`;


const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 1rem;
  text-align: center;
`;

const ProductName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  box-sizing: border-box;
`;

const OverlayText = styled.p`
  font-size: 1rem;
  color: #333;
  text-align: center;
`;

const ProductInfo = styled.div`
  padding: 1.25rem;
  background : url("https://png.pngtree.com/thumb_back/fh260/background/20231205/pngtree-creamy-textured-milk-colored-background-image_13815875.png");
  background-size : cover;
  flex-direction: column;
    justify-content: space-between;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #4a2c2a;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const StyledButton = styled.button`
  background: linear-gradient(145deg,rgb(51, 15, 15),rgb(46, 22, 22));
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
  letter-spacing: 0.6px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(145deg, #7d5858, #8e6a6a);
    transform: scale(1.05);
  }


  &:active {
    transform: scale(0.98);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); 
  }


`;


const products = [
  { id: 1, name: 'Espresso', price: 2.5, image: 'https://img.freepik.com/free-photo/caramel-latte-with-chocolade-table_140725-4.jpg?t=st=1727759794~exp=1727763394~hmac=c764d48b2b28767da2c6b996ec20e0d6a5857c19724850db5e46498687e16225&w=740', description: 'A strong, rich coffee shot, perfect for a quick pick-me-up.', type: 'hot' },
  { id: 2, name: 'Cappuccino', price: 3.5, image: 'https://img.freepik.com/free-photo/delicious-organic-latte-macchiato-with-milk_23-2148420329.jpg?t=st=1727761406~exp=1727765006~hmac=10f2d9d7a08693daef2ef87ff4edd99d5bc33e1813adb65c8628d088268239b5&w=1380 ', description: 'Creamy and frothy, a classic Italian coffee with steamed milk.', type: 'hot' },
  { id: 3, name: 'Latte', price: 4, image: 'https://img.freepik.com/free-photo/cold-chocolate-cocktail-with-ice-cream_140725-940.jpg?t=st=1727759865~exp=1727763465~hmac=ad44e2430bff005bce4db484fbef6f2ec22f05b97b41c8c6c28ecb8508c2d909&w=740 ', description: 'Smooth and milky, a comforting coffee drink with a velvety texture.', type: 'hot' },
  { id: 4, name: 'Mocha', price: 4.5, image: 'https://img.freepik.com/free-photo/delicious-quality-coffee-cup_23-2150691385.jpg?t=st=1727759888~exp=1727763488~hmac=ea5484acf51753db6069801c3df0caa601e5d09a2265109ba218d040acb3e53c&w=1380  ', description: 'A sweet blend of coffee and chocolate, perfect for chocolate lovers.', type: 'hot' },
  { id: 5, name: 'Americano', price: 3, image: 'https://img.freepik.com/free-photo/delicious-quality-coffee-cup_23-2150691389.jpg?t=st=1727759909~exp=1727763509~hmac=615986b69635b1e5a35b3a09347203d49046878d7525a9588f94211a3947ff58&w=1380  ', description: 'A diluted espresso shot, similar to brewed coffee but stronger.', type: 'hot' },
  { id: 6, name: 'Macchiato', price: 3.5, image: 'https://img.freepik.com/free-photo/assortment-with-frappe-dark-background_23-2148436976.jpg?t=st=1727761354~exp=1727764954~hmac=20b5ddf356f56d12e139084bc8e2c14ad3c71677269de9680db9dc4d09250774&w=740 ', description: 'An espresso with a dollop of foamed milk, rich and creamy.', type: 'hot' },
  { id: 7, name: 'Turkish Coffee', price: 3, image: 'https://img.freepik.com/premium-photo/pouring-turkish-coffee_772702-2136.jpg?w=360', description: 'Thick, strong, and unfiltered coffee, traditionally served in small cups.', type: 'hot' },
  { id: 8, name: 'Flat white', price: 5.5, image: 'https://static.toiimg.com/thumb/86699095.cms?imgsize=59654&width=509&height=340 ', description: 'Velvety microfoam poured over a double shot of espresso, smooth and creamy.', type: 'hot' },
  { id: 9, name: 'Nitro Cold Brew', price: 4.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZcJOr1zaqJ-TkW9Ie1PcNRRrgPDnNSgX9A&s ', description: 'Cold brew infused with nitrogen, creating a creamy, Guinness-like texture.', type: 'cold' },
  { id: 10, name: 'Doppio', price: 3.4, image: 'https://lifeboostcoffee.com/cdn/shop/articles/Doppio_Espresso_Macchiato.jpg?v=1655197439 ', description: 'A double shot of espresso, strong and intense, perfect for espresso lovers.', type: 'hot' },
  { id: 11, name: 'Viennese Coffee', price: 4, image: 'https://irepo.primecp.com/2015/10/241007/Vienna-Coffee-01-12-07-OR_Category-CategoryPageDefault_ID-1242862.jpg?v=1242862 ', description: 'Espresso topped with whipped cream, often served with chocolate shavings.', type: 'cold' },
  { id: 12, name: 'Ristretto', price: 5.2, image: 'https://www.castironketo.net/wp-content/uploads/2023/10/is-ristretto-keto-friendly-header-image.jpg ', description: 'A short shot of espresso, sweeter and more concentrated than regular espresso.', type: 'hot' },
  { id: 13, name: 'Red Eye', price: 6.2, image: 'https://www.sessioncoffeedenver.com/wp-content/uploads/2024/04/what-is-a-red-eye-coffee.jpg ', description: 'A cup of brewed coffee with a shot of espresso, extra strong and caffeinated.', type: 'cold' },
  { id: 14, name: 'Frappé', price: 8.2, image: 'https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_860,ar_3:2/v1/img/recipes/23/29/18/x38TQCFcRRiV1FJYbTLP_coffeefrappe2.jpg', description: 'Iced coffee drink blended with milk and sugar, often topped with whipped cream.', type: 'cold' },
  { id: 15, name: 'Affogato', price: 8.6, image: 'https://static.wixstatic.com/media/6a3e8d_23b343395c7c47feab983d124cc9b4ce~mv2.jpg/v1/fill/w_568,h_770,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6a3e8d_23b343395c7c47feab983d124cc9b4ce~mv2.jpg', description: 'A scoop of vanilla gelato drowned in a shot of hot espresso, sweet and creamy.', type: 'hot' },
  { id: 16, name: 'Cortado', price: 6, image: 'https://cdn.shopify.com/s/files/1/0677/6524/0096/files/coffee-in-a-glass-2022-11-02-18-50-07-utc_600x600.jpg?v=1683831169', description: 'Espresso cut with a small amount of warm milk to reduce acidity.', type: 'hot' },
  { id: 17, name: 'Café au lait', price: 3.8, image: 'https://blackturtlecoffee.com/cdn/shop/articles/Cafe-Au-Lait-004.jpg?v=1672848240', description: 'Coffee with hot milk, similar to a latte but with a stronger coffee flavor.', type: 'hot' },
  { id: 18, name: 'Café Bombón', price: 4.6, image: 'https://www.theworktop.com/wp-content/uploads/2021/11/cafe-bombon.jpg', description: 'Espresso served with sweetened condensed milk, creating a layered effect.', type: 'hot' },
  { id: 19, name: 'Chai', price: 7.3, image: 'https://img.freepik.com/free-photo/frappe-glass-slices-bread-with-seeds_23-2148623233.jpg?ga=GA1.1.1542821208.1727756299&semt=ais_hybrid', description: 'Spiced black tea brewed with milk and sweetened, aromatic and comforting.', type: 'hot' },
  { id: 20, name: 'Lemon Tea', price: 4.1, image: 'https://img.freepik.com/free-photo/cup-hot-mint-tea_144627-34462.jpg?ga=GA1.1.1542821208.1727756299&semt=ais_hybrid ', description: 'Refreshing black tea infused with lemon, perfect for a soothing experience.', type: 'hot' },
  { id: 21, name: 'Green Tea', price: 3.4, image: 'https://img.freepik.com/free-photo/cup-green-tea_144627-34463.jpg?ga=GA1.1.1542821208.1727756299&semt=ais_hybrid ', description: 'Light and delicate, made from unfermented tea leaves, rich in antioxidants.', type: 'hot' },
  { id: 22, name: 'Black Tea', price: 4.5, image: 'https://img.freepik.com/free-photo/cup-black-tea_144627-34464.jpg?ga=GA1.1.1542821208.1727756299&semt=ais_hybrid ', description: 'Strong and full-bodied, made from fully oxidized tea leaves, classic and robust.', type: 'hot' },
  { id: 23, name: 'Herbal Tea', price: 5.5, image: 'https://img.freepik.com/premium-photo/black-tea-cup-glass-mint-tea-leaves-white-isolated_127657-17608.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid ', description: 'Caffeine-free tea made from herbs, fruits, or spices, naturally soothing.', type: 'hot' },
  { id: 24, name: 'Iced Tea', price: 5.6, image: 'https://img.freepik.com/free-vector/long-island-ice-tea-cocktail-realistic_1284-3888.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid ', description: 'Refreshing chilled tea, often sweetened and served with lemon, perfect for hot days.', type: 'cold' },
  { id: 25, name: 'Irish Coffee', price: 7.2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNlPYx_StS2Y7x9s4hukcCyJZaDm54mgbe8g&s', description: 'Coffee with Irish whiskey, sugar, and cream, a warm and boozy treat.' },
  { id: 26, name: 'Strawberry smoothie', price: 6.2, image: 'https://www.eatingwell.com/thmb/TBp6lbiwoYPhRP4N__4sROiUDhA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mixed-berry-breakfast-smoothie-7959466-1x1-e0ad2304222e49508cda7b73b21de921.jpg', description: 'Creamy and sweet, made with fresh strawberries, yogurt, and a touch of honey.', type: 'cold' },
  { id: 27, name: 'Mango smoothie', price: 3.2, image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/05/mango-smoothie.jpg', description: 'Tropical and refreshing, blended with ripe mangoes, banana, and coconut milk.', type: 'cold' },
  { id: 28, name: 'Strawberry banana smoothie', price: 6.45, image: 'https://www.purelykaylie.com/wp-content/uploads/2023/07/strawberry-banana-smoothie-bowl-5.jpg', description: 'A classic combination of strawberries and bananas, creamy and naturally sweet.', type: 'cold' },
  { id: 29, name: 'Creamy, Nutty Coffee Smoothie', price: 7.2, image: 'https://www.seriouseats.com/thmb/dwKjOOPQu1ki3pSf1M4eB7FGVzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20240206-SEA-Coffee-Smoothie-hero-27d1864a41cc411ea7ff0c64ada77a2e.jpg', description: 'A rich blend of coffee, nuts, and cream, perfect for a morning energy boost.', type: 'cold' },
  { id: 30, name: 'Coffee Smoothie', price: 6.3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Y9in1wQf-XCl9sdyuw5pXWT_CrYn8P5j7A&s', description: 'Creamy and caffeinated, made with cold brew, banana, and almond milk.', type: 'cold' },
  { id: 31, name: 'Chocolate Milkshake', price: 5.2, image: 'https://www.sharmispassions.com/wp-content/uploads/2012/07/chocolate-milkshake1.jpg', description: 'Rich and indulgent, made with chocolate ice cream, milk, and whipped cream.', type: 'cold' },
  { id: 32, name: 'Oreo Milkshake', price: 5.2, image: 'https://www.solara.in/cdn/shop/articles/Oreo_Milkshake.jpg?v=1715757748&width=2048', description: 'Creamy and delicious, blended with Oreo cookies, ice cream, and milk.', type: 'cold' },
  { id: 33, name: 'Strawberry Oreo Milkshake', price: 2.6, image: 'https://marleysmenu.com/wp-content/uploads/2021/08/Strawberry-Oreo-Milkshake-Featured-Image.jpg', description: 'A sweet blend of strawberries, Oreo cookies, and ice cream, perfect for dessert lovers.', type: 'cold' },
  { id: 34, name: 'Mixed Nut and Fruit Milkshake', price: 8.2, image: 'https://images.mrcook.app/recipe-image/018d50f7-344f-7744-97e3-1f89e5a3cf29', description: 'A nutritious blend of mixed nuts, fruits, and milk, creamy and satisfying.', type: 'cold' },
  { id: 35, name: 'Peanut Butter Milkshake', price: 5.8, image: 'https://www.julieseatsandtreats.com/wp-content/uploads/2021/08/Peanut-Butter-Milkshake-Square.jpg', description: "Rich and creamy, made with peanut butter, ice cream, and milk, a peanut butter lover's dream.", type: 'cold' },
  { id: 36, name: 'Oreo cheese cake', price: 9.2, image: 'https://handletheheat.com/wp-content/uploads/2015/11/oreo-cheesecake-recipe-SQUARE.jpg', description: 'Creamy cheesecake with an Oreo crust and topping, rich and indulgent.', type: 'food' },
  { id: 37, name: 'Chocolate cake', price: 7.2, image: 'https://img.freepik.com/free-photo/chocolate-cake_1203-8942.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid', description: 'Moist and decadent, a classic chocolate cake perfect for any celebration.', type: 'food' },
  { id: 38, name: 'Red velvet cake', price: 4.2, image: 'https://img.freepik.com/free-photo/top-view-red-strawberry-cake-delicious-with-tea-table-fruit-color-cake-biscuit-sweet_140725-28319.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid', description: 'Rich and velvety, a moist red cake with cream cheese frosting, elegant and delicious.', type: 'food' },
  { id: 39, name: 'Cheese cake', price: 8.2, image: 'https://img.freepik.com/premium-photo/citrus-cheesecake-cake-with-kumquats_82780-1574.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid', description: 'Creamy and smooth, a classic cheesecake with a graham cracker crust, perfect for dessert.', type: 'food' },
  { id: 40, name: 'Blueberry cake', price: 3.2, image: 'https://img.freepik.com/premium-photo/pieces-pie-from-cottage-cheese-blueberries_116441-1516.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid', description: 'Moist and bursting with blueberries, a sweet and tangy cake perfect for any occasion.', type: 'food' },
  { id: 41, name: 'Strawberry cake', price: 6, image: 'https://img.freepik.com/free-photo/delicious-cake-with-strawberries_23-2150797874.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid', description: 'Light and fluffy, a sweet strawberry cake with creamy frosting, perfect for summer.', type: 'food' },
  { id: 42, name: 'Salad', price: 7.3, image: 'https://img.freepik.com/free-photo/dietary-salad-with-tomatoes-feta-lettuce-spinach-pine-nuts_2829-20128.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid', description: 'Fresh and healthy, a mix of greens, vegetables, and a tangy dressing, perfect for a light meal.', type: 'food' },
  { id: 43, name: 'Tomato soup', price: 6.7, image: 'https://img.freepik.com/free-photo/portrait-shooting-tomato-soup-with-crackers-cheese-tomatoes-bread-table_141793-2858.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid', description: 'Warm and comforting, a classic tomato soup perfect for a cozy meal, often served with grilled cheese.', type: 'food' },
  { id: 44, name: 'Chicken Noodle soup', price: 8.2, image: 'https://img.freepik.com/free-photo/delicious-noodle-soup-with-chicken-uncooked-pasta-small-brown-bowl-spoon-garlic-dark-background_140725-140085.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid', description: 'Hearty and soothing, a classic soup with chicken, noodles, and vegetables, perfect for cold days.', type: 'food' },
  { id: 45, name: 'Miso soup', price: 7.5, image: 'https://img.freepik.com/free-photo/top-view-japanese-food-bowls-arrangement_23-2148809848.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid', description: 'Savory and umami-rich, a traditional Japanese soup made with miso paste and dashi broth.', type: 'food' },
  { id: 46, name: 'Cold cucumber soup', price: 7.34, image: 'https://img.freepik.com/free-photo/cold-cucumber-soup-with-dried-tomatoes-mozzarella_2829-14287.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid', description: 'Refreshing and cool, a chilled soup made with cucumbers, yogurt, and herbs, perfect for summer.', type: 'food' },
  { id: 47, name: 'Tom Yum Soup', price: 9.2, image: 'https://img.freepik.com/free-photo/tom-yum-kung-thai-hot-spicy-soup-shrimp-with-lemon-grass-lemon-galangal-chilli-wooden-table-thailand-food_1150-21078.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid', description: 'Spicy and aromatic, a Thai soup with lemongrass, kaffir lime leaves, and chilies, often with shrimp.', type: 'food' },


  {
    id: 1,
    name: "Espresso",
    price: 2.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtmOsFrpFh2l-iZTaOA0_1QyRm9cfRMvGv1g&s",
    description: "A strong, rich coffee shot, perfect for a quick pick-me-up.",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 3.5,
    image:
      "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/642a47ed-9f59-4c02-b9a3-2ff875179476/066b0ee9-c0d4-40f8-b9ef-5ea270079e35.png ",
    description:
      "Creamy and frothy, a classic Italian coffee with steamed milk.",
  },
  {
    id: 3,
    name: "Latte",
    price: 4,
    image:
      "https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery.jpg",
    description:
      "Smooth and milky, a comforting coffee drink with a velvety texture.",
  },
  {
    id: 4,
    name: "Mocha",
    price: 4.5,
    image:
      "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/the_perfect_mocha_coffee_29100_16x9.jpg",
    description:
      "A sweet blend of coffee and chocolate, perfect for chocolate lovers.",
  },
  {
    id: 5,
    name: "Americano",
    price: 3,
    image:
      "https://i0.wp.com/misaexpress.in/wp-content/uploads/2023/06/79039.jpg?fit=451%2C451&ssl=1",
    description:
      "A diluted espresso shot, similar to brewed coffee but stronger.",
  },
  {
    id: 6,
    name: "Macchiato",
    price: 3.5,
    image:
      "https://www.tankcoffee.com/wp-content/uploads/2023/07/A_close-up_shot_of_a_classic_Italian_macchiato.png",
    description: "An espresso with a dollop of foamed milk, rich and creamy.",
  },
  {
    id: 7,
    name: "Turkish Coffee",
    price: 3,
    image:
      "https://img.freepik.com/premium-photo/pouring-turkish-coffee_772702-2136.jpg?w=360",
    description:
      "Thick, strong, and unfiltered coffee, traditionally served in small cups.",
  },
  {
    id: 8,
    name: "Flat white",
    price: 5.5,
    image:
      "https://static.toiimg.com/thumb/86699095.cms?imgsize=59654&width=509&height=340 ",
    description:
      "Velvety microfoam poured over a double shot of espresso, smooth and creamy.",
  },
  {
    id: 9,
    name: "Nitro Cold Brew",
    price: 4.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZcJOr1zaqJ-TkW9Ie1PcNRRrgPDnNSgX9A&s ",
    description:
      "Cold brew infused with nitrogen, creating a creamy, Guinness-like texture.",
  },
  {
    id: 10,
    name: "Doppio",
    price: 3.4,
    image:
      "https://lifeboostcoffee.com/cdn/shop/articles/Doppio_Espresso_Macchiato.jpg?v=1655197439 ",
    description:
      "A double shot of espresso, strong and intense, perfect for espresso lovers.",
  },
  {
    id: 11,
    name: "Viennese Coffee",
    price: 4,
    image:
      "https://irepo.primecp.com/2015/10/241007/Vienna-Coffee-01-12-07-OR_Category-CategoryPageDefault_ID-1242862.jpg?v=1242862 ",
    description:
      "Espresso topped with whipped cream, often served with chocolate shavings.",
  },
  {
    id: 12,
    name: "Ristretto",
    price: 5.2,
    image:
      "https://www.castironketo.net/wp-content/uploads/2023/10/is-ristretto-keto-friendly-header-image.jpg ",
    description:
      "A short shot of espresso, sweeter and more concentrated than regular espresso.",
  },
  {
    id: 13,
    name: "Red Eye",
    price: 6.2,
    image:
      "https://www.sessioncoffeedenver.com/wp-content/uploads/2024/04/what-is-a-red-eye-coffee.jpg ",
    description:
      "A cup of brewed coffee with a shot of espresso, extra strong and caffeinated.",
  },
  {
    id: 14,
    name: "Frappé",
    price: 8.2,
    image:
      "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_860,ar_3:2/v1/img/recipes/23/29/18/x38TQCFcRRiV1FJYbTLP_coffeefrappe2.jpg",
    description:
      "Iced coffee drink blended with milk and sugar, often topped with whipped cream.",
  },
  {
    id: 15,
    name: "Affogato",
    price: 8.6,
    image:
      "https://static.wixstatic.com/media/6a3e8d_23b343395c7c47feab983d124cc9b4ce~mv2.jpg/v1/fill/w_568,h_770,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6a3e8d_23b343395c7c47feab983d124cc9b4ce~mv2.jpg",
    description:
      "A scoop of vanilla gelato drowned in a shot of hot espresso, sweet and creamy.",
  },
  {
    id: 16,
    name: "Cortado",
    price: 6,
    image:
      "https://cdn.shopify.com/s/files/1/0677/6524/0096/files/coffee-in-a-glass-2022-11-02-18-50-07-utc_600x600.jpg?v=1683831169",
    description:
      "Espresso cut with a small amount of warm milk to reduce acidity.",
  },
  {
    id: 17,
    name: "Café au lait",
    price: 3.8,
    image:
      "https://blackturtlecoffee.com/cdn/shop/articles/Cafe-Au-Lait-004.jpg?v=1672848240",
    description:
      "Coffee with hot milk, similar to a latte but with a stronger coffee flavor.",
  },
  {
    id: 18,
    name: "Café Bombón",
    price: 4.6,
    image:
      "https://www.theworktop.com/wp-content/uploads/2021/11/cafe-bombon.jpg",
    description:
      "Espresso served with sweetened condensed milk, creating a layered effect.",
  },

  {
    id: 25,
    name: "Irish Coffee",
    price: 7.2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNlPYx_StS2Y7x9s4hukcCyJZaDm54mgbe8g&s",
    description:
      "Coffee with Irish whiskey, sugar, and cream, a warm and boozy treat.",
  },


];

// Tea Section
const product1 = [{
  id: 19,
  name: "Chai",
  price: 7.3,
  image:
    "https://img.freepik.com/free-photo/frappe-glass-slices-bread-with-seeds_23-2148623233.jpg?ga=GA1.1.1542821208.1727756299&semt=ais_hybrid",
  description:
    "Spiced black tea brewed with milk and sweetened, aromatic and comforting.",
},
{
  id: 20,
  name: "Lemon Tea",
  price: 4.1,
  image:
    "https://img.freepik.com/free-photo/cup-hot-mint-tea_144627-34462.jpg?ga=GA1.1.1542821208.1727756299&semt=ais_hybrid ",
  description:
    "Refreshing black tea infused with lemon, perfect for a soothing experience.",
},
{
  id: 21,
  name: "Green Tea",
  price: 3.4,
  image:
    "https://img.freepik.com/free-photo/cup-green-tea_144627-34463.jpg?ga=GA1.1.1542821208.1727756299&semt=ais_hybrid ",
  description:
    "Light and delicate, made from unfermented tea leaves, rich in antioxidants.",
},
{
  id: 22,
  name: "Black Tea",
  price: 4.5,
  image:
    "https://img.freepik.com/free-photo/cup-black-tea_144627-34464.jpg?ga=GA1.1.1542821208.1727756299&semt=ais_hybrid ",
  description:
    "Strong and full-bodied, made from fully oxidized tea leaves, classic and robust.",
},
{
  id: 23,
  name: "Herbal Tea",
  price: 5.5,
  image:
    "https://img.freepik.com/premium-photo/black-tea-cup-glass-mint-tea-leaves-white-isolated_127657-17608.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid ",
  description:
    "Caffeine-free tea made from herbs, fruits, or spices, naturally soothing.",
},
{
  id: 24,
  name: "Iced Tea",
  price: 5.6,
  image:
    "https://img.freepik.com/free-vector/long-island-ice-tea-cocktail-realistic_1284-3888.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid ",
  description:
    "Refreshing chilled tea, often sweetened and served with lemon, perfect for hot days.",
},
];
// Milkshake and Smothiee
const product2 = [{
  id: 26,
  name: "Strawberry smoothie",
  price: 6.2,
  image:
    "https://www.eatingwell.com/thmb/TBp6lbiwoYPhRP4N__4sROiUDhA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mixed-berry-breakfast-smoothie-7959466-1x1-e0ad2304222e49508cda7b73b21de921.jpg",
  description:
    "Creamy and sweet, made with fresh strawberries, yogurt, and a touch of honey.",
},
{
  id: 27,
  name: "Mango smoothie",
  price: 3.2,
  image:
    "https://cdn.loveandlemons.com/wp-content/uploads/2023/05/mango-smoothie.jpg",
  description:
    "Tropical and refreshing, blended with ripe mangoes, banana, and coconut milk.",
},
{
  id: 28,
  name: "Strawberry banana smoothie",
  price: 6.45,
  image:
    "https://www.purelykaylie.com/wp-content/uploads/2023/07/strawberry-banana-smoothie-bowl-5.jpg",
  description:
    "A classic combination of strawberries and bananas, creamy and naturally sweet.",
},
{
  id: 29,
  name: "Creamy, Nutty Coffee Smoothie",
  price: 7.2,
  image:
    "https://www.seriouseats.com/thmb/dwKjOOPQu1ki3pSf1M4eB7FGVzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20240206-SEA-Coffee-Smoothie-hero-27d1864a41cc411ea7ff0c64ada77a2e.jpg",
  description:
    "A rich blend of coffee, nuts, and cream, perfect for a morning energy boost.",
},
{
  id: 30,
  name: "Coffee Smoothie",
  price: 6.3,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Y9in1wQf-XCl9sdyuw5pXWT_CrYn8P5j7A&s",
  description:
    "Creamy and caffeinated, made with cold brew, banana, and almond milk.",
},
{
  id: 31,
  name: "Chocolate Milkshake",
  price: 5.2,
  image:
    "https://www.sharmispassions.com/wp-content/uploads/2012/07/chocolate-milkshake1.jpg",
  description:
    "Rich and indulgent, made with chocolate ice cream, milk, and whipped cream.",
},
{
  id: 32,
  name: "Oreo Milkshake",
  price: 5.2,
  image:
    "https://www.solara.in/cdn/shop/articles/Oreo_Milkshake.jpg?v=1715757748&width=2048",
  description:
    "Creamy and delicious, blended with Oreo cookies, ice cream, and milk.",
},
{
  id: 33,
  name: "Strawberry Oreo Milkshake",
  price: 2.6,
  image:
    "https://marleysmenu.com/wp-content/uploads/2021/08/Strawberry-Oreo-Milkshake-Featured-Image.jpg",
  description:
    "A sweet blend of strawberries, Oreo cookies, and ice cream, perfect for dessert lovers.",
},
{
  id: 34,
  name: "Mixed Nut and Fruit Milkshake",
  price: 8.2,
  image:
    "https://images.mrcook.app/recipe-image/018d50f7-344f-7744-97e3-1f89e5a3cf29",
  description:
    "A nutritious blend of mixed nuts, fruits, and milk, creamy and satisfying.",
},
{
  id: 35,
  name: "Peanut Butter Milkshake",
  price: 5.8,
  image:
    "https://www.julieseatsandtreats.com/wp-content/uploads/2021/08/Peanut-Butter-Milkshake-Square.jpg",
  description:
    "Rich and creamy, made with peanut butter, ice cream, and milk, a peanut butter lover's dream.",
},
];
// Cake Section
const product3 = [{
  id: 36,
  name: "Oreo cheese cake",
  price: 9.2,
  image:
    "https://handletheheat.com/wp-content/uploads/2015/11/oreo-cheesecake-recipe-SQUARE.jpg",
  description:
    "Creamy cheesecake with an Oreo crust and topping, rich and indulgent.",
},
{
  id: 37,
  name: "Chocolate cake",
  price: 7.2,
  image:
    "https://img.freepik.com/free-photo/chocolate-cake_1203-8942.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
  description:
    "Moist and decadent, a classic chocolate cake perfect for any celebration.",
},
{
  id: 38,
  name: "Red velvet cake",
  price: 4.2,
  image:
    "https://img.freepik.com/free-photo/top-view-red-strawberry-cake-delicious-with-tea-table-fruit-color-cake-biscuit-sweet_140725-28319.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
  description:
    "Rich and velvety, a moist red cake with cream cheese frosting, elegant and delicious.",
},
{
  id: 39,
  name: "Cheese cake",
  price: 8.2,
  image:
    "https://img.freepik.com/premium-photo/citrus-cheesecake-cake-with-kumquats_82780-1574.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
  description:
    "Creamy and smooth, a classic cheesecake with a graham cracker crust, perfect for dessert.",
},
{
  id: 40,
  name: "Blueberry cake",
  price: 3.2,
  image:
    "https://img.freepik.com/premium-photo/pieces-pie-from-cottage-cheese-blueberries_116441-1516.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
  description:
    "Moist and bursting with blueberries, a sweet and tangy cake perfect for any occasion.",
},
{
  id: 41,
  name: "Strawberry cake",
  price: 6,
  image:
    "https://img.freepik.com/free-photo/delicious-cake-with-strawberries_23-2150797874.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
  description:
    "Light and fluffy, a sweet strawberry cake with creamy frosting, perfect for summer.",
},
];
// Soup Section
const product4 = [{
  id: 42,
  name: "Salad",
  price: 7.3,
  image:
    "https://img.freepik.com/free-photo/dietary-salad-with-tomatoes-feta-lettuce-spinach-pine-nuts_2829-20128.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
  description:
    "Fresh and healthy, a mix of greens, vegetables, and a tangy dressing, perfect for a light meal.",
},
{
  id: 43,
  name: "Tomato soup",
  price: 6.7,
  image:
    "https://img.freepik.com/free-photo/portrait-shooting-tomato-soup-with-crackers-cheese-tomatoes-bread-table_141793-2858.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
  description:
    "Warm and comforting, a classic tomato soup perfect for a cozy meal, often served with grilled cheese.",
},
{
  id: 44,
  name: "Chicken Noodle soup",
  price: 8.2,
  image:
    "https://img.freepik.com/free-photo/delicious-noodle-soup-with-chicken-uncooked-pasta-small-brown-bowl-spoon-garlic-dark-background_140725-140085.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
  description:
    "Hearty and soothing, a classic soup with chicken, noodles, and vegetables, perfect for cold days.",
},
{
  id: 45,
  name: "Miso soup",
  price: 7.5,
  image:
    "https://img.freepik.com/free-photo/top-view-japanese-food-bowls-arrangement_23-2148809848.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
  description:
    "Savory and umami-rich, a traditional Japanese soup made with miso paste and dashi broth.",
},
{
  id: 46,
  name: "Cold cucumber soup",
  price: 7.34,
  image:
    "https://img.freepik.com/free-photo/cold-cucumber-soup-with-dried-tomatoes-mozzarella_2829-14287.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
  description:
    "Refreshing and cool, a chilled soup made with cucumbers, yogurt, and herbs, perfect for summer.",
},
{
  id: 47,
  name: "Tom Yum Soup",
  price: 9.2,
  image:
    "https://img.freepik.com/free-photo/tom-yum-kung-thai-hot-spicy-soup-shrimp-with-lemon-grass-lemon-galangal-chilli-wooden-table-thailand-food_1150-21078.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
  description:
    "Spicy and aromatic, a Thai soup with lemongrass, kaffir lime leaves, and chilies, often with shrimp.",
},
];

const SearchFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  
  margin-bottom: 2rem;
  
`;
const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid brown; /* Updated border width and color */
  border-radius: 20px; /* Increased roundness */
  outline: none;
  width: 300px;
  margin-right: 1rem; /* Added margin on the right */

  &:focus {
    border-color: #6b4f4f; /* Focus state border color */
  }
`;


const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  background: linear-gradient(145deg, #6b4f4f, #7d5858);
  color: white;
  border: none;
  border-radius: 15px 15px 15px 15px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(145deg, #7d5858, #8e6a6a);
  }
`;



function Shop() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("hot");
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  const handleClick = (value) => {
    setCategory(value);
  };

  // Filter products based on search query or category
  const filteredProducts = products.filter((product) => {
    // Check if product matches the selected category
    const matchesCategory = category === "all" || product.type === category;
    // Check if product name matches the search query (case insensitive)
    const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());

    // If search query is provided, only show products matching the query and selected category
    return searchQuery ? matchesSearchQuery : matchesCategory;
  });

  const [itemsNo, setItemsNo] = useState(9);

  const [likedProducts, setLikedProducts] = useState({});

  const toggleHeart = (productId) => {
    setLikedProducts((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  const handleItemsNo = () => {
    const s = products.length;
    if (s == itemsNo) {
      setItemsNo(9);
    } else {
      setItemsNo(Math.min(itemsNo + 9, s));
    }
  };

  // Group products by type (category)
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.type]) acc[product.type] = [];
    acc[product.type].push(product);
    return acc;
  }, {});

  return (
    <ShopContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        text-weight="bold-800"
      >
        <DynamicText text="Welcome to MsCafe Shop" />
      </Title>

      <SearchFilterContainer>
        <SearchInput
          type="text"
          placeholder="Search for ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton onClick={() => console.log("Search clicked!")}>
          Search
        </SearchButton>
      </SearchFilterContainer>

      <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Our Coffee Selection
      </Title>

      <ButtonGroup
        variant="text"
        aria-label="Basic button group"
        sx={{
          display:'flex',
          alignItems:'center', //to align buttons in center
          flexDirection:{xs:'column',sm:'column',md:'row'}, //to make button group adjust to different screen size
          justifyContent:'center', 
          borderRadius: "8px",
          padding: "4px",
          
        }}
      >
        <Button
          onClick={() => setCategory("hot")}
          style={{
            width: "200px",
            backgroundColor: category === "hot" ? "#f0efdc" : "#7c2414",
            color: category === "hot" ? "black" : "white",
          }}
        >
          Hot Beverages
        </Button>
        <Button
          onClick={() => setCategory("cold")}
          style={{
            width: "200px",
            backgroundColor: category === "cold" ? "#f0efdc" : "#7c2414",
            color: category === "cold" ? "black" : "white",
          }}
        >
          Cold Beverages
        </Button>
        <Button
          onClick={() => setCategory("food")}
          style={{
            width: "200px",
            backgroundColor: category === "food" ? "#f0efdc" : "#7c2414",
            color: category === "food" ? "black" : "white",
          }}
        >
          Food
        </Button>
      </ButtonGroup>

      {/* Dynamically render sections */}
      <div>
        {Object.keys(groupedProducts).map((section) => {
          const sectionProducts = groupedProducts[section];

          // Only display the section if it matches the search query or if the search query is empty
          const matchesSearchQuery = sectionProducts.some((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          );

          // Skip section if no products match the search query and the search query is not empty
          if (searchQuery && !matchesSearchQuery) {
            return null;
          }

          return (
            <React.Fragment key={section}>
              <Title
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {section === "hot" ? "Our Hot Beverages" : section === "cold" ? "Our Cold Beverages" : section === "food" ? "Our Food Selection" : ""}
              </Title>
              <ProductGrid>
                {sectionProducts.map((product) => {
                  // If there's a search query, only show products that match
                  if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                    return null;
                  }
                  return (
                    <ProductCard
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div style={{ position: "relative" }}>
                        <ProductImage src={product.image} alt={product.name} />

                        <div
                          onClick={() => toggleHeart(product.id)}
                          style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            cursor: 'pointer',
                            fontSize: '24px',
                            color: likedProducts[product.id] ? 'red' : 'gray',
                            zIndex: 2,
                          }}
                        >
                          <i className={`fa-heart ${likedProducts[product.id] ? 'fas' : 'far'}`}></i>
                        </div>

                        <Overlay className="overlay" style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          zIndex: 1,
                        }}>
                          <OverlayText>{product.description}</OverlayText>
                        </Overlay>
                      </div>
                      <ProductInfo>
                        <ProductName>{product.name}</ProductName>
                        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
                        <Button onClick={() => handleAddToCart(product)}>
                          Add to Cart
                        </Button>
                        <Button onClick={() => handleAddToCart(product)}>
                          Buy Now
                        </Button>
                      </ProductInfo>
                    </ProductCard>
                  );
                })}
              </ProductGrid>
            </React.Fragment>
          );
        })}
      </div>

      <ToastContainer />
    </ShopContainer>
  );
}

export default Shop;
