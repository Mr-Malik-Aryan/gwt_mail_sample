import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { AboutDialog } from './AboutDialog';

export function TopPanel() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" component="h1">
              React Mail
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              <strong>Welcome back, foo@example.com</strong>
            </Typography>
            <Box>
              <Button color="inherit" onClick={() => alert('Sign out clicked')}>
                Sign Out
              </Button>
              <Button color="inherit" onClick={() => setAboutOpen(true)}>
                About
              </Button>
            </Box>
          </Box>
        </Box>
      </Toolbar>
      <AboutDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </AppBar>
  );
}