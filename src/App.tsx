import { useState } from "react";
import "./App.css";
import { DashboardForm } from "./components/DashboardForm";
import { ResultCard } from "./components/ResultCard";
import type { MatchResult } from "./types";
import { findOptimalClinician } from "./services/clinicianMatcher";

function App() {
  const [result, setResult] = useState<MatchResult | null>(null);

  const handleFindClinician = (patientAddress: string, includeLab: boolean) => {
    const response = findOptimalClinician(patientAddress, includeLab);
    setResult(response);
  };

  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-5xl font-semibold tracking-tight">
            Clinician Dispatch Dashboard
          </h1>

          <p className="mt-4 text-lg">
            Find the optimal clinician for patient visits based on minimum
            travel distance.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <DashboardForm onSubmit={handleFindClinician} />

          {result && <ResultCard result={result} />}
        </div>
      </div>
    </main>
  );
}

export default App;
