import React from 'react';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

interface LoadingProps {
  open: boolean;
}

const LoadingComponent: React.FC<LoadingProps> = ({ open }) => {
  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default LoadingComponent;