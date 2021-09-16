import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { getItems } from "../features/item/itemSlice";

export default function VendorPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const items = useSelector(state => state.item.items)
    const vendor = useSelector(state => state.item.vendor)

    console.log("Item", items, "Vendor", vendor)
    
    useEffect(() => {
        dispatch(getItems(id))
    }, []);

    return (
        <h1>hi</h1>
    )
}