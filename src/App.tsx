import "./App.css";
import { DashboardFrom } from "./components/DashboardFrom";
import { ResultCard } from "./components/ResultCard";

function App() {
  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-5xl font-semibold tracking-tight text-[#4f4998]">
            Clinician Dispatch Dashboard
          </h1>

          <p className="mt-4 text-lg text-[#4f4998]">
            Find the optimal clinician for patient visits
            based on minimum travel distance.
          </p>
        </div>
        <div>
          <DashboardFrom/>
          <ResultCard/>
        </div>
      </div>
    </main>
  );
}

export default App;
