import './componentsStyle/SectionHot.css';
import PlantsCardList from './PlantsCardList';
import Title from './Title';

export default function SectionHot() {
    return (
        <section className="section-hot light-bg">
            <div className="wrapper">
                <Title text1='Hottest' text2='plants' showLink={true} />
                <PlantsCardList filterType='hot' limit={8} />
            </div>

        </section>
    );
}