

import CartItem from "./CartItem"

export default function Cart({ cart, setCart, quantity }) {
    const displayCart = cart.map(item => <CartItem key={item.id} item={item} cart={cart} setCart={setCart} quantity={quantity}/>)
    
    function clearCart() {
        setCart([])
    }


    return (
      <div>
        <div>
                <button onClick={clearCart}>Clear Cart</button>
        </div>
            <div>{displayCart}</div>
            <div>
                <button>Place Order</button>
        </div>
      </div>
    );
}