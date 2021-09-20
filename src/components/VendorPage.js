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
  const loading = useSelector(state => state.vendor.isLoadingVendor)
  
  console.log("ITEMS", items)
  console.log("VENDOR", vendor.items)
  

  useEffect(() => {
    dispatch(showVendor(id));
  }, []);

  // const displayItems = items.map((item) => (
  //   <ItemCard key={item.id} item={item} />
  // ));


  // console.log("DISPLAY", displayItems)


  if (loading) {
    return <Loading />
  } else {
    const displayItems = items.map((item) => <ItemCard key={item.id} item={item}/>)
    return (
      <div>
        <h1>{vendor.name}</h1>
        <p>{vendor.description}</p>
        <div>{displayItems}</div>
      </div>
    );
    
  }

  // return (
  //   <div>
  //     {loading ? (
  //       <Loading />
  //     ) : (
  //         <div>
  //           <h1>{vendor.name}</h1>
  //           <p>{vendor.description}</p>
  //           {/* {displayItems} */}
  //         </div>
  //     )}
  //   </div>
  // );
}
