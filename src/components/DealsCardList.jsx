import PlantCard from "./PlantCard";
import { useProducts } from "../hooks/useProducts";
import { DotLoader } from "react-spinners";
import './componentsStyle/DealsCardList.css';

export default function DealsCardList() {

    const { products, loading, error } = useProducts();

    const sortedProducts = products.sort((a, b) => b.discount - a.discount);
    const topDiscounted = sortedProducts.slice(0, 4);
    console.log(topDiscounted);

    if (loading) {
        return (
            <div className="deals-cards-list">
                <DotLoader color='#50806B' />
            </div>
        )
    }
    if (error) {
        return (
            <div className="deals-cards-list">
                error: {error}
            </div>

        )
    }

    console.log(products);


    return (
        <>
            <div className="deals-card-list">

                {
                    topDiscounted.map(product => (
                        <PlantCard
                            key={product.id}
                            imageSrc={product.imageSrc}
                            title={product.title}
                            price={product.price}
                            showDiscount={true}
                            discount={product.discount}

                        />
                    )
                    )
                }


            </div>
        </>

    )
}