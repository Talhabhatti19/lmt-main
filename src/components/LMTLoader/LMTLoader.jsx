import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "../LMTLoader/loader.scss"

export default function LMTLoader() {
  return (
    <div className="loader-container">
      <CircularProgress style={{  color: "#1976d2"}} size={100} />
 </div>
  );
}