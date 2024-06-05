"use client"

import Link from "next/link";


export function Track() {
    

    return (
    <div className="track">
        <div className="journey-display">
            <div className="text">
                <header className="openDailyCheckHeader">Day 1</header>
                <p className="openDailyCheckBody">Complete your daily evaluation!</p>
                <Link className="link-morningMastery" href="/rise-and-shine/checklist"></Link>
            </div>
        </div>
    </div>
  )
}