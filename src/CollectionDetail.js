import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import mockCollections from './MockCollections';
import Header from './Header';
import { useCart } from './CartContext';


function CollectionDetail() {
  const { id } = useParams();
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    if (id) {
      fetchCollectionDetails(id);
    }
  }, [id]);

  
  const { addToCart } = useCart();
  const [selectedCollection, setSelectedCollection] = useState(null);

  const handleAddToCart = (collection) => {
    addToCart(collection);
    setSelectedCollection(collection);
  };

  const fetchCollectionDetails = (collectionId) => {
    try {
      const data = mockCollections.find(item => item.id.toString() === collectionId);
      console.log(data, collectionId, mockCollections);
      setCollection(data);

    } catch (error) {
      console.error('Error fetching collection details:', error);
    }
  };

  if (!collection) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container-fluid mx-0 px-0'>
      <Header />
      <div className='container px-0'>
        <div className='d-flex align-items-start mt-5'>
          <div className='col-8 mt-4 mb-3'>
            <img src={collection.imageUrl} alt={collection.name} className="card-img-top pl-0 detail-img" />
          </div>
          <div className="col-4 ml-3">
            <h2 className='mb-0'>{collection.name}</h2>
            <p className='mt-3'>{collection.summary}</p>
            <p className='mb-0 price-txt'>£{collection.price}</p>
            <button
              className="btn btn-primary buy-now-btn w-100 mt-3" onClick={() => handleAddToCart(collection)}>
              Buy now
            </button>

          </div>
        </div>
        <div className='mt-3'>
          <b>What is Lorem Ipsum?</b>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <b>Why do we use it?</b>
          <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          <b>Where does it come from?</b>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
      </div>
    </div>

  );
}

export default CollectionDetail;
