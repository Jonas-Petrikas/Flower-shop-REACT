import Button from './Button';
import './componentsStyle/BestCard.css';

export default function BestCard({ id, title, imageSrc }) {
    return (
        <div className="best-card">
            <a className='best-card-link' href={id}>
                <img className='best-image' src={imageSrc} alt={title} />
                <div className="best-overlay">
                    <h3 className='best-title'>
                        {title}
                    </h3>
                </div>
            </a>
            <Button className='green-btn'>
                Shop now
            </Button>
        </div>

    )


}