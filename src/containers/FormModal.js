import { Box, Button, Layer } from 'grommet';

function FormModal({ children, closeModal, confirmAction }) {
  return (
    <Layer responsive={false} onEsc={closeModal} onClickOutside={closeModal}>
      {children}
      <Box pad="medium">
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

export default FormModal;
