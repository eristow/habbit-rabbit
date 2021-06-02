import { useEffect, useState } from 'react';
import { Box, Grommet } from 'grommet';
import moment from 'moment';

import HabitsContainer from './containers/HabitsContainer';
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

const STORAGE_KEY = 'habits';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [habits, setHabits] = useState([]);

  // Grab habits from localStorage on page load
  useEffect(() => {
    const habits = localStorage.getItem(STORAGE_KEY);
    if (habits) {
      setHabits(JSON.parse(habits));
    }
  }, []);

  // Set timeout for habit reset
  useEffect(() => {
    const resetHabits = () => {
      console.log('resetHabits fired');
      // weekly reset
      if (moment().day() === 2) {
        setHabits((habits) =>
          habits.map((habit) => ({ ...habit, numTimesChecked: 0 }))
        );
      }

      // daily reset
      setHabits((habits) =>
        habits.map((habit) => ({ ...habit, checked: false }))
      );
    };

    setTimeout(
      resetHabits,
      moment('24:00:00', 'hh:mm:ss').diff(moment(), 'milliseconds')
    );
  }, []);

  // Update localStorage habits everytime useState habits changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
  }, [habits]);

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
            <HabitsContainer habits={habits} setHabits={setHabits} />
          </Box>
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
