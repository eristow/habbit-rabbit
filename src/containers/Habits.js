import { useEffect, useState } from 'react';
import { Box, Button, CheckBox, Text, TextInput } from 'grommet';
import { Add, Trash } from 'grommet-icons';

import DeleteModal from '../components/DeleteModal';

const STORAGE_KEY = 'habits';

function Habits() {
  const [habits, setHabits] = useState([]);
  const [newHabitLabel, setNewHabitLabel] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [labelToDelete, setLabelToDelete] = useState('');

  // Grab habits from localStorage on page load
  useEffect(() => {
    const habits = localStorage.getItem(STORAGE_KEY);
    if (habits) {
      setHabits(JSON.parse(habits));
    }
  }, []);

  // Update localStorage habits everytime useState habits changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
  }, [habits]);

  const addHabit = () => {
    const newHabit = {
      label: newHabitLabel,
      checked: false,
      confirm: false,
    };

    setHabits([...habits, newHabit]);
    setNewHabitLabel('');
  };

  const onCheckHabit = (checked, label) => {
    setHabits(
      habits.map((habit) =>
        habit.label === label ? { ...habit, checked } : habit
      )
    );
  };

  const openDeleteModal = (label) => {
    setLabelToDelete(label);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setLabelToDelete('');
    setShowDeleteModal(false);
  };

  const removeHabit = () => {
    setHabits(habits.filter((habit) => habit.label !== labelToDelete));
    closeDeleteModal();
  };

  return (
    <Box direction="column" overflow="hidden">
      <Box direction="row" margin={{ bottom: 'small' }}>
        <TextInput
          placeholder="New Habit..."
          value={newHabitLabel}
          onChange={(e) => setNewHabitLabel(e.target.value)}
        />
        <Button icon={<Add />} onClick={addHabit} />
      </Box>
      {habits.length === 0 ? (
        <Text alignSelf="center" margin={{ top: 'large' }}>
          No habits to show...
        </Text>
      ) : (
        habits.map((habit, i) => (
          <Box direction="row" justify="between" key={`${habit.label} ${i}`}>
            <CheckBox
              checked={habit.checked}
              label={habit.label}
              onChange={(e) => onCheckHabit(e.target.checked, habit.label)}
            />
            <Button
              icon={<Trash color="red" />}
              onClick={() => openDeleteModal(habit.label)}
            />
          </Box>
        ))
      )}
      {showDeleteModal && (
        <DeleteModal
          closeDeleteModal={closeDeleteModal}
          removeHabit={removeHabit}
        />
      )}
    </Box>
  );
}

export default Habits;
