import { useState } from "react";
import PlantsCardList from "../components/PlantsCardList";
import SecondTitle from "../components/SecondTitle";

export default function Products() {
    const [sortType, setSortType] = useState('default')
    const handleSortChange = e => {
        setSortType(e.target.value);
    };
    return (
        <>
            <SecondTitle text1='Shop' text2='Find the perfect plant for your space' />
            <div className="wrapper product-page">
                <aside className="aside">
                    sgfg
                </aside>

                <div className="cards-block">
                    <div className="sort-block">
                        <div className="border">
                            <label htmlFor="sort">
                                Sort By
                            </label>
                            <select name="" onChange={handleSortChange} id="sort" value={sortType}>
                                <option value="default">Default</option>
                                <option value="price-high">Price(high-to-low)</option>
                                <option value="price-low">Price(low-to-high)</option>
                                <option value="popular">Popular</option>
                                <option value="deals">Discount</option>
                            </select>
                        </div>

                        <p>Showing # products</p>
                    </div>
                    <PlantsCardList filterType={sortType} limit={0} />

                </div>
            </div>

        </>
    )
}