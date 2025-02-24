import { useState, useEffect } from 'react';
import './CategoriesList.css';
import Category from './Category';

export default function CategoriesList() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/Jonas-Petrikas/2dfbd8cb69b9ad8931a4db2dc7f9118c/raw/a8cceb245daf7d6f494eee5b06393fbe03a3a06c/category.json')
                const data = await response.json();
                console.log(data);

                const categoriesWithImages = await Promise.all(data.map(async (category) => {
                    const imagePath = await
                        import(`../img/${category.fileName}`);
                    return {
                        ...category,
                        imageSrc: imagePath.default,
                    };
                }));

                console.log(categoriesWithImages);
                setCategories(categoriesWithImages);

            } catch (error) {
                console.error('Klaida gaunant kategorijas', error);
            }
        }
        fetchCategories();
    }, []);

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
