import { Box } from '@mui/material';
import { TopPanel } from './TopPanel';
import { SidePanel } from './SidePanel';
import { MailList } from './MailList.tsx';
import { MailDetail } from './MailDetail.tsx';
import { useState } from 'react';

export function MailLayout() {
  const [sideWidth, setSideWidth] = useState(250);
  const [mailHeight, setMailHeight] = useState(250);

  const handleSideResize = (e: React.MouseEvent) => {
    const startX = e.clientX;
    const startWidth = sideWidth;

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = startWidth + e.clientX - startX;
      setSideWidth(Math.max(200, Math.min(newWidth, 500)));
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopPanel />
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Box sx={{ width: sideWidth, flexShrink: 0 }}>
          <SidePanel />
        </Box>
        <Box
          sx={{
            width: 10,
            cursor: 'col-resize',
            backgroundColor: 'action.hover',
            '&:hover': { backgroundColor: 'action.selected' }
          }}
          onMouseDown={handleSideResize}
        />
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <MailList height={mailHeight} />
          <Box
            sx={{
              height: 10,
              cursor: 'row-resize',
              backgroundColor: 'action.hover',
              '&:hover': { backgroundColor: 'action.selected' }
            }}
          />
          <MailDetail />
        </Box>
      </Box>
    </Box>
  );
}