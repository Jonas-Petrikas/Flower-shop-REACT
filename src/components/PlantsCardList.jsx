import './componentsStyle/PlantsCardList.css';
import PlantCard from './PlantCard';
import { useProducts } from '../hooks/useProducts';
import DataHandler from '../utils/DataHandler';


export default function PlantsCardList({ filterType, limit = 4 }) {

    const { products, loading, error } = useProducts();

    const getFilteredProducts = products => {
        let filtered = products;
        if (filterType === 'hot') {
            filtered = products.filter(product => product.rating === 5)
        } else if (filterType === 'deals') {
            filtered = products.sort((a, b) => b.discount - a.discount);

        }
        return (
            limit ? filtered.slice(0, limit) : filtered
        );
    }

    const filteredProducts = getFilteredProducts(products);




    return (
        <div className='plants-card-list'>

            <DataHandler loading={loading} error={error}>
                {
                    filteredProducts.map(product => (
                        <PlantCard
                            key={product.id}
                            imageSrc={product.imageSrc}
                            title={product.title}
                            price={product.price}
                            showDiscount={false}
                            discount={product.discount}

                        />
                    )
                    )
                }
            </DataHandler>

        </div>
    )

}
