import React from 'react';
import { useCart } from './CartContext';
import Header from './Header';

function Checkout() {
  const { cartItems, removeFromCart } = useCart();

  // Calculate total price
  // const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  const totalPrice = () => {
    let total = 0;
    cartItems.map((item) => {
      total = total + item.price;
    });
    return total;
  };

  return (
    <div className='container-fluid mx-0 px-0'>
      <Header />
      <div className='container px-0 d-flex mt-5'>

        {cartItems.length === 0 ? (
          <>
            <div>
              <h4 className="">
                Shopping Cart
              </h4>
              <p className='mt-3'>Your cart is empty.</p>
            </div>
          </>
        ) : (
          <>
            <div className="col-12 col-md-8 mr-3">
              <h4 className="accordion-header mb-5">
                Shopping Cart
              </h4>

              <div>
                {cartItems.map((item, index) => (
                  <div key={index} className="checkout-item">
                    <div className="row align-items-center mb-3 border-bottom pb-3">
                      <div className="col-3">
                        <img src={item.imageUrl} alt={item.name} className="img-fluid " />
                      </div>
                      <div className="col-3">
                        <p className="mb-0"><b>{item.name}</b></p>
                        <p className="mb-0">{item.summary}</p>
                      </div>
                      <div className='col-3  d-flex justify-content-end'>
                        <p className="text-muted mb-0">£{item.price}</p>
                      </div>
                      <div className="col-3 text-right d-flex justify-content-end">
                        <button className="btn btn-link btn-sm text-danger" onClick={() => removeFromCart(index)}>Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Total Price */}
                <p className="dropdown-item-text d-flex justify-content-end"><b>Total: <span className='d-inline-block pl-3'></span> £{totalPrice()}</b></p>
                {/* <Link to="/checkout" className="dropdown-item">Proceed to Checkout</Link> */}
              </div>


            </div>
            <div className="col-12 col-md-4 payment-section">
              <h4 className="accordion-header mb-5">Payment Details</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input type="text" className="form-control mt-1" id="cardNumber" placeholder="Enter card number" />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input type="text" className="form-control mt-1" id="expiryDate" placeholder="MM/YY" />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" className="form-control" id="cvv" placeholder="CVV" />
                </div>
                <button type="submit" className="btn btn-primary buy-now-btn mt-3 w-100">Checkout</button>
              </form>
            </div>
          </>
        )}


      </div>
    </div>
  );
}

export default Checkout;




