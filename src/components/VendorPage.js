import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { getItems } from "../features/item/itemSlice";

import ItemCard from "./ItemCard";
import Loading from "./Loading";

export default function VendorPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const items = useSelector(state => state.item.items)
    const vendor = useSelector(state => state.item.vendor)
    const isLoading = useSelector(state => state.item.isLoading)
    
    useEffect(() => {
        dispatch(getItems(id))
    }, []);

    const displayItems = items.map((item) => {
        return (
            <ItemCard
                key={item.id}
                item={item}
            />
        )
    })

    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <h1>{vendor.name}</h1>
            <p>{vendor.description}</p>
            <div>{displayItems}</div>
          </div>
        )}
      </div>
    );
}