import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import mockCollections from './MockCollections';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from './CartContext';


function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default to 'All' category
  const { addToCart } = useCart();
  const [selectedCollection, setSelectedCollection] = useState(null);

  const handleAddToCart = (collection) => {
    addToCart(collection);
    setSelectedCollection(collection);
  };


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCollections = selectedCategory === 'All'
    ? mockCollections
    : mockCollections.filter(collection => collection.category === selectedCategory);

  const categories = ['All', 'Art', 'Music', 'Fashion']; 

  return (
    <div className='container-fluid mx-0 px-0'>
      <Header />
      <div class="jumbotron text-center bg-dark py-5 text-light">
        <h1 class="display-4">Welcome to NFT Marketplace</h1>
        <p class="lead mt-2">Discover amazing products and services.</p>
      </div>
      <div className="container px-0">
        <div className='d-flex mx-4 px-3 mb-3'>
          <div className='col-6'></div>
          <div className="d-flex col-6 justify-content-end align-items-center mt-4 ml-auto">
            <select
              className="form-control category-filter"
              value={selectedCategory}
              onChange={e => handleCategoryChange(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>


        <div className="collection-list row mt-5 px-3">
          {filteredCollections.map(collection => (
            <div key={collection.id} className="collection-card col-lg-3 col-md-4 mb-4">
              <div className="card h-100 d-flex flex-column mx-4">
                <Link to={`/collections/${collection.id}`} className="text-dark text-decoration-none">
                  <img src={collection.imageUrl} alt={collection.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title"><b>{collection.name}</b></h5>
                    <p className="card-text">{collection.summary}</p>
                    <p className="card-text price-txt">£{collection.price}</p>
                  </div>
                </Link>
                <div className="mx-3">
                  <button onClick={() => handleAddToCart(collection)} className="btn btn-primary buy-now-btn w-100 mb-4">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Home;
