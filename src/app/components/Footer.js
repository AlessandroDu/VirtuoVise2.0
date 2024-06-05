"use client"

import Link from "next/link";
import { IconButton } from '@mui/material';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import BarChartIcon from '@mui/icons-material/BarChart';
import InfoIcon from '@mui/icons-material/Info';

export function Footer() {
  return (
    <div className="footer" style={{ display: 'flex', flexDirection: 'row', height: 'min-content', justifyContent: 'space-around', padding: '10px', background: '#f0f0f0' }}>
      <Link href="/rise-and-shine">
        <IconButton aria-label="Track Path">
          <TrackChangesIcon fontSize="medium" />
        </IconButton>
      </Link>
      <Link href="/rise-and-shine/statistics">
        <IconButton aria-label="Statistics">
          <BarChartIcon fontSize="medium" />
        </IconButton>
      </Link>
      <Link href="/rise-and-shine/info">
        <IconButton aria-label="Statistics">
          <InfoIcon fontSize="medium" />
        </IconButton>
      </Link>
    </div>
  );
}
