import SectionBest from '../components/SectionBest';
import SectionCategories from '../components/SectionCategories';
import SectionDeals from '../components/SectionDeals';
import Hero from '../components/Hero';
import SectionHot from '../components/SectionHot';
import SectionTestimonials from '../components/SectionTestimonials';

export default function Home() {
    return (
        <>
            <Hero />
            <SectionCategories />
            <SectionBest />
            <SectionHot />
            <SectionDeals />
            <SectionTestimonials />
        </>
    )
}