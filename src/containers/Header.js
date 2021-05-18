import { Box, Button, Heading } from 'grommet';
import { Menu } from 'grommet-icons';

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="header-bg"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    {...props}
  />
);

function Header({ setShowSidebar, showSidebar }) {
  return (
    <AppBar>
      <Heading level="3" margin="none">
        Habbit-Rabbit
      </Heading>
      <Button icon={<Menu />} onClick={() => setShowSidebar(!showSidebar)} />
    </AppBar>
  );
}

export default Header;
