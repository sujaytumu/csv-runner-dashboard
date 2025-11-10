import { Card, CardContent, CardTitle } from './ui/card';
import { Metrics } from '@/lib/csv';

export default function Stats({ label, metrics }: { label: string; metrics: Metrics }){
  return (
    <Card className="flex-1">
      <CardTitle>{label}</CardTitle>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div><div className="text-sm text-gray-500">Average</div><div className="text-2xl">{metrics.average}</div></div>
          <div><div className="text-sm text-gray-500">Min</div><div className="text-2xl">{metrics.min}</div></div>
          <div><div className="text-sm text-gray-500">Max</div><div className="text-2xl">{metrics.max}</div></div>
        </div>
      </CardContent>
    </Card>
  );
}
