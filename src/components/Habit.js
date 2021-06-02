import { Box, Button, CheckBox, Text } from 'grommet';
import { Edit, Trash } from 'grommet-icons';

function Habit({ habit, onCheckHabit, openEditModal, openDeleteModal }) {
  const habitCompleted = habit.numTimesChecked === habit.frequency;
  return (
    <Box
      style={{
        transition: 'opacity 0.3s',
        ...((habitCompleted || habit.checked) && {
          opacity: 0.3,
        }),
      }}
      direction="row"
      justify="between"
    >
      <CheckBox
        disabled={habitCompleted}
        checked={habit.checked}
        label={habit.label}
        onChange={(e) => onCheckHabit(e.target.checked, habit.label)}
      />
      <Text
        alignSelf="center"
        margin={{ left: 'small', right: 'small' }}
        weight="bold"
      >{`${habit.numTimesChecked}/${habit.frequency}`}</Text>
      <Box direction="row" align="end" justify="end">
        <Button icon={<Edit />} onClick={() => openEditModal(habit)} />
        <Button
          icon={<Trash color="red" />}
          onClick={() => openDeleteModal(habit)}
        />
      </Box>
    </Box>
  );
}

export default Habit;
