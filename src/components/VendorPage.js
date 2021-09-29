import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { showVendor } from "../features/vendor/vendorSlice";

import ItemCard from "./ItemCard";
import Loading from "./Loading";

export default function VendorPage() {
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
    const displayItems = items.map((item) => <ItemCard key={item.id} item={item} />)
    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <h1>{vendor.name}</h1>
        </div>
        <div classname="row">
          <p>{vendor.description}</p>
        </div>
        <div className="row mt-3">
          <div>{displayItems}</div>
        </div>
      </div>
    );
    
  }
}
