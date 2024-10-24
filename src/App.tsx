import React from 'react';
import { Box, Grid2 as Grid } from '@mui/material';

function App() {
  return (

      <Grid container spacing={2}>
        <Grid size={6}>
          <Box sx={{backgroundColor: "blue", padding: "1rem 0 1rem 0"}}>size=6</Box>
        </Grid>
        <Grid size={6}>
          <Box sx={{backgroundColor: "blue", padding: "1rem 0 1rem 0"}}>size=6</Box>
        </Grid>
        <Grid size={6}>
          <Box sx={{backgroundColor: "blue", padding: "1rem 0 1rem 0"}}>size=6</Box>
        </Grid>
        <Grid size={6}>
          <Box sx={{backgroundColor: "blue", padding: "1rem 0 1rem 0"}}>size=6</Box>
        </Grid>
      </Grid>
  )
}

export default App;
