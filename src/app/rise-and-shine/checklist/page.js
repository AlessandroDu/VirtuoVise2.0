"use client"

import ChecklistForm from '../../components/ChecklistForm';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';


export default function checklist() {
    const [currentDay, setCurrentDay] = useState(1); // Default current day, this should be dynamic

    // Fetch data and handle loading state if necessary
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    // Example: Fetch the current day from an API or calculate it based on journey's start date
    // For now, setting it statically
    setCurrentDay(12); // Set to the actual current day in the journey
    setIsLoading(false);
    }, []);

    if (isLoading) {
    return <p>Loading...</p>;
    }

    return (
        <div className="Phone phone-RiseAndShine">
            <div className="Screen preview-screen-riseAndShine">
                <div className="Camera"></div>
                <div className="Tab checklist">
                    <ChecklistForm currentDay={currentDay} />
                </div>
            </div>
        </div>
    )
}