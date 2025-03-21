import './App.css';
import SectionBest from './components/SectionBest';
import SectionCategories from './components/SectionCategories';
import SectionDeals from './components/SectionDeals';
import SectionHero from './components/SectionHero';
import SectionHot from './components/SectionHot';
import SectionTestimonials from './components/SectionTestimonials';


function App() {
  return (
    <div className="App">
      <SectionHero />
      <SectionCategories />
      <SectionBest />
      <SectionHot />
      <SectionDeals />
      <SectionTestimonials />

    </div>
  );
}

export default App;
