import { useGetProductsQuery } from "../features/products/productsApi";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

export default function Home() {
    const { data: products = [], isLoading, error } = useGetProductsQuery();

    if (isLoading) return <p>Loading...</p>

    if (error) return console.log(error)

    return (
        <>
            <Header />

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
                <div className="flex flex-wrap justify-around">
                    {products.map(el => (
                        <div key={el.id}>
                            <img className="w-70" src={el.image} alt=""/>
                            <p>{el.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <h1 className="text-center text-2xl">Home</h1>

            {/*<Footer />*/}
        </>
    )
}
