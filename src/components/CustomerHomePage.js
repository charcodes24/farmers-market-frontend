import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getVendors } from "../features/vendor/vendorSlice"

export default function CustomerHomePage() {
    const dispatch = useDispatch()
    const vendors = useSelector(state => state.vendor.vendorList)

    console.log("CHP", vendors)

    useEffect(() => {
        dispatch(getVendors())
    }, []);

    return <h1>Customer Home Page</h1>
}