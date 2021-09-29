import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getVendors } from "../features/vendor/vendorSlice"

import About from "./About"
import VendorCard from "./VendorCard"

export default function CustomerHomePage() {
  //REDUX
    const dispatch = useDispatch()
    const vendors = useSelector(state => state.vendor.vendorList)

  //DISPLAYING VENDORS IN VENDORCARDS
    const displayVendors = vendors.map((vendor) => <VendorCard key={vendor.id} vendor={vendor} />)

    useEffect(() => {
        dispatch(getVendors())
    }, [dispatch]);

    return (
      <div>
        <About />
        <div>
          <div className="row m-5 justify-content-center">
            {displayVendors}
          </div>
        </div>
      </div>
    );
}