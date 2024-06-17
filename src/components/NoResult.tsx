/**
 * NoResult.tsx
 *
 * This component renders a custom image and message when no results exist.
 *
 * Dependencies:
 * - @mui/material components: to create a custom component when data array is empty
 *
 * Example Usage:
 * <NoResult />
 *
 * Author: Oscar Elías
 * Date: 16-06-2024
 */

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import noResults from '../no-results.png';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function NoResult() {
  return (
    <Container maxWidth="md">
        <Grid xs={12}>
          <Item>
          <Box sx={{ width: '100%' }}>
            <Stack   direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}>
            <img src={noResults} alt="noResults" width="200" />
            <Typography variant="h4" gutterBottom sx={{marginBottom: '20px !important'}}>
                No results
            </Typography>
            </Stack>
          </Box>

          </Item>
        </Grid>
    </Container>
  );
}
