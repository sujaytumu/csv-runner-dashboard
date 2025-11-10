'use client';

import Papa from 'papaparse';

export type RunRow = { date: string; person: string; miles: number };

export type ParseResult = {
  rows: RunRow[];
  errors: string[];
};

const REQUIRED_HEADERS = ['date','person','miles'] as const;

export function validateHeaders(headers: string[]): string[] {
  const missing = REQUIRED_HEADERS.filter(h => !headers.includes(h));
  const extra = headers.filter(h => !REQUIRED_HEADERS.includes(h as any));
  const errs: string[] = [];
  if (missing.length) errs.push(`Missing headers: ${missing.join(', ')}`);
  if (extra.length) errs.push(`Unexpected headers: ${extra.join(', ')}`);
  return errs;
}

function isValidDate(iso: string): boolean {
  // Simple ISO date (YYYY-MM-DD) check
  return /^\d{4}-\d{2}-\d{2}$/.test(iso) && !Number.isNaN(new Date(iso).getTime());
}

export function parseCsv(file: File): Promise<ParseResult> {
  return new Promise((resolve) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      transformHeader: h => h.trim().toLowerCase(),
      complete: (res) => {
        const errors: string[] = [];
        const headers = res.meta.fields ?? [];
        errors.push(...validateHeaders(headers));

        const rows: RunRow[] = [];
        for (const raw of res.data as any[]) {
          const date = String(raw.date ?? '').trim();
          const person = String(raw.person ?? '').trim();
          const milesStr = String(raw.miles ?? '').trim();

          if (!date || !person || !milesStr) {
            errors.push(`Empty required field in row: ${JSON.stringify(raw)}`);
            continue;
          }
          if (!isValidDate(date)) {
            errors.push(`Invalid date '${date}' — expected YYYY-MM-DD`);
            continue;
          }
          const miles = Number(milesStr);
          if (Number.isNaN(miles) || miles < 0) {
            errors.push(`Invalid miles '${milesStr}' — must be a non-negative number`);
            continue;
          }
          rows.push({ date, person, miles });
        }
        resolve({ rows, errors });
      }
    });
  });
}

export type Metrics = {
  average: number;
  min: number;
  max: number;
};

export function computeMetrics(rows: RunRow[]): Metrics {
  if (rows.length === 0) return { average: 0, min: 0, max: 0 };
  const miles = rows.map(r => r.miles);
  const sum = miles.reduce((a,b)=>a+b,0);
  const avg = sum / miles.length;
  return { average: Number(avg.toFixed(2)), min: Math.min(...miles), max: Math.max(...miles) };
}

export function groupByPerson(rows: RunRow[]): Record<string, RunRow[]> {
  return rows.reduce((acc, r) => {
    (acc[r.person] ||= []).push(r);
    return acc;
  }, {} as Record<string, RunRow[]>);
}
