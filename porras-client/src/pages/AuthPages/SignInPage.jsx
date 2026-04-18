import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-2xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-300 focus:bg-white';

const actionButtonClassName = 'w-full rounded-2xl py-3 text-[11px] tracking-[0.24em]';

const SignInPage = () => {
  return (
    <>
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_70px_-42px_rgba(15,23,42,0.45)] md:p-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-500">Welcome Back</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">Sign In</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Access your BulldogEx account for orders, secure checkout, and pickup updates.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="signin-email" className="text-sm font-medium text-slate-700">
              Email Address
            </label>
            <input
              id="signin-email"
              type="email"
              placeholder="student@email.com"
              autoComplete="email"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="signin-password" className="text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="signin-password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              className={inputClasses}
            />
            <p className="mt-2 text-xs leading-5 text-slate-500">
              Use a strong password with letters, numbers, and symbols.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-amber-500" />
              <span>Remember me</span>
            </label>
            <button type="button" className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
              Forgot Password?
            </button>
          </div>

          <Button type="submit" variant="primary" className={actionButtonClassName}>
            Log In
          </Button>

          <div className="relative py-3 text-center">
            <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200" />
            <span className="relative bg-white px-3 text-sm text-slate-500">Or continue with</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Button type="button" variant="secondary" className={actionButtonClassName}>
              Log In with Google
            </Button>
            <Button type="button" variant="secondary" className={actionButtonClassName}>
              Log In with Apple
            </Button>
          </div>
        </form>

        <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">
          Don’t have an account?{' '}
          <Link to="/auth/signup" className="font-semibold text-slate-950 transition hover:text-amber-500">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
