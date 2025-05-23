import { Box, List, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { Inbox, Drafts, Send, Delete, Label } from '@mui/icons-material';
import { useMailStore } from '../store/mailStore';

export function SidePanel() {
  const { selectedFolder, selectFolder } = useMailStore();

  const folders = [
    { name: 'Inbox', icon: <Inbox /> },
    { name: 'Drafts', icon: <Drafts /> },
    { name: 'Sent', icon: <Send /> },
    { name: 'Trash', icon: <Delete /> },
    { name: 'Custom Folder', icon: <Label /> },
  ];

  return (
    <Paper sx={{ height: '100%', overflow: 'auto' }} elevation={1}>
      <List component="nav">
        {folders.map((folder) => (
          <ListItemButton
            key={folder.name}
            selected={selectedFolder === folder.name}
            onClick={() => selectFolder(folder.name)}
          >
            <ListItemIcon>{folder.icon}</ListItemIcon>
            <ListItemText primary={folder.name} />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
}