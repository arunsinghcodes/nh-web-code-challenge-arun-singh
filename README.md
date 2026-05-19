# Clinician Dispatch Dashboard

A modern healthcare dispatch dashboard built with **React** and **TypeScript** that helps coordinators identify the optimal clinician for patient visits based on minimum travel distance.

> Developed as part of the Nice Healthcare Frontend Take Home Assignment.

---

## Live Demo

_Add deployed Vercel link here_

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4
- Lucide React

---

## Features

- Patient address input
- Lab drop-off toggle
- Optimal clinician calculation
- Standard and lab visit workflows
- Modern healthcare-inspired UI
- Responsive layout
- Modular TypeScript architecture

---

## Problem Overview

The application helps dispatch coordinators determine the best clinician assignment for a patient visit by minimizing total travel distance.

A clinician journey follows one of two workflows:

**Standard Visit**

```
Clinician Home → Patient Home → Clinician Home
```

**Lab Visit**

```
Clinician Home → Patient Home → Lab → Clinician Home
```

The application evaluates all clinicians and returns the one with the shortest estimated round-trip distance.

---

## Application Flow

1. User enters patient address
2. User selects whether lab drop-off is required
3. User clicks **"Find Optimal Clinician"**
4. System calculates total distance for each clinician
5. Best clinician match is displayed

---

## Folder Structure

```
src/
├── components/
│   ├── DashboardForm.tsx
│   └── ResultCard.tsx
├── data/
│   ├── clinicians.ts
│   └── labs.ts
├── services/
│   └── clinicianMatcher.ts
├── utils/
│   └── distance.ts
├── types/
│   └── index.ts
├── App.tsx
└── main.tsx
```

---

## Getting Started

**Clone the repository**

```bash
git clone https://github.com/arunsinghcodes/nh-web-code-challenge-arun-singh.git
```

**Install dependencies**

```bash
npm install
```

**Start the development server**

```bash
npm run dev
```

---

## Distance Calculation

For the MVP, travel distances are simulated using a random number generator between 1 and 100 miles.

```ts
export const getRandomDistance = (): number => {
  return Math.floor(Math.random() * 100) + 1;
};
```

### Business Logic

**Standard Visit** total distance:

```
(home → patient) + (patient → home)
```

**Lab Visit** total distance:

```
(home → patient) + (patient → lab) + (lab → home)
```

---

## Architecture Decisions

**Component-Based Structure**
Separates UI components, business logic, utilities, static data, and TypeScript types — improving maintainability, readability, and scalability.

**Service Layer**
Distance matching logic is isolated in `services/clinicianMatcher.ts`, keeping UI components focused purely on presentation.

---

## Assumptions

The following assumptions were made during development:

- The dispatcher already knows whether a lab drop-off is required and manually selects the option
- Clinicians are always available for assignment
- Traffic conditions and real driving routes are not considered
- Distance is the sole optimization factor
- Patient address input is assumed to be valid
- Lab selection is simplified — the nearest lab is not calculated; any lab is used in the route
- `patientAddress` is accepted as a parameter in `findOptimalClinician()` but unused in the MVP since distances are randomly generated — in production this would be passed to a geocoding or routing API

---

## Edge Cases Handled

- Empty patient address validation with error message
- Lab and standard workflow separation

---

## Production Limitations

If released to production today, the application would have the following limitations:

- Distances are randomly generated — not real
- No map or routing API integration
- No live traffic or ETA data
- No clinician availability or scheduling management
- No authentication or authorization
- No backend or data persistence
- No real-time clinician tracking

Users would likely experience inaccurate travel estimates, unrealistic routing, and an inability to manage real dispatch scenarios.

---

## Other Factors to Optimize Clinician Assignment

Beyond drive time, the following factors could improve dispatch quality:

- **Clinician availability** — current schedule, active visits, break times
- **Clinician skill set** — matching specialization to patient needs
- **Patient urgency** — prioritizing time-sensitive cases
- **Geographic clustering** — batching nearby visits to reduce total travel
- **Traffic and road conditions** — real-time routing data
- **Clinician fatigue** — hours worked, number of visits completed
- **Patient preference** — returning clinician for continuity of care

---

## Future Improvements

- Integrate **Google Maps API** or **Mapbox** for real distance calculation
- Implement **Haversine formula** using manually geocoded clinician/lab coordinates to replace random distance generation
- Add **clinician availability** management
- Add **ranking table** showing all clinicians sorted by distance
- Add **interactive map** with route visualization
- Add **live ETA updates**
- Add **authentication** for coordinator access
