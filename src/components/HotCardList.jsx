
import './componentsStyle/HotCardList.css';
import useFetch from '../hooks/useFetch';
import PlantCard from './PlantCard';
import DotLoader from "react-spinners/DotLoader";
import { useProducts } from '../hooks/useProducts';


export default function HotCardList() {

    // const { result: products, loading, error } = useFetch(
    //     {
    //         url: 'https://gist.githubusercontent.com/Jonas-Petrikas/a9c1276f028ff25266ee105ce913a553/raw/e4b72ada1e44abbfe786b94204104464e86da7ad/plants.json',
    //         folder: 'Plants',
    //         apiImage: 'image'
    //     }
    // )

    const { products, loading, error } = useProducts();


    if (loading) {
        return (
            <div className="hot-cards-list">
                <DotLoader color='#50806B' />
            </div>
        )
    }
    if (error) {
        return (
            <div className="hot-cards-list">
                error: {error}
            </div>

        )
    }


    console.log(products);


    const filteredProducts = products.filter(product => product.rating === 5)
    console.log(filteredProducts)

    return (
        <div className='hot-cards-list'>
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

        </div>
    )

}
