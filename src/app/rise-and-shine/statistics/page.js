"use client"

import { useState, useEffect } from 'react';
import { Footer } from "../../components/Footer";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export default function Statistics() {
  const [averageScore, setAverageScore] = useState(null);
  const [streak, setStreak] = useState(null);

  let type;

  if (averageScore < 2) type = "Nomad";
  else if (averageScore < 3) type = "Employee";
  else if (averageScore <4) type = "Middle Class";
  else if (averageScore <5) type = "Entrepreneur";
  else type = "Wealthy Investor";

  useEffect(() => {
    const fetchAverageScore = async () => {
      try {
        // Assuming the current day is known, for example, 15
        const response = await fetch('http://localhost:8080/api/journey/average/8');
        const data = await response.json();
        setAverageScore(data.average_score);
      } catch (error) {
        console.error("Error fetching average score:", error);
      }
    };

    const fetchStreak = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/journey/streak');
        const data = await response.json();
        setStreak(data.streak);
      } catch (error) {
        console.error("Error fetching streak:", error);
      }
    };

    fetchAverageScore();
    fetchStreak();
  }, []);

  return (
    <div className="Phone phone-RiseAndShine">
      <div className="Screen preview-screen-riseAndShine">
        <div className="Camera"></div>
        <header className="preview-title">Statistics</header>
        <div className="Tab statistics">
          <header className="preview-headers statistics-header-overflow">Average personality type of the Week:</header>
          <p className="preview-text statistics-text">{averageScore !== null ? type : "Loading..."}</p>
          <header className="preview-headers">Current Streak:</header>
          <p className="preview-text statistics-text">{streak !== null ? streak : "Loading..."} <LocalFireDepartmentIcon fontSize="medium" /></p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
