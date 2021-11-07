import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getItems } from "../features/item/itemSlice"
import ItemCard from "./ItemCard"
import AddItemForm from "./AddItemForm"
import Loading from "./Loading"

export default function VendorHomePage() {
    //REDUX
    const dispatch = useDispatch()
    const vendor = useSelector(state => state.login.vendor)
    const items = useSelector(state => state.item.items)
    const loading = useSelector(state => state.item.isLoading)


    useEffect(() => {
        dispatch(getItems(`${vendor.id}`))
    }, [dispatch, vendor.id]);
  
  if (loading) {
    return <Loading />;
  } else {
    const displayItems = items.map((item) => {
      return <ItemCard key={item.id} item={item} />;
    });
    return (
      <div>
        <div>
          <h1>{vendor.name}</h1>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#addItem"
            aria-expanded="false"
            aria-controls="addItem"
          >
            Add Item{" "}
          </button>

          <div id="addItem">
            <AddItemForm />
          </div>
        </div>
        <div>{displayItems}</div>
      </div>
    );
  }

}
