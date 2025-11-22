import { useGetProductsQuery } from "../features/products/productsApi";
import ProductCart from "../features/products/ProductCart";

export default function HomePage() {
    const { data: products = [], isLoading, error } = useGetProductsQuery();

    if (isLoading) return <p>Loading...</p>

    if (error) return console.log(error)

    return (
        <>
            <section
                className="h-[750px] w-full bg-cover relative left-1/2 right-1/2 -mx-[50vw] w-screen"
                style={{ backgroundImage: "url('../../public/banner-2.jpg')" }}
            >
            </section>
            <section>
                <div className="flex">
                    <p>Product</p>
                    <a href="#">Смотреть всё</a>
                </div>
                {/*<div className="flex flex-wrap justify-around">*/}
                {/*    {products.map(product => (*/}
                {/*        <ProductCart elem={product}/>*/}
                {/*    ))}*/}
                {/*</div>*/}
                <div className="flex flex-wrap justify-around">
                    {products.map(el => (
                        <div key={el.id}>
                            <img className="w-70" src={el.image} alt=""/>
                            <p>{el.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
