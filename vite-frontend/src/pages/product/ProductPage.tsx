import { useParams } from "react-router-dom";

export default function ProductPage() {
    const { productId } = useParams();
    return (
        <>
            <h1>ProductDetail</h1>
            <p>{productId}</p>
        </>
    )
}
