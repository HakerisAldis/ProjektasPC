import { useContext } from 'react';
import { UserContext } from '../constants/contexts';

export default function withUserIdent (Component) {
  return function WrappedComponent (props) {
    const user = useContext(UserContext);

    if (typeof user === 'undefined') {
      return null;
    }

    return <Component {...props} />;
  };
}
