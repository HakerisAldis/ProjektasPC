import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Background from '../../components/layout/Background';
import withUserLogedIn from '../../HOC\'s/withUserLogedIn';
import { ROUTES } from '../../routes';
import { userService } from '../../services/user';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = useCallback(async event => {
    event.preventDefault();
    const { email, password, city, name, lastname } = event.target.elements;
    try {
      await userService.register(email.value, password.value, city.value, name.value, lastname.value);
      navigate('/login');
    } catch (error) {
      alert(error);
    }
  }, [navigate]);

  return (
    <Background>
      <div className="w-full max-w-lg">
        <form className="bg-white shadow-md rounded px-8 pt-6 mb-4" onSubmit={handleRegister}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Vardas
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="name" type="text" placeholder="Vardas" required />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Pavardė
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="lastname" type="text" placeholder="Pavardė" required />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                    El. paštas
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" type="email" placeholder="El. paštas" required />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                    Miestas
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="city" required>
                  <option value='' selected disabled>Pasirinkite</option>
                  <option>Vilnius</option>
                  <option>Kaunas</option>
                  <option>Klaipėda</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Slaptažodis
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="password" type="password" placeholder="******************" required />
            </div>
          </div>
          <div className="flex justify-center grid grid-rows-2 mt-8">
            <button type="submit" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 mx-4 mb-4 rounded text-center">
                                Registruotis
            </button>
            <Link to={ROUTES.LOGIN} className="align-baseline font-bold text-sm text-gray-700 hover:text-gray-900 mb-0 pb-0 text-center">
                                Jau turite paskyrą?
            </Link>
          </div>
        </form>
      </div>
    </Background>
  );
};

export default withUserLogedIn(Register, ROUTES.DEFAULT);
