import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Experience } from './experience/Experience';
import { Skills } from './skills/Skills';
import { Projects } from './projects/Projects';

import './App.scss';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    primary: createColor('#286e6b'),
    secondary: createColor('#ef6440'),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Skills />
      <Experience />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
