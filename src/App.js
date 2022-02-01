import { Experience } from './experience/Experience';
import { Skills } from './skills/Skills';
import { Projects } from './projects/Projects';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { About } from './about/About';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
