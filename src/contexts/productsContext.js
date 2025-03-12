import { createContext } from "react";
import useFetch from '../hooks/useFetch';

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const { result: products, loading, error } = useFetch(
        {
            url: 'https://gist.githubusercontent.com/Jonas-Petrikas/a9c1276f028ff25266ee105ce913a553/raw/e4b72ada1e44abbfe786b94204104464e86da7ad/plants.json',
            folder: 'Plants',
            apiImage: 'image'
        }
    )
    const value = {
        products,
        loading,
        error
    }

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}
export default ProductsContext;