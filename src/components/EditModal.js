import { useState } from 'react';
import { Box, Button, Layer, Text, TextInput } from 'grommet';

function EditModal({ label, closeModal, confirmAction }) {
  const [newLabel, setNewLabel] = useState(label);

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
            onClick={() => confirmAction(newLabel)}
          />
        </Box>
      </Box>
    </Layer>
  );
}

export default EditModal;
