import { useState } from 'react';
import { Box } from 'grommet';
import { v4 as uuidv4 } from 'uuid';

import Habits from './Habits';
// import FormModal from './FormModal';
import DeleteModal from '../components/DeleteModal';
import EditModal from '../components/EditModal';
import CreateModal from '../components/CreateModal';

function HabitsContainer({ habits, setHabits }) {
  const [idToChange, setIdToChange] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const openDeleteModal = (habit) => {
    setIdToChange(habit.id);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setIdToChange('');
    setShowDeleteModal(false);
  };

  const removeHabit = () => {
    setHabits(habits.filter((habit) => habit.id !== idToChange));
    closeDeleteModal();
  };

  const openEditModal = (habit) => {
    setIdToChange(habit.id);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setIdToChange('');
    setShowEditModal(false);
  };

  const editHabit = (newLabel, newFrequency) => {
    setHabits(
      habits.map((habit) =>
        habit.id === idToChange
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
      id: uuidv4(),
    };

    setHabits([...habits, newHabit]);
    closeCreateModal();
  };

  return (
    <Box>
      <Habits
        habits={habits}
        setHabits={setHabits}
        openCreateModal={openCreateModal}
        openEditModal={openEditModal}
        openDeleteModal={openDeleteModal}
      />
      {showDeleteModal && (
        <DeleteModal
          closeModal={closeDeleteModal}
          confirmAction={removeHabit}
        />
      )}
      {showEditModal && (
        <EditModal
          habit={habits.find((habit) => habit.id === idToChange)}
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

export default HabitsContainer;
