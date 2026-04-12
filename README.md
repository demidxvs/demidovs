# Atmos Temp

A modern, animated weather monitoring web app. Search any city to see real-time temperature, humidity, wind speed, and conditions with beautiful animated backgrounds.

## Features

- **Real-time weather** from wttr.in and Open-Meteo (both free, no API key)
- **Animated backgrounds** — rain, snow, sun, clouds, thunderstorm particles
- **Glassmorphism UI** with smooth Framer Motion transitions
- **Debounced search** with input validation
- **Responsive** — works on mobile and desktop
- **All SVG icons** — no emoji

## Tech Stack

Next.js 16 · React 19 · TypeScript · TailwindCSS · Framer Motion · TanStack Query · Jest

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── api/weather/route.ts   # Server-side proxy (avoids CORS)
│   ├── layout.tsx              # Root layout with React Query provider
│   └── page.tsx                # Main client page
├── components/
│   ├── WeatherSearch.tsx       # Search input with debounce
│   ├── WeatherCard.tsx         # Weather data display (SVG icons)
│   ├── WeatherDisplay.tsx      # Orchestrates background + content
│   ├── AnimatedBackground.tsx  # Gradient + weather particles
│   ├── particles/              # Rain, Snow, SunRays, Clouds, Lightning
│   └── ui/                     # Icons, LoadingSkeleton, ErrorMessage
├── hooks/
│   ├── useDebounce.ts          # Generic debounce hook
│   └── useWeather.ts           # Search + fetch with React Query
├── lib/
│   ├── api.ts                  # Client-side API caller
│   └── constants.ts            # Shared constants
└── types/weather.ts            # TypeScript interfaces
```

## API

No API key needed. The app uses two free providers with automatic fallback:

1. **wttr.in** (primary) — simple, no registration
2. **Open-Meteo** (fallback) — open-source weather data

All external calls go through a Next.js route handler at `/api/weather` to avoid CORS issues.



# atmos-weather
# atmos-temp
