import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getVendors } from "../features/vendor/vendorSlice"

import VendorCard from "./VendorCard"

export default function CustomerHomePage() {
    const dispatch = useDispatch()
    const vendors = useSelector(state => state.vendor.vendorList)

    console.log("CHP", vendors)

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
    }, []);

    return (
        <div>
            {displayVendors}
        </div>
    )
}