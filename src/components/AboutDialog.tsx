import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

interface AboutDialogProps {
  open: boolean;
  onClose: () => void;
}

export function AboutDialog({ open, onClose }: AboutDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>About React Mail</DialogTitle>
      <DialogContent>
        <Typography>
          This sample application demonstrates the construction of a complex user interface using React
          and Material-UI components. Have a look at the code to see how easy it is to build your own apps!
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus>Close</Button>
      </DialogActions>
    </Dialog>
  );
}