import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { showVendor } from "../features/vendor/vendorSlice";

import ItemCard from "./ItemCard";
import Loading from "./Loading";

export default function VendorPage() {
  //PARAMS
  const { id } = useParams();

  //REDUX
  const dispatch = useDispatch();
  const items = useSelector(state => state.vendor.vendor.items)
  const vendor = useSelector(state => state.vendor.vendor)
  const loading = useSelector(state => state.vendor.isLoading)
  

  useEffect(() => {
    dispatch(showVendor(id));
  }, [dispatch, id]);


  if (loading) {
    return <Loading />
  } else {
    const displayItems = items.map((item) => <ItemCard key={item.id} item={item} />)
    return (
      <div>
        <div>
          <h1>{vendor.name}</h1>
        </div>
        <div>
          <p>{vendor.description}</p>
        </div>
        <div>
          <div>{displayItems}</div>
        </div>
      </div>
    );
    
  }
}
