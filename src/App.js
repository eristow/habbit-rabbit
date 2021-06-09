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

const HABITS_STORAGE_KEY = 'habits';
const TIME_STORAGE_KEY = 'timeLastVisited';
const MOMENT_FORMAT = 'ddd MM-DD-YYYY hh:mm:ss';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [habits, setHabits] = useState([]);

  // Create listener to add time to localStorage on page unload
  window.addEventListener('beforeunload', (ev) => {
    ev.preventDefault();
    window.localStorage.setItem(
      TIME_STORAGE_KEY,
      moment().format(MOMENT_FORMAT)
    );
  });

  // Grab habits from localStorage on page load
  useEffect(() => {
    const habits = localStorage.getItem(HABITS_STORAGE_KEY);
    if (habits) {
      setHabits(JSON.parse(habits));
    }
  }, []);

  // Set timeout for habit reset
  useEffect(() => {
    const resetHabits = () => {
      console.log('resetHabits fired');
      // weekly reset
      if (moment().day() === 1) {
        console.log('weekly reset');
        setHabits((habits) =>
          habits.map((habit) => ({ ...habit, numTimesChecked: 0 }))
        );
      }

      // daily reset
      console.log('daily reset');
      setHabits((habits) =>
        habits.map((habit) => ({ ...habit, checked: false }))
      );
    };

    // Calculate number of resets since timeLastVisited
    const timeLastVisited = moment(
      window.localStorage.getItem(TIME_STORAGE_KEY),
      MOMENT_FORMAT
    );

    const diff = moment().diff(timeLastVisited, 'days');
    if (diff >= 1) {
      if (diff >= 7) {
        console.log('weekly reset diff');
        setHabits((habits) =>
          habits.map((habit) => ({ ...habit, numTimesChecked: 0 }))
        );
      }

      console.log('daily reset diff');
      setHabits((habits) =>
        habits.map((habit) => ({ ...habit, checked: false }))
      );
    }

    // Fire resetHabits at midnight
    setTimeout(
      resetHabits,
      moment('24:00:00', 'hh:mm:ss').diff(moment(), 'milliseconds')
    );
  }, []);

  // Update localStorage habits everytime useState habits changes
  useEffect(() => {
    localStorage.setItem(HABITS_STORAGE_KEY, JSON.stringify(habits));
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
