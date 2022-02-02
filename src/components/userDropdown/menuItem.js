import PropTypes from 'prop-types';

const MenuItem = (props) => {
  const { active, children, onClick } = props;
  return (
    <button
      onClick = { onClick }
      className = {`${
        active
          ? 'bg-gray-500 text-gray-900'
          : 'text-gray-700'
      } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
    >
      { children }
    </button>
  );
};

MenuItem.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

MenuItem.defaultProps = {
  onClick: undefined
};

export default MenuItem;
