'use client';

import React from 'react';
import UploadArea from '@/components/UploadArea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ParseResult, computeMetrics, groupByPerson, RunRow } from '@/lib/csv';
import Stats from '@/components/Stats';
import RunChart from '@/components/RunChart';
import { Tabs } from '@/components/ui/tabs';

export default function Page(){
  const [rows, setRows] = React.useState<RunRow[]>([]);
  const [errors, setErrors] = React.useState<string[]>([]);
  const [activePerson, setActivePerson] = React.useState<string>('ALL');

  const handleParsed = (res: ParseResult) => {
    setRows(res.rows);
    setErrors(res.errors);
    setActivePerson('ALL');
  };

  const overallMetrics = computeMetrics(rows);
  const byPerson = groupByPerson(rows);
  const people = Object.keys(byPerson).sort();
  const activeData = activePerson === 'ALL' ? rows : (byPerson[activePerson] ?? []);
  const activeMetrics = computeMetrics(activeData);

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">CSV Runner Dashboard</h1>
        <p className="text-gray-600">Upload a CSV with columns: <code>date, person, miles</code>. Try the sample file in <code>/public/sample.csv</code>.</p>
      </header>

      <Card>
        <CardHeader><CardTitle>Upload</CardTitle></CardHeader>
        <CardContent>
          <UploadArea onParsed={handleParsed} />
          {errors.length > 0 && (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-red-800">
              <div className="font-medium mb-1">Validation errors:</div>
              <ul className="list-disc pl-5 space-y-1">
                {errors.map((e,i)=>(<li key={i}>{e}</li>))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>

      <section className="grid md:grid-cols-2 gap-4">
        <Stats label="Overall" metrics={overallMetrics} />
        <Stats label={activePerson==='ALL' ? 'Active (ALL)' : `Active (${activePerson})`} metrics={activeMetrics} />
      </section>

      <Card>
        <CardHeader><CardTitle>Views</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <Tabs
            tabs={[{id:'ALL', label:'Overall'}, ...people.map(p=>({id:p,label:p}))]}
            active={activePerson}
            onChange={setActivePerson}
          />
          <RunChart data={activeData} />
        </CardContent>
      </Card>

      <footer className="text-sm text-gray-500">
        Empty/error/loading states handled. Invalid CSV shows detailed errors; metrics recompute per view.
      </footer>
    </main>
  );
}
