"use client"

import React, { useState, useEffect } from 'react';
import TaskSlider from './TaskSlider';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const ChecklistForm = ({ currentDay }) => {
  const router = useRouter();
  const [checklist, setChecklist] = useState([]);
  const [scores, setScores] = useState({});

  useEffect(() => {
    const fetchChecklist = async () => {
      const response = await fetch(`http://localhost:8080/api/journey/day/${currentDay}`);
      const data = await response.json();
      setChecklist(data.tasks);
      setScores(data.tasks.reduce((acc, task) => ({ ...acc, [task.name]: 1 }), {}));
    };

    fetchChecklist();
  }, [currentDay]);

  const handleSliderChange = (taskName, newValue) => {
    setScores(prevScores => ({ ...prevScores, [taskName]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8080/api/journey/day/${currentDay}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ day: currentDay, tasks: Object.keys(scores).map(name => ({ name, score: scores[name] })) }),
    });

    if (response.ok) {
      router.push("/rise-and-shine");
      alert('Scores submitted successfully');
    } else {
      alert('Failed to submit scores');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {checklist.map(task => (
        <TaskSlider key={task.name} task={task} value={scores[task.name]} onChange={handleSliderChange} />
      ))}
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default ChecklistForm;
