import { useDispatch, useSelector } from "react-redux";

export default function ItemCard({ item }) {
    const vendorLoggedIn = useSelector(state => state.login.vendorLoggedIn)
    const { id, name, image_url, price } = item
    

    return (
      <div>
        <div>
          <img src={image_url} />
        </div>
        <div>
          <h3>{name}</h3>
          <h4>${price}</h4>
          {vendorLoggedIn ? <button>Update Item</button> : <button>Add</button>}
        </div>
      </div>
    );
}