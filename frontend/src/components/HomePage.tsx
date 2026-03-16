import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: '/login' | '/register'): void => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl flex flex-col items-center max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
          Hello There!
        </h1>
        <p className="text-slate-500 mb-8 text-center">
          Please select an option below to get started with your account.
        </p>

        <div className="flex flex-col w-full gap-4">
          <button
            onClick={() => handleNavigation('/login')}
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-200 shadow-sm"
          >
            Login to Account
          </button>

          <button
            onClick={() => handleNavigation('/register')}
            className="w-full py-3 px-4 bg-white border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 text-slate-700 font-medium rounded-lg transition duration-200"
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;