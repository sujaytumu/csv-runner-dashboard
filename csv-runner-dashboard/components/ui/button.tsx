import * as React from 'react';

export function Button({ children, className, ...props }: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }>){
  return <button className={`rounded-xl px-4 py-2 border bg-gray-900 text-white hover:opacity-90 ${className??''}`} {...props}>{children}</button>
}
