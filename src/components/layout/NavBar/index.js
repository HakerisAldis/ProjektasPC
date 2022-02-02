import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../constants/contexts';
import withUserIdent from '../../../HOC\'s/withUserIdent';
import { ROUTES } from '../../../routes';
import UserDropdown from '../../userDropdown/userDropdown';
import logo from '../../../assets/images/logo.png';

const Navbar = () => {
  const user = useContext(UserContext);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-500 opacity-75 shadow-lg">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to={ROUTES.DEFAULT}><img className='h-12 ml-6' src={logo} alt='logo' /></Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto p-6">
        <div className="text-sm lg:flex-grow">

        </div>
        <div>
          <div className='inline'>
            <Link to={ROUTES.TRACKS} className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white hover:shadow-xl mr-4">
                            Trasos
            </Link>
            <Link to={ROUTES.GEARSELECT} className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white hover:shadow-xl mr-4">
                            Įranga
            </Link>
            <Link to={ROUTES.TICKETS} className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white hover:shadow-xl">
                            Bilietai
            </Link>
          </div>
          {user
            ? <div className='inline ml-2'>
              <UserDropdown name={user.email}/>
            </div>
            : <div className='inline ml-2'>
              <Link to={ROUTES.LOGIN} className='hover:shadow-xl hover:text-white text-gray-200 py-2 px-1 mx-1 border border-gray-400 rounded'>
                                Prisijungti
              </Link>
              <Link to={ROUTES.REGISTER} className='hover:shadow-xl hover:text-white text-gray-200 py-2 px-1 mx-1 border border-gray-400 rounded'>
                                Registruotis
              </Link>
            </div>
          }
        </div>
      </div>
    </nav>
  );
};

export default withUserIdent(Navbar);
