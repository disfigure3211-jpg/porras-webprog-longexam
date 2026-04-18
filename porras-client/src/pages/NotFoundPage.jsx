import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6 bg-slate-950 text-slate-100">
      <section className="border-y border-slate-800 bg-slate-950 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-10 rounded-[2rem] border border-amber-300 bg-slate-900/95 p-8 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.85)] sm:p-12">
          <div className="flex flex-col gap-6 text-slate-100 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-[1.5rem] border-2 border-amber-300 bg-slate-800 text-4xl font-bold text-amber-200">
              404
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Page not found</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                We could not find that page.
              </h1>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-base leading-7 text-slate-300">
                The page you're looking for doesn't exist or may have been moved. Use the links below to continue browsing campus essentials and store favorites.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/" variant="primary">Back to Home</Button>
                <Button to="/products" variant="secondary">Browse Products</Button>
              </div>
            </div>

            <div className="rounded-3xl border border-amber-300 bg-slate-950/90 p-6">
              <h2 className="text-xl font-semibold text-white">Need help finding something?</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Return to the homepage, visit the product catalog, or sign in for saved items and order history.
              </p>
              <div className="mt-6 grid gap-3">
                <Button to="/auth/signin" className="w-full">Sign In</Button>
                <Button to="/auth/signup" className="w-full">Sign Up</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
