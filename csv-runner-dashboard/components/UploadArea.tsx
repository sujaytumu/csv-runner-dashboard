'use client';

import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { parseCsv, ParseResult } from '@/lib/csv';

export default function UploadArea({ onParsed }: { onParsed: (res: ParseResult)=>void }){
  const [file, setFile] = React.useState<File | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const handleParse = async () => {
    setError(null);
    if (!file) { setError('Please choose a CSV file.'); return; }
    if (!file.name.toLowerCase().endsWith('.csv')) { setError('File must be a .csv'); return; }
    const res = await parseCsv(file);
    onParsed(res);
  };

  return (
    <div className="flex items-center gap-2">
      <Input type="file" accept=".csv" onChange={(e)=> setFile(e.target.files?.[0] ?? null)} />
      <Button onClick={handleParse}>Upload & Parse</Button>
      {error && <div className="text-red-600 text-sm">{error}</div>}
    </div>
  );
}
