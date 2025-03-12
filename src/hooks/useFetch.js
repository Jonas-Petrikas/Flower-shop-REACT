import { useState, useEffect } from "react";

export default function useFetch({ url, folder, apiImage }) {
    const [result, setResult] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
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
                            import(`../img/empty.svg`);

                    }

                    return {
                        ...dataItem,
                        imageSrc: imagePath.default,
                    };
                }));


                setResult(dataWithImages);

            } catch (error) {
                console.error('Klaida gaunant duomenis', error);
            }
        }
        fetchData();
    }, [url, folder, apiImage]);

    return result;

}