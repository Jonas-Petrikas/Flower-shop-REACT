import './componentsStyle/SectionHot.css';
import HotCardList from './HotCardList';
import Title from './Title';

export default function SectionHot() {
    return (
        <section className="section-hot light-bg">
            <div className="wrapper">
                <Title text1='Hottest' text2='plants' showLink={true} />
                <HotCardList />
            </div>

        </section>
    );
}