import GearCard from '../../components/dataDisplay/GearCard';
import { ROUTES } from '../../routes';
import helmet from '../../assets/images/helmet.png';
import skiBoots from '../../assets/images/skiBoots.png';
import skis from '../../assets/images/skis.png';
import snowboard from '../../assets/images/snowboard.png';
import snowboardBoots from '../../assets/images/snowboardBoots.png';

const GearSelect = () => {
  return (
    <div className='grid grid-cols-4'>
      <div>
        <GearCard src={snowboard} alt="Snieglentė" text="Snieglentės" to={`${ROUTES.GEARSELECT}/Snowboards`} />
      </div>
      <div>
        <GearCard src={skis} alt="Slidė" text="Slidės" to={`${ROUTES.GEARSELECT}/Skis`} />
      </div>
      <div>
        <GearCard src={helmet} alt="Šalmas" text="Šalmai" to={`${ROUTES.GEARSELECT}/Helmets`} />
      </div>
      <div>
        <GearCard src={snowboardBoots} alt="Snieglentės batai" text="Snieglentės batai" to={`${ROUTES.GEARSELECT}/SnowboardBoots`} />
      </div>
      <div>
        <GearCard src={skiBoots} alt="Slidžių batai" text="Slidžių batai" to={`${ROUTES.GEARSELECT}/SkiBoots`} />
      </div>
    </div>
  );
};

export default GearSelect;
