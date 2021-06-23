import { useState } from 'react';
import { Box } from 'grommet';
import { v4 as uuidv4 } from 'uuid';

import Habits from './Habits';
import FormModal from '../components/FormModal';
import DeleteModal from '../components/DeleteModal';

function HabitsContainer({ habits, setHabits }) {
  const [idToChange, setIdToChange] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const sortHabits = (habits) => {
    return habits.sort((a, b) => a.order - b.order);
  };

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

  const editHabit = (newLabel, newFrequency, newOrder, oldOrder) => {
    setHabits(
      sortHabits(
        habits.map((habit) => {
          if (habit.id === idToChange) {
            return {
                ...habit,
                label: newLabel,
                frequency: newFrequency,
                order: newOrder,
            };
          } else if (habit.order === newOrder) {
              return {
                ...habit,
                order: oldOrder,
              };
          }
          return habit;
        }
        )
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

  const createHabit = (newLabel, newFrequency, newOrder) => {
    const newHabit = {
      label: newLabel,
      frequency: newFrequency,
      checked: false,
      confirm: false,
      numTimesChecked: 0,
      id: uuidv4(),
      order: newOrder,
    };

    setHabits(sortHabits([...habits, newHabit]));
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
        <FormModal
          title="Edit Habit"
          closeModal={closeEditModal}
          confirmAction={editHabit}
          habitsLength={habits.length}
          habit={habits.find((habit) => habit.id === idToChange)}
        />
      )}
      {showCreateModal && (
        <FormModal
          title="Create Habit"
          closeModal={closeCreateModal}
          confirmAction={createHabit}
          habitsLength={habits.length}
        />
      )}
    </Box>
  );
}

export default HabitsContainer;
