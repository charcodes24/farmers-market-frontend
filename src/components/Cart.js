import CartItem from "./CartItem"

export default function Cart({ cart, setCart }) {
    
    const displayCart = cart.map(item => <CartItem key={item.id} item={item} cart={cart} setCart={setCart}/>)


    return (
        <div>
            {displayCart}
        </div>
    )
}