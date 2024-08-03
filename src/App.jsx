import * as React from 'react';
import SearchAppBar from './assets/components/ToolBar'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App() {

  return (

    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" disableGutters="false">
        <SearchAppBar />
      </Container>
    </React.Fragment>
  )
}

export default App
