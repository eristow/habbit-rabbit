import { useState } from 'react';
import { Box, Button, Layer, Select, Text, TextInput } from 'grommet';

const frequencyOptions = [1, 2, 3, 4, 5, 6, 7];

function EditModal({ habit, closeModal, confirmAction }) {
  const [newLabel, setNewLabel] = useState(habit.label);
  const [newFrequency, setNewFrequency] = useState(habit.frequency);

  return (
    <Layer responsive={false} onEsc={closeModal} onClickOutside={closeModal}>
      <Box pad="medium">
        <Box direction="column" pad="medium">
          <Text alignSelf="center" margin="small">
            Edit Item
          </Text>
          <TextInput
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
          />
          <Box direction="row" margin={{ top: 'small', bottom: 'small' }}>
            <Text alignSelf="center" margin={{ right: 'small' }}>
              Times per week:
            </Text>
            <Select
              options={frequencyOptions}
              value={newFrequency}
              onChange={({ option }) => setNewFrequency(option)}
            />
          </Box>
        </Box>
        <Box direction="row" margin={{ top: 'medium' }} justify="between">
          <Button
            label="Cancel"
            margin={{ right: 'small' }}
            color="black"
            onClick={closeModal}
          />
          <Button
            label="Confirm"
            margin={{ left: 'small' }}
            color="blue"
            onClick={() => confirmAction(newLabel, newFrequency)}
          />
        </Box>
      </Box>
    </Layer>
  );
}

export default EditModal;
