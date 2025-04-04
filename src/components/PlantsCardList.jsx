import './componentsStyle/PlantsCardList.css';
import PlantCard from './PlantCard';
import { useProducts } from '../hooks/useProducts';
import DataHandler from '../utils/DataHandler';


export default function PlantsCardList({ filterType, limit = 4 }) {

    const { products, loading, error } = useProducts();
    console.log(products);

    const getFilteredProducts = products => {
        let filtered = products;
        if (filterType === 'hot') {
            filtered = products.filter(product => product.rating === 5)
        } else if (filterType === 'deals') {
            filtered = products.sort((a, b) => b.discount - a.discount);
        } else if (filterType === 'price-high') {
            filtered = products.sort((a, b) => b.price - a.price);
        } else if (filterType === 'price-low') {
            filtered = products.sort((a, b) => a.price - b.price);
        } else if (filterType === 'popular') {
            filtered = products.sort((a, b) => b.rating - a.rating);
        } else if (filterType === 'default') {
            filtered = products.sort((a, b) => a.id - b.id)
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
                            plantId={product.id}
                            imageSrc={product.imageSrc}
                            title={product.title}
                            price={product.price}
                            showDiscount={filterType === 'deals'}
                            discount={product.discount}

                        />
                    )
                    )
                }
            </DataHandler>

        </div>
    )

}
