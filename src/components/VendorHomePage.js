import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getItems } from "../features/item/itemSlice"
import ItemCard from "./ItemCard"

export default function VendorHomePage() {
    const dispatch = useDispatch()
    const vendor = useSelector(state => state.login.vendor)
    const items = useSelector(state => state.item.items)

    console.log(items)


    useEffect(() => {
        dispatch(getItems(`${vendor.id}`))
    }, [dispatch, vendor.id]);

    const displayItems = items.map(item => {
        return (
            <ItemCard
                key={item.id}
                item={item}
            />
        )
    })
    
    return (
      <div>
            <h1>{vendor.name}</h1>
            <div>
                {displayItems}
            </div>
      </div>
    );
}