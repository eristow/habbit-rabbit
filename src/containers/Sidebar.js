import { Fragment } from 'react';
import { Box, Button, Collapsible, Layer, ResponsiveContext } from 'grommet';
import { FormClose } from 'grommet-icons';

function Sidebar({ showSidebar, setShowSidebar }) {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Fragment>
          {!showSidebar || size !== 'small' ? (
            <Collapsible direction="horizontal" open={showSidebar}>
              <Box
                flex
                width="medium"
                background="light-2"
                elevation="small"
                align="center"
                justify="center"
              >
                Sidebar
              </Box>
            </Collapsible>
          ) : (
            <Layer>
              <Box
                background="light-2"
                tag="header"
                align="center"
                justify="end"
                direction="row"
              >
                <Button
                  icon={<FormClose />}
                  onClick={() => setShowSidebar(false)}
                />
                <Box fill background="light-2" align="center" justify="center">
                  Sidebar
                </Box>
              </Box>
            </Layer>
          )}
        </Fragment>
      )}
    </ResponsiveContext.Consumer>
  );
}

export default Sidebar;
