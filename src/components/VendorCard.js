import { Link } from "react-router-dom"

export default function VendorCard({ vendor }) {
    const { id, name, description, image_url } = vendor

    return (
        <div>
            <Link to={`/vendors/${id}`}>
                <div>{name}</div>
            </Link>
        </div>
    )
}