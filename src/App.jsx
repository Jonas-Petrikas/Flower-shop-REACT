import './App.css';
import SectionBest from './components/SectionBest';
import SectionCategories from './components/SectionCategories';
import SectionHero from './components/SectionHero';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <SectionHero />
      <SectionCategories />
      <SectionBest />

    </div>
  );
}

export default App;
