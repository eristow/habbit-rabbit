import { useEffect, useState } from 'react';
import { Box, Button, Text } from 'grommet';
import { Add } from 'grommet-icons';
import moment from 'moment';

// import FormModal from './FormModal';
import DeleteModal from '../components/DeleteModal';
import EditModal from '../components/EditModal';
import CreateModal from '../components/CreateModal';
import Habit from '../components/Habit';

const STORAGE_KEY = 'habits';

function Habits() {
  const [habits, setHabits] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [habitToChange, setHabitToChange] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

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

  const openDeleteModal = (habit) => {
    setHabitToChange(habit);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setHabitToChange({});
    setShowDeleteModal(false);
  };

  const removeHabit = () => {
    setHabits(habits.filter((habit) => habit.label !== habitToChange.label));
    closeDeleteModal();
  };

  const openEditModal = (habit) => {
    setHabitToChange(habit);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setHabitToChange({});
    setShowEditModal(false);
  };

  const editHabit = (newLabel, newFrequency) => {
    setHabits(
      habits.map((habit) =>
        habit.label === habitToChange.label
          ? { ...habit, label: newLabel, frequency: newFrequency }
          : habit
      )
    );
    closeEditModal();
  };

  const openCreateModal = () => {
    setShowCreateModal(true);
  };

  const closeCreateModal = () => {
    setShowCreateModal(false);
  };

  const createHabit = (newHabitLabel, newFrequency) => {
    const newHabit = {
      label: newHabitLabel,
      frequency: newFrequency,
      checked: false,
      confirm: false,
      numTimesChecked: 0,
    };

    setHabits([...habits, newHabit]);
    closeCreateModal();
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
      {showDeleteModal && (
        <DeleteModal
          closeModal={closeDeleteModal}
          confirmAction={removeHabit}
        />
      )}
      {showEditModal && (
        <EditModal
          habit={habitToChange}
          closeModal={closeEditModal}
          confirmAction={editHabit}
        />
      )}
      {showCreateModal && (
        <CreateModal
          closeModal={closeCreateModal}
          confirmAction={createHabit}
        />
      )}
    </Box>
  );
}

export default Habits;
