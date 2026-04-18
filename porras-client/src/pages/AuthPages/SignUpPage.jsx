import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-2xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-300 focus:bg-white';

const actionButtonClassName = 'w-full rounded-2xl py-3 text-[11px] tracking-[0.24em]';

const SignUpPage = () => {
  return (
    <>
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_70px_-42px_rgba(15,23,42,0.45)] md:p-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-500">Create account</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">Sign Up</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Create your BulldogEx account for faster checkout, order tracking, and campus pickup.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="text-sm font-medium text-slate-700">
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="First name"
                autoComplete="given-name"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="last-name" className="text-sm font-medium text-slate-700">
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Last name"
                autoComplete="family-name"
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="signup-email" className="text-sm font-medium text-slate-700">
              Email Address
            </label>
            <input
              id="signup-email"
              type="email"
              placeholder="student@email.com"
              autoComplete="email"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="signup-password" className="text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="signup-password"
              type="password"
              placeholder="Create a password"
              autoComplete="new-password"
              className={inputClasses}
            />
            <p className="mt-2 text-xs leading-5 text-slate-500">
              Use a strong password with letters, numbers, and symbols.
            </p>
          </div>

          <Button type="submit" variant="primary" className={actionButtonClassName}>
            Create Account
          </Button>

          <div className="relative py-3 text-center">
            <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200" />
            <span className="relative bg-white px-3 text-sm text-slate-500">Or sign up with</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Button type="button" variant="secondary" className={actionButtonClassName}>
              Sign Up with Google
            </Button>
            <Button type="button" variant="secondary" className={actionButtonClassName}>
              Sign Up with Apple
            </Button>
          </div>
        </form>

        <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/auth/signin" className="font-semibold text-slate-950 transition hover:text-amber-500">
            Log In
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
