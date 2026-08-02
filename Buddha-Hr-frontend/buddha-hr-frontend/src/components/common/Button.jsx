import { Link } from "react-router-dom";

function Button({ children, to, variant = "primary", className = "" }) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary: "bg-blue-900 text-white hover:bg-blue-800",
    secondary:
      "border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white",
  };

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseStyle} ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
