import { Box, Button, Text } from 'grommet';
import { Add } from 'grommet-icons';

import Habit from '../components/Habit';

function Habits({
  habits,
  setHabits,
  openCreateModal,
  openEditModal,
  openDeleteModal,
}) {
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

  return (
    <Box direction="column" overflow="hidden">
      <Box
        margin="small"
        border={{ color: 'black', size: 'small', side: 'bottom' }}
      >
        <Button alignSelf="center" onClick={openCreateModal}>
          <Box direction="row" align="center" justify="center">
            <Add color="blue" />
            <Text margin="small">Add New Habit</Text>
          </Box>
        </Button>
      </Box>
      {habits.length === 0 ? (
        <Text alignSelf="center" margin={{ top: 'large' }}>
          No habits to show...
        </Text>
      ) : (
        habits.map((habit, i) => (
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
