import React from 'react';
import { Button } from '@material-ui/core';
import { Send } from '@material-ui/icons';

function App() {
  return (
    <Button
      color="primary"
      startIcon={<Send />}
      variant="contained"
    >
      Material UI works!
    </Button>
  );
}

export default App;
