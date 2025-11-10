import * as React from 'react';

export function Card({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`rounded-2xl shadow p-4 bg-white ${className??''}`}>{children}</div>;
}
export function CardHeader({ children }: React.PropsWithChildren) { return <div className="mb-2">{children}</div>; }
export function CardTitle({ children }: React.PropsWithChildren) { return <h2 className="text-xl font-semibold">{children}</h2>; }
export function CardContent({ children }: React.PropsWithChildren) { return <div>{children}</div>; }
