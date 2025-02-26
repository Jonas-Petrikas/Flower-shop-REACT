import BestCardList from './BestCardList';
import './componentsStyle/SectionBest.css';
import Title from './Title';

export default function SectionBest() {
    return (
        <section className="wrapper">
            <Title text1='Best' text2='Selling' showLink={true} />
            <BestCardList />
        </section>
    );
}
