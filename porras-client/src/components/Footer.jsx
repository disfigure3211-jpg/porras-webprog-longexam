import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold tracking-tight text-amber-300">BulldogEx Shop</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
            Your campus essentials destination for fast ordering, useful gear, and student-ready apparel.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Explore</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <Link to="/" className="transition hover:text-amber-200">Home</Link>
            </li>
            <li>
              <Link to="/about" className="transition hover:text-amber-200">About</Link>
            </li>
            <li>
              <Link to="/products" className="transition hover:text-amber-200">Products</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Support</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Need help? Visit the product page, sign in to your account, or reach out through the store links.
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <Link to="/auth/signin" className="inline-flex rounded-full border-2 border-amber-300 bg-slate-950 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-200 transition hover:bg-slate-800">
              Sign In
            </Link>
            <Link to="/auth/signup" className="inline-flex rounded-full border-2 border-amber-300 bg-slate-950 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-200 transition hover:bg-slate-800">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
        <div className="mx-auto max-w-6xl text-center sm:text-left">
          &copy; {new Date().getFullYear()} BulldogEx Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
