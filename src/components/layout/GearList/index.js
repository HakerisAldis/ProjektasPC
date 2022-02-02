import React from 'react';
import PropTypes from 'prop-types';
import ListCard from '../../dataDisplay/ListCard';

const GearList = ({ isLoading, gearList, children }) => {
  if (isLoading) {
    return <div className="flex items-center justify-center space-x-2 animate-pulse my-4">
      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
    </div>;
  }

  return (
    <div className='grid grid-cols-4'>
      {gearList.map(item => <div key={item.id}>
        <ListCard {...item} />
      </div>)}
      { children }
    </div>
  );
};

GearList.propTypes = {
  gearList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.object
};

GearList.defaultProps = {
  children: null
};

export default GearList;
