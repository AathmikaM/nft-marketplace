import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function CartDropdown() {
    const { cartItems, removeFromCart } = useCart();

    const totalPrice = () => {
        let total = 0;
        cartItems.map((item) => {
          total = total + item.price;
        });
        return total;
      };

    return (
        <div className="cart-dropdown dropdown-menu dropdown-menu-right p-4" aria-labelledby="cartDropdown">
            <h3 className="dropdown-header mb-2">Your Cart</h3>
            {cartItems.length === 0 ? (
                <p className="dropdown-item-text">Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index} className="dropdown-item">
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <img src={item.imageUrl} alt={item.name} className="img-fluid card-img-dpdown" />
                                </div>
                                <div className="col-6">
                                    <p className="mb-0">{item.name}</p>
                                    <small className="text-muted price-txt">£{item.price}</small>
                                </div>
                                <div className="col-3 text-right d-flex justify-content-end">
                                    <button className="btn btn-link btn-sm text-danger" onClick={() => removeFromCart(index)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="dropdown-divider"></div>
                    <div className='d-flex justify-content-between my-3'>
                        <p className="mb-0"><b>Total Price:</b> </p>
                        <p className='price-txt mr-3 mb-0'>£{totalPrice()}</p>
                    </div>

                    <Link to="/checkout"><button className="btn btn-primary buy-now-btn w-100">
                        View Cart
                    </button></Link>

                </div>
            )}
        </div>
    );
}

export default CartDropdown;
