import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { trackPromise } from "react-promise-tracker";

import { showVendor } from "../features/vendor/vendorSlice";

import ItemCard from "./ItemCard";
import Loading from "./Loading";

export default function VendorPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const items = useSelector(state => state.vendor.vendor.items)
  const vendor = useSelector(state => state.vendor.vendor)
  const loading = useSelector(state => state.vendor.isLoading)
  

  console.log("VENDOR", vendor, "ITEMS", items)
  

  useEffect(() => {
    dispatch(showVendor(id));
  }, []);

  // const displayItems = items.map((item) => (
  //   <ItemCard key={item.id} item={item} />
  // ));


  // if (loading) {
  //   return <Loading />
  // } else {
  //   const displayItems = items.map((item) => <ItemCard key={item.id} item={item}/>)
  //   return (
  //     <div>
  //       <h1>{vendor.name}</h1>
  //       <p>{vendor.description}</p>
  //       <div>{displayItems}</div>
  //     </div>
  //   );
    
  // }

  // return <h1>vendor</h1>

  // return (
  //   <div>
  //     {loading ? <Loading /> : items.map(item => <ItemCard key={item.id} item={item} />)}
  //   </div>
  // )
  return (
    <div>
      <h1>{vendor.name}</h1>
      <p>{vendor.description}</p>
      {items.map(item => <ItemCard key={item.id} item={item} />)}
    </div>
  );
}
