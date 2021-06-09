import { useState } from 'react';
import { Box, Button, Select, Layer, Text, TextInput } from 'grommet';

const frequencyOptions = [1, 2, 3, 4, 5, 6, 7];

function Form({ title, closeModal, confirmAction, habit = undefined }) {
  const [name, setName] = useState(habit ? habit.label : '');
  const [frequency, setFrequency] = useState(habit ? habit.frequency : 7);

  return (
    <Layer responsive={false} onEsc={closeModal} onClickOutside={closeModal}>
      <Box pad="medium">
        <Box direction="column" pad="medium">
          <Text alignSelf="center" margin="small">
            {title}
          </Text>
          <TextInput
            placeholder={'Habit Name...'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="medium"
          />
          <Box direction="row" margin={{ top: 'small', bottom: 'small' }}>
            <Text alignSelf="center" margin={{ right: 'small' }}>
              Times per week:
            </Text>
            <Select
              options={frequencyOptions}
              value={frequency}
              onChange={({ option }) => setFrequency(option)}
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
            onClick={() => confirmAction(name, frequency)}
          />
        </Box>
      </Box>
    </Layer>
  );
}

export default Form;
