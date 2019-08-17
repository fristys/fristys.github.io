import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import Header from './Header';
import Personal from './Personal';
import SectionDivider from './SectionDivider';
import Experience from './Experience';

import metadata from './metadata.json';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header metadata={metadata.personal} />
        <Personal metadata={metadata.personal} />
        <SectionDivider />
        <Experience metadata={metadata} />
      </div>
    </ThemeProvider>
  );
}

export default App;
