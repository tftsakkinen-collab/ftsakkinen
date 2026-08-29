import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "surface" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  className = "",
}) => {
  const variants = {
    primary:
      "bg-[var(--primary)]/15 border border-[var(--primary)]/40 text-[var(--primary)]",
    surface:
      "bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)]",
    outline:
      "bg-transparent border border-[var(--border)] text-[var(--text)]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-md ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
