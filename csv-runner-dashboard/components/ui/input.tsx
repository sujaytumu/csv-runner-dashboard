import * as React from 'react';

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return <input ref={ref} className={`w-full rounded-xl border px-3 py-2 outline-none focus:ring ${className??''}`} {...props} />;
  }
);
