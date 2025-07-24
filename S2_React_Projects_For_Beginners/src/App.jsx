// import Calculator from './components/Calculator/Calculator.jsx';
// import Counter from './components/Counter/Counter';
// import Meals from './components/Meal/Meals';
// import Todo from './components/Todo/Todo';
// import ToggleBackground from './components/ToggleBackgroundColor/ToggleBackground.jsx';
// import HiddenSearchBar from './components/HiddenSearchBar/HiddenSearchBar';
// import Testimonials from './components/Testimonials/Testimonials';
// import Form from './components/FormValidation/Form';
// import Accordion from './components/Accordion/Accordion';
// import { accordionData } from './components/Accordion/content';

import { useState } from 'react';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import products from './db/data';
import Card from './components/EcommerceFiltering/Card';
import './index.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => {
        return (
          <Card
            key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
          />
        );
      }
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
