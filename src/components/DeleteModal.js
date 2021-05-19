import { Box, Button, Layer, Text } from 'grommet';

function DeleteModal({ closeDeleteModal, removeHabit }) {
  return (
    <Layer
      responsive={false}
      onEsc={closeDeleteModal}
      onClickOutside={closeDeleteModal}
    >
      <Box pad="medium">
        <Text alignSelf="center" margin="small">
          Remove item?
        </Text>
        <Box direction="row" margin={{ top: 'medium' }} justify="between">
          <Button
            label="Cancel"
            margin={{ right: 'small' }}
            onClick={closeDeleteModal}
          />
          <Button
            label="Delete"
            margin={{ left: 'small' }}
            color="red"
            onClick={removeHabit}
          />
        </Box>
      </Box>
    </Layer>
  );
}

export default DeleteModal;
