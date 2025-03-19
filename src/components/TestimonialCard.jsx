
import './componentsStyle/TestimonialCard.css';


export default function TestimonialCard({ id, name, imageSrc, text, rating }) {

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<span className='star full' key={i}>★</span>)
            } else if (rating >= i - 0.5) {
                stars.push(<span className='star half' key={i}>★</span>)

            } else {
                stars.push(<span className='star' key={i}>★</span>)

            }

        }
        return stars;
    }

    return (
        <div className="testimonial-card">
            <img src={imageSrc} alt={name} />
            <div className="rating">
                {
                    renderStars(rating)
                }


            </div>
            <p className='comment'>"{text}"</p>
            <h3 className='name'>{name}</h3>
        </div>
    );
}
