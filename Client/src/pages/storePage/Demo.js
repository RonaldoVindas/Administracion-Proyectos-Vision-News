import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {main:'#c62828',}
  },
});


export default function EditP() {
  const handleSubmit = (event) => {

  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Visión Universitaria
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > <Grid item xs={12} sm={6}>
        <TextField
          autoComplete="Product"
          name="Product"
          required
          id="Product"
          label="ProductId"
          autoFocus
        />
      </Grid>
      <Button
              type="Edit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search
            </Button>
          <Typography component="h1" variant="h5">
            Edit Product
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Name"
              label="Name"
              name="Name"
              autoComplete="Name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Description"
              label="Description"
              name="Description"
              autoComplete="Description"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Cost"
              label="Cost"
              name="Cost"
              autoComplete="Cost"
              autoFocus
            />
            <Button
              type="Edit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit
            </Button>
            <Button
              type="Delete"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Delete
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}
