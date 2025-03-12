
import './componentsStyle/PlantCard.css';


export default function PlantCard({ plantId, title, price, imageSrc, discount, showDiscount }) {
    return (
        <div className="plant-card">
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
                            <span></span>
                            <span></span>
                        </>

                    ) :
                        (
                            <div className="plant-price">
                                {price}
                            </div>

                        )
                }
            </div>
        </div>
    );
}
