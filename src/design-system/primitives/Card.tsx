import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverable = true,
}) => {
  return (
    <div
      className={`bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] rounded-[var(--radius)] p-6 transition-all duration-200 ${
        hoverable ? "hover:border-[var(--primary)] hover:shadow-lg hover:-translate-y-0.5" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
