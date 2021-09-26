import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getItems } from "../features/item/itemSlice"
import ItemCard from "./ItemCard"
import AddItemForm from "./AddItemForm"
import Loading from "./Loading"

export default function VendorHomePage() {
    //REACT STATE
    const [toggleForm, setToggleForm] = useState(false)

    //REDUX
    const dispatch = useDispatch()
    const vendor = useSelector(state => state.login.vendor)
    const items = useSelector(state => state.item.items)
    const loading = useSelector(state => state.item.isLoading)


    useEffect(() => {
        dispatch(getItems(`${vendor.id}`))
    }, [dispatch, vendor.id]);

    function handleToggleForm() {
        setToggleForm(!toggleForm)
    }
  
  if (loading) {
    return <Loading />;
  } else {
    const displayItems = items.map((item) => {
      return <ItemCard key={item.id} item={item} />;
    });
    return (
      <div>
        <div className="vendor">
          <h1>{vendor.name}</h1>
          <button onClick={handleToggleForm}>Add Item</button>
          {toggleForm ? <AddItemForm /> : null}
        </div>
        <div className="item">{displayItems}</div>
      </div>
    );
  }

}
