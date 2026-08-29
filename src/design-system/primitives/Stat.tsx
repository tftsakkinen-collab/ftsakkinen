import React from "react";

interface StatProps {
  label: string;
  value: string;
  sublabel?: string;
  className?: string;
}

export const Stat: React.FC<StatProps> = ({
  label,
  value,
  sublabel,
  className = "",
}) => {
  return (
    <div className={`p-4 rounded-[var(--radius)] bg-[var(--surface)] border border-[var(--border)] text-left ${className}`}>
      <div className="text-2xl sm:text-3xl font-extrabold text-[var(--primary)] font-mono">
        {value}
      </div>
      <div className="text-sm font-bold text-[var(--text)] mt-1">{label}</div>
      {sublabel && (
        <div className="text-xs text-[var(--muted)] mt-0.5">{sublabel}</div>
      )}
    </div>
  );
};

export default Stat;
