import { useState } from 'react';
import { Box, Grommet } from 'grommet';

import Habits from './containers/Habits';
import Header from './containers/Header';
import Sidebar from './containers/Sidebar';

const theme = {
  global: {
    colors: {
      'header-bg': '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet full theme={theme} themeMode="dark">
      <Box fill>
        <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        <Box
          direction="row"
          flex
          align="start"
          overflow={{ horizontal: 'hidden' }}
          pad="medium"
        >
          <Box flex align="center" justify="center" app body>
            <Habits />
          </Box>
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
