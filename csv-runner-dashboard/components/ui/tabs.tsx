'use client';
import * as React from 'react';

type Tab = { id: string; label: string };
export function Tabs({ tabs, active, onChange }: { tabs: Tab[]; active: string; onChange: (id:string)=>void }){
  return (
    <div className="flex gap-2 flex-wrap">
      {tabs.map(t => (
        <button key={t.id} onClick={()=>onChange(t.id)}
          className={`px-3 py-1 rounded-full border ${active===t.id? 'bg-gray-900 text-white':'bg-white'}`}>
          {t.label}
        </button>
      ))}
    </div>
  );
}
