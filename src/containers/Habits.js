import { useEffect, useState } from 'react';
import { Box, Button, CheckBox, Text } from 'grommet';
import { Add, Edit, Trash } from 'grommet-icons';

// import FormModal from './FormModal';
import DeleteModal from '../components/DeleteModal';
import EditModal from '../components/EditModal';
import CreateModal from '../components/CreateModal';

const STORAGE_KEY = 'habits';

function Habits() {
  const [habits, setHabits] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [habitToChange, setHabitToChange] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

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

  const onCheckHabit = (checked, label) => {
    setHabits(
      habits.map((habit) =>
        habit.label === label ? { ...habit, checked } : habit
      )
    );
  };

  const openDeleteModal = (label) => {
    setHabitToChange(label);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setHabitToChange('');
    setShowDeleteModal(false);
  };

  const removeHabit = () => {
    setHabits(habits.filter((habit) => habit.label !== habitToChange));
    closeDeleteModal();
  };

  const openEditModal = (label) => {
    setHabitToChange(label);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setHabitToChange('');
    setShowEditModal(false);
  };

  const editHabit = (newLabel) => {
    setHabits(
      habits.map((habit) =>
        habit.label === habitToChange ? { ...habit, label: newLabel } : habit
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

  const createHabit = (newHabitLabel) => {
    const newHabit = {
      label: newHabitLabel,
      checked: false,
      confirm: false,
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
          <Box
            style={{
              transition: 'opacity 0.3s',
              ...(habit.checked && { opacity: 0.3 }),
            }}
            direction="row"
            justify="between"
            key={`${habit.label} ${i}`}
          >
            <CheckBox
              checked={habit.checked}
              label={habit.label}
              onChange={(e) => onCheckHabit(e.target.checked, habit.label)}
            />
            <Box direction="row" align="end" justify="end">
              <Button
                icon={<Edit />}
                onClick={() => openEditModal(habit.label)}
              />
              <Button
                icon={<Trash color="red" />}
                onClick={() => openDeleteModal(habit.label)}
              />
            </Box>
          </Box>
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
          label={habitToChange}
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
