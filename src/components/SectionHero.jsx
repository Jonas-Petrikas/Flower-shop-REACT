import TopBanner from './TopBanner';
import './componentsStyle/SectionHero.css';
import Header from './Header';
import Hero from './Hero';

export default function SectionHero() {
    return (
        <section className=''>
            <TopBanner />
            <Header />
            <Hero />

        </section>
    );
}
