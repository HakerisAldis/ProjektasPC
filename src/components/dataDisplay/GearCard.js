import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GearCard = (props) => {
  const { to, src, text, alt } = props;

  return (
    <Link to={to}>
      <div className="max-w-xs rounded border border-slate-50 overflow-hidden shadow-lg my-4 items-center hover:shadow-xl mx-auto">
        <img className="w-1/2 mx-auto py-2" src={src} alt={alt} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            {text}
          </div>
        </div>
      </div>
    </Link>
  );
};

GearCard.propTypes = {
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  to: PropTypes.string,
  alt: PropTypes.string.isRequired
};

GearCard.defaultProps = {
  to: '#'
};

export default GearCard;
