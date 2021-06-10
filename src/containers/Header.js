import { Box, Button, Heading } from 'grommet';
import { Menu, Moon, Sun } from 'grommet-icons';

function AppBar(props) {
  return (
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
}

function Header({ setShowSidebar, showSidebar, darkMode, setDarkMode }) {
  return (
    <AppBar>
      <Heading level="3" margin="none">
        Habbit Rabbit
      </Heading>
      <Box direction="row">
        <Button
          icon={darkMode ? <Sun /> : <Moon />}
          alignSelf="center"
          margin={{ right: 'small' }}
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        />
        <Button icon={<Menu />} onClick={() => setShowSidebar(!showSidebar)} />
      </Box>
    </AppBar>
  );
}

export default Header;
