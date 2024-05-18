import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/card.jsx";
import './index.css'
// import Category from './Sidebar/Category/Category';
// import Colors from './Sidebar/Colors/Colors';
// import Price from './Sidebar/Price/Price';
import products from "./db/data.js";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  //input filter
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((item) =>
    item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  //radio filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //button filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filter by category or query
    if (selected && query) {
      filteredProducts = filteredItems.filter(
        (item) =>
          item.category === selected &&
          item.title.toLowerCase().includes(query.toLowerCase())
      );
    } else if (selected) {
      filteredProducts = products.filter(
        (item) =>
          item.category === selected ||
          item.color === selected ||
          item.company === selected ||
          item.newPrice===selected ||
          item.title === selected
      );
    } else if (query) {
      filteredProducts = filteredItems;
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result=filteredData(products,selectedCategory,query)
  return (
    <div className="App">
      <Sidebar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
    </div>
  );
}

export default App;
