import './componentsStyle/TestimonialsCardList.css'
import useFetch from '../hooks/useFetch';
import TestimonialCard from './TestimonialCard';
import DataHandler from '../utils/DataHandler';

export default function TestimonialsCardList() {

    const { result: testimonials, loading, error } = useFetch({
        url: 'https://gist.githubusercontent.com/Jonas-Petrikas/4af93c688f944f330766b5de0063ac71/raw/a4003616afb5a280e0cc151282a27eb73b4223f4/testimonials.json',
        folder: 'Clients',
        apiImage: 'img'
    });


    return (
        <div className="testimonials-card-list">
            <DataHandler loading={loading} error={error}>

                {
                    testimonials.map(card => (
                        <TestimonialCard
                            key={card.id}
                            imageSrc={card.imageSrc}
                            text={card.text}
                            name={card.name}
                            rating={card.rating}
                        />

                    ))
                }

            </DataHandler>
        </div>
    )

}
