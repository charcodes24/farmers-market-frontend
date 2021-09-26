import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getVendors } from "../features/vendor/vendorSlice"

import About from "./About"
import VendorCard from "./VendorCard"

export default function CustomerHomePage() {
    const dispatch = useDispatch()
    const customer = useSelector(state => state.login.customer)
    const vendor = useSelector(state => state.login.vendor)
    const vendors = useSelector(state => state.vendor.vendorList)

    const displayVendors = vendors.map((vendor) => {
        return (
            <VendorCard
                key={vendor.id}
                vendor={vendor}
            />
        )
    })

    useEffect(() => {
        dispatch(getVendors())
    }, [dispatch]);

    return (
        <div>
            <About />
            <div className="vendors">
                {displayVendors}
            </div>
      </div>
    );
}