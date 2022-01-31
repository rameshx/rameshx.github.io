import { Experience } from './experience/Experience';
import { Skills } from './skills/Skills';
import { Projects } from './projects/Projects';
import { Footer } from './footer/Footer';
import './App.scss';

function App() {
  return (
    <>
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
