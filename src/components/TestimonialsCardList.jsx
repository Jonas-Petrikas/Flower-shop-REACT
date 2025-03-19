import './componentsStyle/TestimonialsCardList.css'
import useFetch from '../hooks/useFetch';
import DotLoader from "react-spinners/DotLoader";
import TestimonialCard from './TestimonialCard';

export default function TestimonialsCardList() {

    const { result: testimonials, loading, error } = useFetch({
        url: 'https://gist.githubusercontent.com/Jonas-Petrikas/4af93c688f944f330766b5de0063ac71/raw/a4003616afb5a280e0cc151282a27eb73b4223f4/testimonials.json',
        folder: 'Clients',
        apiImage: 'img'
    });


    if (loading) {
        return (
            <div className="testimonials-card-list">
                <DotLoader color='#50806B' />
            </div>
        )
    }
    if (error) {
        return (
            <div className="testimonials-card-list">
                error: {error}
            </div>

        )
    }

    console.log(testimonials);

    return (
        <div className="testimonials-card-list">
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


        </div>
    )

}
