import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getVendors } from "../features/vendor/vendorSlice"

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
            {(customer.name || vendor.name) ? (
                <div><h1>Welcome to the Farmer's Market, {customer.name || vendor.name}!!</h1></div>
            ) : null}
        <div className="vendors">{displayVendors}</div>
      </div>
    );
}