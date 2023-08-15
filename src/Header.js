import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import './Header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import CartDropdown from './CartDropdown';
import CollectionDetail from './CollectionDetail';

function Header() {
    const { cartItems } = useCart();
    const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
    const [selectedCollection, setSelectedCollection] = useState(null); // State for selected collection

    const toggleCartDropdown = () => {
        setIsCartDropdownOpen(!isCartDropdownOpen);
    };

    const handleShowCollectionDetail = (collection) => {
        setSelectedCollection(collection);
    };

    return (
        <header className="bg-dark text-white p-3 shadow-lg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 logo-wr">
                        <img src={logo} alt="Logo" className="img-fluid logo" />
                    </div>


                    <div className="col-md-6 text-right d-flex justify-content-end logo-wr">
                        <a href="#" className="text-white mr-3">
                            <FontAwesomeIcon icon={faHeart} className="mr-3" />
                        </a>
                        <a href="#" className="text-white cart-icon" onClick={toggleCartDropdown}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            
                                {cartItems.length > 0 ? <div className="d-inline-block d-flex justify-content-center align-items-center rounded-circle text-white text-center p-2 mr-2"><span className="badge badge-danger ml-1">{cartItems.length}</span></div> : <span></span>}

                            

                        </a>
                        {isCartDropdownOpen && <CartDropdown />}

                        {selectedCollection && (
                            <CollectionDetail
                                collection={selectedCollection}
                                showRemoveButton={false}
                                onClose={() => {
                                    setSelectedCollection(null);
                                    setIsCartDropdownOpen(false); // Close CartDropdown when CollectionDetail is closed
                                }}
                            />
                        )}
                    </div>



                </div>
            </div>
        </header>
    );
}

export default Header;
