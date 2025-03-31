import { useLocation } from "react-router-dom"
import SecondTitle from "../components/SecondTitle";

export default function Product() {
    const location = useLocation();
    const plantData = location.state;
    return (
        <div>
            <SecondTitle text1='Plant' text2={plantData.title} />
            <h3>
                {
                    plantData.title
                }

            </h3>
            <h3>
                {
                    plantData.price
                }

            </h3>
        </div>
    )
}