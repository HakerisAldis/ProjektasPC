import PropTypes from 'prop-types';
import backgroundImage from '../../../assets/images/background.jpg';

const Background = (props) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-no-repeat bg-cover opacity-50 absolute left-0 bottom-0 -z-50"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      {props.children}
    </div>
  );
};

Background.propTypes = {
  children: PropTypes.element.isRequired
};

export default Background;
