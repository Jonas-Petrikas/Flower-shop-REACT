
import './componentsStyle/PlantCard.css';
import Button from './Button';
import { Link } from 'react-router-dom';


export default function PlantCard({ plantId, title, price, imageSrc, discount, showDiscount }) {
    const discountedPrice = discount ? (price * (1 - discount / 100)).toFixed(2) : price;
    const plantData = {
        title,
        imageSrc,
        price,
        discount,
        discountedPrice,
        plantId
    };

    return (
        <div className="plant-card">
            <Link to={`/products/${plantId}`} state={plantData}>
                <div className="image-box">
                    {
                        showDiscount && discount > 0 && (
                            <div className="discount-block">
                                <div>{discount} % </div>
                                <div>off</div>
                            </div>
                        )
                    }
                    <img src={imageSrc} alt={title} />

                </div>
                <div className="card-text">
                    <h3>{title}</h3>
                    {
                        showDiscount && discount > 0 ? (
                            <>
                                <span className='plant-price'>${discountedPrice}</span>
                                <span className='red-price'>{price}</span>
                            </>

                        ) :
                            (
                                <div className="plant-price">
                                    {price}
                                </div>

                            )
                    }
                </div>
            </Link>
            <Button className='green-btn'>BUY</Button>
        </div>
    );
}
