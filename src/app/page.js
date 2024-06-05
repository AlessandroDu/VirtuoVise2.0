"use client"

import { JourneysListDisplay } from "./components/JourneysListDisplay";

export default function Home() {
  return (
    <div className="Phone">
      <div className="Screen">
        <div className="Camera"></div>
        <JourneysListDisplay/>
      </div>
    </div>
  );
}
