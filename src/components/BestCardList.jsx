import React, { useState, useEffect } from 'react';
import BestCard from './BestCard';

export default function BestCardList() {
    const [bestCards, setBestCards] = useState([]);

    useEffect(() => {



        const fetchBestCards = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/Jonas-Petrikas/096579d09f9ea11ba867f2a16bdc8f90/raw/b3beb182d686873aa638c09fc5169823bb62edc6/BestTags.json')
                const data = await response.json();
                console.log(data);

                const bestCardsWithImages = await Promise.all(
                    data.map(async (bc) => {
                        const imagePath = await
                            import(`../img/BestSelling/${bc.fileName}`);
                        return {
                            ...bc,
                            imageSrc: imagePath.default,
                        };
                    }));
                setBestCards(bestCardsWithImages);

            } catch (error) {
                console.error('Klaida gaunant best cardus', error);
            }
        }
        fetchBestCards();
    }, []);

    console.log(bestCards);

    return (
        <div className="best-card-list">
            {
                bestCards.map((card) => (
                    < BestCard
                        key={card.id}
                        imageSrc={card.imageSrc}
                        title={card.title}
                    />
                ))
            }
        </div>
    )

}
