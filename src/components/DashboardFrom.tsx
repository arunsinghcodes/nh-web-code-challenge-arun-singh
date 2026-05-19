import { Search } from "lucide-react";

export const DashboardFrom = () => {
  return (
    <div className="rounded-3xl border border-purple-100 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold">Patient Visit Details</h2>
      <div>
        <label className="mb-2 block text-sm font-medium">
          Patient Address
        </label>
        <input
          type="text"
          placeholder="Enter patient address"
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-primary"
        />
      </div>
      <div className="mt-6 flex items-center gap-3">
        <input type="checkbox" className="h-5 w-5 accent-primary" />

        <span className="text-sm font-mediu">Lab Drop-off Required</span>
      </div>

      <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-base font-medium text-white transition hover:opacity-90">
        <Search size={18} />
        Find Optimal Clinician
      </button>
    </div>
  );
};
