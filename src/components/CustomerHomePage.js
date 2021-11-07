import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getVendors, clearVendor } from "../features/vendor/vendorSlice"

import Header from "./Header"
import VendorCard from "./VendorCard"

export default function CustomerHomePage() {
  //REDUX
    const dispatch = useDispatch()
  const vendors = useSelector(state => state.vendor.vendorList)

  //DISPLAYING VENDORS IN VENDORCARDS
    const displayVendors = vendors.map((vendor) => <VendorCard key={vendor.id} vendor={vendor} />)

    useEffect(() => {
      dispatch(getVendors())
      dispatch(clearVendor())
    }, [dispatch]);

    return (
      <div>
        <Header />
        <div>
          <div>
            {displayVendors}
          </div>
        </div>
      </div>
    );
}