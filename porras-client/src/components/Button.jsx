import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-slate-950 text-amber-200 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.75)] hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
  secondary: 'bg-white text-slate-950 border-amber-300 shadow-sm shadow-slate-900/10 hover:bg-amber-50 focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
  onClick,
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full border-2 border-zinc-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-300 ease-out transform focus:outline-none',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
