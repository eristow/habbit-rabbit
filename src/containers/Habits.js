import { useState } from 'react';
import { Box, Button, CheckBox, TextInput } from 'grommet';
import { Add } from 'grommet-icons';

const defaultHabits = [
  { label: 'Brush teeth', checked: true },
  { label: 'Take meds', checked: false },
  { label: 'Fitness', checked: false },
];

function Habits() {
  const [habits, setHabits] = useState([...defaultHabits]);
  const [newHabitLabel, setNewHabitLabel] = useState('');

  const habitOnChange = (checked, label) => {
    setHabits(
      habits.map((habit) =>
        habit.label === label ? { label, checked } : habit
      )
    );
  };

  const newHabitOnClick = () => {
    const newHabit = {
      label: newHabitLabel,
      checked: false,
    };

    setHabits([...habits, newHabit]);
    setNewHabitLabel('');
  };

  console.log(habits);

  return (
    <Box direction="column" overflow="hidden">
      <Box direction="row" margin={{ bottom: 'small' }}>
        <TextInput
          placeholder="New Habit..."
          value={newHabitLabel}
          onChange={(e) => setNewHabitLabel(e.target.value)}
        />
        <Button icon={<Add />} onClick={newHabitOnClick}></Button>
      </Box>
      {habits.map((habit, i) => (
        <CheckBox
          key={`${habit.label} ${i}`}
          checked={habit.checked}
          label={habit.label}
          onChange={(e) => habitOnChange(e.target.checked, habit.label)}
        />
      ))}
    </Box>
  );
}

export default Habits;
