import { useSelector } from "react-redux";

export default function CartItem({ item, cart, setCart }) {
    const quantity = useSelector((state) => state.cart.quantity);
    const { id, name, image_url, price } = item

  function removeItem() {
        const updatedCart = cart.filter(item => item.id !== id)
        setCart(updatedCart)
    }
    
  console.log("QUANTITY", quantity)
    return (
      <div>
        <div>
          <img src={image_url} />
        </div>
        <div>
          <h1>{name}</h1>
          <h2>Price: {price}</h2>
          <h3>Quantity: </h3>
        </div>
        <div>
            <button onClick={removeItem}>Remove Item</button>
        </div>
      </div>
    );
}