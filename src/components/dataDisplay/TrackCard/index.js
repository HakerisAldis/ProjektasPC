import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { trackService } from '../../../services/track';
import Style from './style.module.css';

const TrackCard = (props) => {
  const { isOpened, level, name, id, isAdmin } = props;

  const handleOnChange = useCallback(async () => {
    try {
      await trackService.update(id, 'isOpened', !isOpened);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="max-w-xs rounded overflow-hidden border border-slate-50 shadow-lg my-4 items-center hover:shadow-xl mx-auto">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 flex flex-row">
          <div>
            {name}
          </div>
          <div className={`ml-2 mt-1 w-4 h-4 ${isOpened ? 'bg-green-600' : 'bg-red-600'} rounded-full`}></div>
        </div>
        <div className="text-gray-700 text-base">
          <div>
            <b>{isOpened ? 'Atidaryta' : 'Uždaryta'}</b><br />
          </div>
          <div>
            <b>Sudėtingumas:</b> {level}<br />
          </div>
          {isAdmin &&
            <div className='mt-2'>
              <label className={Style.switch}>
                <input type="checkbox" defaultChecked={isOpened} onChange={handleOnChange} />
                <span className={`${Style.slider} ${Style.round}`}></span>
              </label>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

TrackCard.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired
};

export default TrackCard;
