'use client';

import dynamic from 'next/dynamic';
import { RunRow } from '@/lib/csv';

const ReLineChart = dynamic(() => import('recharts').then(m=>m.LineChart), { ssr: false });
const ReLine = dynamic(() => import('recharts').then(m=>m.Line), { ssr: false });
const ReXAxis = dynamic(() => import('recharts').then(m=>m.XAxis), { ssr: false });
const ReYAxis = dynamic(() => import('recharts').then(m=>m.YAxis), { ssr: false });
const ReTooltip = dynamic(() => import('recharts').then(m=>m.Tooltip), { ssr: false });
const ReCartesianGrid = dynamic(() => import('recharts').then(m=>m.CartesianGrid), { ssr: false });
const ReResponsiveContainer = dynamic(() => import('recharts').then(m=>m.ResponsiveContainer), { ssr: false });

export default function RunChart({ data }: { data: RunRow[] }){
  const sorted = [...data].sort((a,b)=> a.date.localeCompare(b.date));
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ReResponsiveContainer>
        <ReLineChart data={sorted} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <ReCartesianGrid strokeDasharray="3 3" />
          <ReXAxis dataKey="date" />
          <ReYAxis />
          <ReTooltip />
          <ReLine type="monotone" dataKey="miles" dot={false} />
        </ReLineChart>
      </ReResponsiveContainer>
    </div>
  );
}
