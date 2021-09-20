export default function CartItem({ item, cart, setCart }) {
    const { id, name, image_url, price } = item

    function removeItem() {
        const updatedCart = cart.filter(item => item.id !== id)
        setCart(updatedCart)
    }
    
    return (
      <div>
        <div>
          <img src={image_url} />
        </div>
        <div>
                <h1>{name}</h1>
                <h2>{price}</h2>
            </div>
            <div>
                <button onClick={removeItem}>Remove Item</button>
            </div>
      </div>
    );
}