"use client"

import { Footer } from "../components/Footer"
import { Track } from "../components/Track"

export default function RiseAndShine() {
  return (
    <div className="Phone phone-RiseAndShine">
      <div className="Screen preview-screen-riseAndShine">
        <div className="Camera"></div>
        <Track/>
        <Footer/>
      </div>
    </div>
  );
}
