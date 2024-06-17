/**
 * App.tsx
 *
 * This component is the entry point to the application to show table with result or not result component.
 *
 *
 * Dependencies:
 * - Redux slice: get data stored to check array size to show the CustomTable or NoResult component.
 *
 * Example Usage:
 * <App />
 *
 * Author: Oscar Elías
 * Date: 16-06-2024
 */
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import CustomTable from '../components/CustomTable';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { useAppSelector } from './hooks';
import { dataObjects } from '../features/data/dataSlice';
import NoResult from '../components/NoResult';

function App() {

  const data = useAppSelector(dataObjects)

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Coding Exercise
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>      
      <Container sx={{ marginTop: '36px'}} maxWidth="md">
      {data && Array.isArray(data) && data.length > 0 ? (
        <CustomTable/>
      ) : (
        <NoResult />
      )}
        
      </Container>
    </React.Fragment>
  );
}

export default App;
