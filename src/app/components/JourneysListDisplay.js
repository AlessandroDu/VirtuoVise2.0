"use client"

import Link from "next/link";

export function JourneysListDisplay() {


    return (
        <div className="journeys-list-page">
            <div className="journey-display MorningMastery">
                <div className="text">
                    <header>Rise and Shine:</header>
                    <header>Morning Mastery</header>
                    <Link className="link-morningMastery" href="/preview-journey"></Link>
                </div>
            </div>
            <div className="journey-display NotImplementedYet">
                <div className="text">
                    <header>Coming Soon</header>
                </div>
            </div>
            <div className="journey-display NotImplementedYet">
            <div className="text">
                    <header>Coming Soon</header>
                </div>
            </div>
            <div className="journey-display NotImplementedYet">
            <div className="text">
                    <header>Coming Soon</header>
                </div>
            </div>
            <div className="journey-display NotImplementedYet">
                <div className="text">
                    <header>Coming Soon</header>
                </div>
            </div>
        </div>
    )
}