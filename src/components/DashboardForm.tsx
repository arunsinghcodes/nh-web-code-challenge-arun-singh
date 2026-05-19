import { Search } from "lucide-react";
import { useState } from "react";

interface Props {
  onSubmit: (patientAddress: string, includeLab: boolean) => void;
}

export const DashboardForm = ({ onSubmit }: Props) => {
  const [patientAddress, setPatientAddress] = useState("");
  const [error, setError] = useState("");

  const [includeLab, setIncludeLab] = useState(false);

  const handleSubmit = () => {
    if (!patientAddress.trim()) {
      setError("Please enter a patient address.");
      return;
    }
    setError("");
    onSubmit(patientAddress, includeLab);
  };

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
          value={patientAddress}
          onChange={(e) => {
            setPatientAddress(e.target.value);
            setError("");
          }}
        />
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
      <div className="mt-6 flex items-center gap-3">
        <input
          type="checkbox"
          className="h-5 w-5 accent-primary"
          checked={includeLab}
          onChange={(e) => setIncludeLab(e.target.checked)}
        />

        <span className="text-sm font-mediu">Lab Drop-off Required</span>
      </div>

      <button
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-base font-medium text-white transition hover:opacity-90 cursor-pointer"
        onClick={handleSubmit}
      >
        <Search size={18} />
        Find Optimal Clinician
      </button>
    </div>
  );
};
