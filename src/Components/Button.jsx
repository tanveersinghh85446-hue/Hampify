function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  fullWidth = false,
  disabled = false,
  className = "",
}) {
  const base =
    "rounded-xl font-semibold text-sm px-4 py-2.5 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#0C3B2E] text-white hover:bg-[#0a2e24]",
    accent: "bg-[#C6F135] text-[#14140F] hover:bg-[#b7df2d]",
    outline:
      "bg-transparent border border-[#0C3B2E] text-[#0C3B2E] hover:bg-[#0C3B2E]/5",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
