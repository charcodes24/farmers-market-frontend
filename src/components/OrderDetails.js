
import { useParams, useHistory } from "react-router"
import { useSelector, useDispatch } from "react-redux"

import { orderAgain } from "../features/cart/cartSlice"

export default function OrderDetails() {
  //USEHISTORY HOOK
  const history = useHistory()

  //PARAMS
  const { id } = useParams();

  //REDUX
  const dispatch = useDispatch()
  const orders = useSelector(state => state.cart.orders)

  const thisOrder = orders.find(order => order.id === parseInt(id))

  const filteredItems = thisOrder.items.reduce((sums, item) => {
      sums[item.name] = (sums[item.name] || 0) + 1;
      return sums
  }, {})

  const itemsArray = Object.entries(filteredItems)
  const displayItems = itemsArray.map(item => {
        return (
          <div className="col-sm-4 p-5 card border-light">
            <p>Item: {item[0]}</p>
            <p>Quantity: {item[1]}</p>
          </div>
        );
    })
  
  function hanldeOrderAgain() {
    dispatch(orderAgain(thisOrder.items))
    history.push('/cart')
  }

  //STYLING
  const card = {
    marginTop: "18%"
  };

    
    return (
      <div className="text-center" style={card}>
        <h1>This order was placed on {thisOrder.date_placed}</h1>
        <p>Order Number: {thisOrder.id}</p>
        <div className="row m-5 justify-content-center">{displayItems}</div>
        <p>Order Total: ${thisOrder.subtotal}</p>
        <button className="btn" onClick={hanldeOrderAgain}>
          Order Again
        </button>
      </div>
    );
}