import * as React from 'react';
import SearchAppBar from './assets/components/ToolBar'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import GridContainer from './assets/components/Grid';

function App() {

  return (

    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" disableGutters="false">
        <SearchAppBar />
        <GridContainer />
      </Container>
    </React.Fragment>
  )
}

export default App
