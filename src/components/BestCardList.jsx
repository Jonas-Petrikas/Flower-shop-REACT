
import BestCard from './BestCard';
import './componentsStyle/BestCardList.css'
import useFetch from '../hooks/useFetch';
import DataHandler from '../utils/DataHandler';

export default function BestCardList() {

    const { result: bestCards, loading, error } = useFetch({ url: 'https://gist.githubusercontent.com/Jonas-Petrikas/096579d09f9ea11ba867f2a16bdc8f90/raw/b3beb182d686873aa638c09fc5169823bb62edc6/BestTags.json', folder: 'BestSelling', apiImage: 'fileName' })



    return (
        <div className="best-card-list">

            <DataHandler loading={loading} error={error}>
                {
                    bestCards.map((card) => (
                        < BestCard
                            key={card.id}
                            imageSrc={card.imageSrc}
                            title={card.title}
                        />
                    ))
                }
            </DataHandler>
        </div>
    )

}
