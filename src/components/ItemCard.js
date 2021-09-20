import { useDispatch, useSelector } from "react-redux";

export default function ItemCard({ item, cart, setCart }) {
    const vendorLoggedIn = useSelector(state => state.login.vendorLoggedIn)
  const { id, name, image_url, price } = item
  
  function addToCart(item) {
    setCart((mostUpdatedCart) => [...mostUpdatedCart, item])
  }
    

    return (
      <div>
        <div>
          <img src={image_url} />
        </div>
        <div>
          <h3>{name}</h3>
          <h4>${price}</h4>
          {/* {vendorLoggedIn ? <button>Update Item</button> : <button onClick={addToCart}>Add</button>} */}
          <button onClick={() => addToCart(item)}>Add</button>
        </div>
      </div>
    );
}