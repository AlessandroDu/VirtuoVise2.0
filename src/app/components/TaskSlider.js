"use client"

import React from 'react';
import { Slider, Typography } from '@mui/material';

const TaskSlider = ({ task, value, onChange }) => {
  return (
    <div>
      <Typography id="task-slider" gutterBottom>
        {task.name}
      </Typography>
      <Slider
        value={value}
        onChange={(_, newValue) => onChange(task.name, newValue)}
        aria-labelledby="task-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={5}
      />
    </div>
  );
};

export default TaskSlider;
