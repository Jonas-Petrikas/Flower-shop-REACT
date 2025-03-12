
import BestCard from './BestCard';
import './componentsStyle/BestCardList.css'
import useFetch from '../hooks/useFetch';
import DotLoader from "react-spinners/DotLoader";

export default function BestCardList() {

    const { result: bestCards, loading, error } = useFetch({ url: 'https://gist.githubusercontent.com/Jonas-Petrikas/096579d09f9ea11ba867f2a16bdc8f90/raw/b3beb182d686873aa638c09fc5169823bb62edc6/BestTags.json', folder: 'BestSelling', apiImage: 'fileName' })


    if (loading) {
        return (
            <div className="best-card-list">
                <DotLoader color='#50806B' />
            </div>
        )
    }
    if (error) {
        return (
            <div className="best-card-list">
                error: {error}
            </div>

        )
    }

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
