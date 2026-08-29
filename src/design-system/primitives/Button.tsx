import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--ring)] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-[var(--primary)] text-[var(--primary-ink)] hover:brightness-110 shadow-[0_0_20px_oklch(72%_0.13_230_/_0.3)]",
    secondary:
      "bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--surface)]/80",
    outline:
      "bg-transparent text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--primary)]/10",
    ghost:
      "bg-transparent text-[var(--text)] hover:bg-[var(--surface)]/50",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-xl gap-2",
    lg: "px-7 py-3.5 text-base rounded-2xl gap-2.5",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
