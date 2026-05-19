import type { MatchResult } from "../types";

interface Props {
  result: MatchResult;
}

export const ResultCard = ({ result }: Props)=>{
   return (
    <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-semibold text-white">
          {result.clinicianName.charAt(0)}
        </div>

        <div>
          <h2 className="text-2xl font-semibold ">
            {result.clinicianName}
          </h2>

          <p className="mt-1 text-sm">
            Optimal clinician match
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-background p-4">
          <p className="text-sm">
            Total Distance
          </p>

          <h3 className="mt-1 text-2xl font-semibold ">
           {result.totalDistance} miles
          </h3>
        </div>

        <div className="rounded-2xl bg-background p-4">
          <p className="text-sm">
            Route Type
          </p>

          <h3 className="mt-1 text-2xl font-semibold ">
            {result.routeType}
          </h3>
        </div>
      </div>
    </div>

  )
}