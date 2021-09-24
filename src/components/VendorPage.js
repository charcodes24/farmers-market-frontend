import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { showVendor } from "../features/vendor/vendorSlice";

import ItemCard from "./ItemCard";
import Loading from "./Loading";

export default function VendorPage({ cart, setCart, quantity, setQuantity }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const items = useSelector(state => state.vendor.vendor.items)
  const vendor = useSelector(state => state.vendor.vendor)
  const loading = useSelector(state => state.vendor.isLoadingVendor)
  

  useEffect(() => {
    dispatch(showVendor(id));
  }, [dispatch, id]);


  if (loading) {
    return <Loading />
  } else {
    const displayItems = items.map((item) => <ItemCard key={item.id} item={item} cart={cart} setCart={setCart} />)
    return (
      <div>
        <h1>{vendor.name}</h1>
        <p>{vendor.description}</p>
        <div className="item">{displayItems}</div>
      </div>
    );
    
  }
}
