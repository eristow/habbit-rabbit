import { useEffect, useState } from 'react';
import { Box, Button, Text } from 'grommet';
import { Add } from 'grommet-icons';

import Habit from '../components/Habit';

const FILTER_TYPE = Object.freeze({
  all: 0,
  unchecked: 1,
  checked: 2,
});

function FilterButton(props) {
  const { filter, currentFilter, onClick } = props;

  return (
    <Button
      primary={filter === currentFilter ? true : false}
      onClick={onClick}
      {...props}
    />
  );
}

function Habits({
  habits,
  setHabits,
  openCreateModal,
  openEditModal,
  openDeleteModal,
}) {
  const [filteredHabits, setFilteredHabits] = useState(habits);
  const [filter, setFilter] = useState(FILTER_TYPE.all);

  const applyFilter = (filterType) => {
    let newFilteredHabits = habits;

    switch (filterType) {
      case FILTER_TYPE.all:
        newFilteredHabits = habits;
        break;
      case FILTER_TYPE.unchecked:
        newFilteredHabits = habits.filter((habit) => habit.checked === false);
        break;
      case FILTER_TYPE.checked:
        newFilteredHabits = habits.filter((habit) => habit.checked === true);
        break;
      default:
        newFilteredHabits = habits;
    }

    return newFilteredHabits;
  };

  const onCheckHabit = (checked, label) => {
    setHabits(
      habits.map((habit) =>
        habit.label === label
          ? {
              ...habit,
              checked,
              numTimesChecked: checked
                ? Math.min(habit.numTimesChecked + 1, habit.frequency)
                : habit.numTimesChecked - 1,
            }
          : habit
      )
    );
  };

  const filterOnClick = (newFilterType) => {
    setFilter(newFilterType);
    let newFilteredHabits = applyFilter(newFilterType);

    setFilteredHabits(newFilteredHabits);
  };

  // update filteredHabits when habits change
  useEffect(() => {
    const newFilteredHabits = applyFilter(filter);
    setFilteredHabits(newFilteredHabits);
  }, [habits]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box direction="column" overflow="hidden">
      <Box
        margin="small"
        border={{ color: 'border-color', size: 'small', side: 'bottom' }}
      >
        <Button alignSelf="center" onClick={openCreateModal}>
          <Box direction="row" align="center" justify="center">
            <Add color="add-color" />
            <Text margin="small">Add New Habit</Text>
          </Box>
        </Button>
      </Box>
      <Box
        direction="row"
        justify="between"
        margin={{ top: 'xsmall', bottom: 'xsmall' }}
      >
        <FilterButton
          label="All"
          filter={FILTER_TYPE.all}
          currentFilter={filter}
          onClick={() => filterOnClick(FILTER_TYPE.all)}
        />
        <FilterButton
          label="Unchecked"
          filter={FILTER_TYPE.unchecked}
          currentFilter={filter}
          onClick={() => filterOnClick(FILTER_TYPE.unchecked)}
        />
        <FilterButton
          label="Checked"
          filter={FILTER_TYPE.checked}
          currentFilter={filter}
          onClick={() => filterOnClick(FILTER_TYPE.checked)}
        />
      </Box>
      {habits.length === 0 ? (
        <Text alignSelf="center" margin={{ top: 'large' }}>
          No habits to show...
        </Text>
      ) : (
        filteredHabits.map((habit, i) => (
          <Habit
            key={`${habit.label} ${i}`}
            habit={habit}
            onCheckHabit={onCheckHabit}
            openEditModal={openEditModal}
            openDeleteModal={openDeleteModal}
          />
        ))
      )}
    </Box>
  );
}

export default Habits;
