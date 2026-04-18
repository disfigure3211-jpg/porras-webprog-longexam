import { Outlet } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900 animate-fade-in">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="flex items-center justify-center border-b-2 border-zinc-300 bg-zinc-200 p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-zinc-300 lg:p-16">
          <div className="flex w-full max-w-md items-center justify-center rounded-4xl border-2 border-dashed border-zinc-300 bg-zinc-100/60 p-8 sm:p-10">
            <div className="relative aspect-square w-full max-w-[18rem] overflow-hidden rounded-[2rem] border-2 border-slate-900/10 bg-slate-100 animate-card-pop transition-all duration-300 ease-out">
              <img src={logo} alt="BulldogEx logo" className="h-full w-full object-contain p-8" />
            </div>
          </div>
        </div>

        <main className="flex items-center bg-zinc-50 px-6 py-10 sm:px-10 lg:px-16 animate-slide-up">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
