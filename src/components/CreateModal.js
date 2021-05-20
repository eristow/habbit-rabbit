import { useState } from 'react';
import { Box, Button, Layer, Text, TextInput } from 'grommet';

function CreateModal({ closeModal, confirmAction }) {
  const [name, setName] = useState('');

  return (
    <Layer responsive={false} onEsc={closeModal} onClickOutside={closeModal}>
      <Box pad="medium">
        <Box direction="column" pad="medium">
          <Text alignSelf="center" margin="small">
            Create Item
          </Text>
          <TextInput
            placeholder={'Habit Name...'}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            onClick={() => confirmAction(name)}
          />
        </Box>
      </Box>
    </Layer>
  );
}

export default CreateModal;
