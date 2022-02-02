import { useCallback, useState } from 'react';
import Background from '../../components/layout/Background';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { userService } from '../../services/user';
import withUserLogedIn from '../../HOC\'s/withUserLogedIn';

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const handleLogin = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await userService.login(email.value, password.value);
      setError(false);
      navigate('/');
    } catch (error) {
      setError(true);
    }
  }, [navigate]);

  return (
    <Background>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 mb-4" onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                                El. paštas
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="email" type="email" placeholder="El. paštas" required />
          </div>
          <div className="mb-6">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                                Slaptažodis
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="password" type="password" placeholder="Slaptažodis" required />
            {error &&
              <p className="text-red-500 text-xs italic">Blogai įvesti prisijungimo duomenys arba naudotojas neegzistuoja!</p>
            }
          </div>
          <div className="flex justify-center grid grid-rows-2">
            <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 mx-4 mb-4 rounded text-center" type="submit">
                                Prisijungti
            </button>
            <Link to={ROUTES.LOGIN} className="align-baseline font-bold text-sm text-gray-700 hover:text-gray-900 mb-0 pb-0">
                                Pamiršote slaptažodį?
            </Link>
          </div>
        </form>
      </div>
    </Background>
  );
};

export default withUserLogedIn(Login, ROUTES.DEFAULT);
