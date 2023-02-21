import React from 'react'
import { Typography, Checkbox } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const App = () => {
    return (
        <div>
            <Typography component="legend">Controlled</Typography> 
            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} />
            <Checkbox {...label} disabled />
            <Checkbox {...label} disabled checked /> 
        </div>
    )
  }
  
  export default App