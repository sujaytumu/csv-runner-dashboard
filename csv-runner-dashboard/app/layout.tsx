export const metadata = {
  title: 'CSV Runner Dashboard',
  description: 'Upload a CSV and visualize miles run (overall + per-person).',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
