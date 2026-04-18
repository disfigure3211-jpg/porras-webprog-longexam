import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const authLinks = [
  { label: 'Sign In', to: '/auth/signin' },
  { label: 'Sign Up', to: '/auth/signup' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-zinc-900 bg-zinc-900 text-zinc-50'
      : 'border-transparent text-zinc-500 hover:border-zinc-900 hover:bg-zinc-50 hover:text-zinc-900',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/95 text-slate-50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" aria-label="BulldogEx home">
          <img src={logo} alt="BulldogEx logo" className="h-10 w-10 rounded-full border border-amber-300 bg-slate-50 object-contain" />
          <div className="space-y-0.5">
            <p className="text-xl font-semibold tracking-tight text-amber-200">BulldogEx Shop</p>
          </div>
        </NavLink>

        <div className="hidden items-center gap-4 md:flex">
          <nav aria-label="Primary navigation" className="flex items-center gap-2">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <nav aria-label="Authentication navigation" className="flex items-center gap-2">
            {authLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/auth/signin'} className={navLinkClassName}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
