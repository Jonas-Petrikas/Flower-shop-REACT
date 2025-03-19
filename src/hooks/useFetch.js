import { useState, useEffect } from "react";

export default function useFetch({ url, folder, apiImage }) {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error('failed to get data from API')
                }
                const data = await response.json();
                console.log(data);

                const dataWithImages = await Promise.all(data.map(async (dataItem) => {
                    let imagePath;
                    try {
                        imagePath = await
                            import(`../img/${folder}/${dataItem[apiImage]}`);

                    }
                    catch (err) {
                        imagePath = await
                            import(`../img/${folder}/empty.svg`);

                    }

                    return {
                        ...dataItem,
                        imageSrc: imagePath.default,
                    };
                }));
                await new Promise(resolve => setTimeout(resolve, 1000));

                setResult(dataWithImages);

            } catch (error) {
                setError(error.message);
                console.error('Klaida gaunant duomenis', error);

            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url, folder, apiImage]);

    return { result, loading, error }

}