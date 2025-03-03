
import './componentsStyle/CategoriesList.css';
import Category from './Category';
import useFetch from '../hooks/useFetch';

export default function CategoriesList() {

    const categories = useFetch(
        {
            url: 'https://gist.githubusercontent.com/Jonas-Petrikas/2dfbd8cb69b9ad8931a4db2dc7f9118c/raw/a8cceb245daf7d6f494eee5b06393fbe03a3a06c/category.json',
            folder: 'Category',
            apiImage: 'fileName'
        }
    )





    return (
        <div className="categories-list">
            {
                categories.map((category) => (
                    <Category
                        key={category.id}
                        imageSrc={category.imageSrc}
                        title={category.title}
                    />

                )
                )
            }
        </div>
    )

}
