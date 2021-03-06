import { Box, Button, Layer, Text } from 'grommet';

function DeleteModal({ closeModal, confirmAction }) {
  return (
    <Layer responsive={false} onEsc={closeModal} onClickOutside={closeModal}>
      <Box pad="medium">
        <Box direction="column" pad="medium">
          <Text alignSelf="center" margin="small">
            Remove item?
          </Text>
        </Box>
        <Box direction="row" margin={{ top: 'medium' }} justify="between">
          <Button
            label="Cancel"
            margin={{ right: 'small' }}
            color="black"
            onClick={closeModal}
          />
          <Button
            label="Delete"
            margin={{ left: 'small' }}
            color="red"
            onClick={confirmAction}
          />
        </Box>
      </Box>
    </Layer>
  );
}

export default DeleteModal;
