import { Box, Container, Grid2 as Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC<React.PropsWithChildren> = ({children}) =>  
    <Container disableGutters={true} sx={{backgroundColor: "green"}}>
      <Grid container spacing={2} sx={{paddingBottom: "1rem"}}>
        <Grid size={4}>
          <Box sx={{backgroundColor: "red", padding: "1rem 0 1rem 0"}}>size=4</Box>
        </Grid>
        <Grid size={4}>
          <Box sx={{backgroundColor: "red", padding: "1rem 0 1rem 0"}}>size=4</Box>
        </Grid>
        <Grid size={4}>
          <Box sx={{backgroundColor: "red", padding: "1rem 0 1rem 0"}}>size=4</Box>
        </Grid>
      </Grid>
    
      <Outlet/>
</Container>;