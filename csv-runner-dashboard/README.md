# CSV Runner Dashboard (Next.js + shadcn/ui)

Users upload a CSV with columns: `date, person, miles run`. The app validates the file, computes metrics (average/min/max), and shows overall + per-person charts.

## 1) Project overview
Challenge: CSV visualization + metrics dashboard  
What I built: Next.js (App Router) app with shadcn/ui, in-browser CSV parsing (PapaParse), Recharts line chart, overall/per-person views, robust validation + error states.

## 2) Assumptions
- CSV header names are case-insensitive but normalized to lowercase.
- Date format is ISO (`YYYY-MM-DD`).
- `miles` is non-negative and numeric.
- No server/database is required (all client-side); suitable for quick evaluation.
- shadcn/ui is used for UI patterns; minimal local shims included so the app can boot even before adding official components.

## 3) Prerequisites
- Node.js 18+
- pnpm or npm (examples below use npm)
- (Optional) Tailwind/shadcn installation if you want full visual parity

## 4) Setup
### Install
```bash
npm install
```

### Env
Copy `.env.example` → `.env` (no required keys; this is just a placeholder to follow best practices).

### Seed
No database. Use the provided sample CSV: `public/sample.csv`

## 5) Run & verify
### Run
```bash
npm run dev
```

Open http://localhost:3000

### Verify acceptance items
- **Overall and per-person charts/views:** Use the tabs to switch between ALL and individual persons.
- **Metrics computed correctly:** Average, Min, Max update based on the active view.
- **Error handling for invalid CSV:** Try uploading a CSV with a wrong header or negative/non-numeric miles; errors appear in a red panel.
- **Sample CSV + instructions:** See `public/sample.csv` and the Upload section on the page.

## 6) Features & limitations
**Features**
- In-browser CSV parsing with header + row validation
- Overall and per-person tabs
- Metrics panel (avg/min/max) for overall and active view
- Responsive line chart (Recharts)

**Limitations**
- No persistence (refresh clears data)
- Only line chart included (can add bar/area quickly)
- Minimal styling until shadcn components are fully added

**Future improvements**
- Persist last uploaded CSV to localStorage
- Add download of cleaned CSV
- Add per-day and rolling-average views
- Unit tests for parsing and metrics

## 7) Notes on architecture
```
/app
  layout.tsx       # Shell
  page.tsx         # Upload, metrics, tabs, chart
/components
  UploadArea.tsx   # File input + parsing
  RunChart.tsx     # Recharts chart (dynamic import)
  Stats.tsx        # Metrics card
  /ui              # Minimal shadcn-like shims (replace with real shadcn)
/lib
  csv.ts           # Types, validation, parsing, metrics helpers
/public/sample.csv # Example data
```

- State is local to `page.tsx`. For larger apps, elevate to a store (Zustand) or server actions.
- CSV parsing uses PapaParse; results normalized and validated before display.
- Recharts dynamically imported to avoid SSR issues.

## 8) Accessibility & UI
- Labels and instructions for the file input
- Focusable buttons/tabs with visible states
- High-contrast defaults (dark text on light background)
- Adequate spacing and clear typography
- Error region uses semantic contrast and lists issues

## shadcn/ui integration (optional but recommended)
This repo includes minimal UI shims so it runs without extra steps. For full shadcn/ui:
```bash
# initialize once
npx shadcn@latest init

# add commonly used components
npx shadcn@latest add button card input tabs alert

# then replace imports in /components/ui/* with shadcn/ui versions
```
(Do not commit secrets; keep `.env.example` current.)

## Scripts
- `npm run dev` - start dev server
- `npm run build` - production build
- `npm start` - start production server
- `npm run lint` - lint

## License
MIT
