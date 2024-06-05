"use client"

import { Footer } from "../../components/Footer"

export default function Info() {
    return (
        <div className="Phone phone-RiseAndShine">
            <div className="Screen preview-screen-riseAndShine">
                <div className="Camera"></div>
                <header className="preview-title">Info</header>
                <div className="Tab screen-info">
                    <header className="preview-headers">1. Nomad:</header>
                    <p className="preview-text">Inconsistent routine, irregular sleep schedule, unhealthy breakfast choices.</p>
                    <header className="preview-headers">2. Employee:</header>
                    <p className="preview-text">Moderate routine, occasional mindfulness practices, basic breakfast options.</p>
                    <header className="preview-headers">3. Middle Class:</header>
                    <p className="preview-text">Fairly consistent routine, regular mindfulness practices, balanced breakfast.</p>
                    <header className="preview-headers">4. Entrepreneur:</header>
                    <p className="preview-text">Well-established routine, daily mindfulness practices, nutritious breakfast choices.</p>
                    <header className="preview-headers">5. Wealthy Investor:</header>
                    <p className="preview-text">Highly disciplined routine, daily mindfulness rituals, gourmet breakfast options.</p>
                </div>
                <Footer/>
            </div>
        </div>
    )
}