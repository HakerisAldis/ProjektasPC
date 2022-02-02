import React, { useCallback, useContext } from 'react';
import { useParams } from 'react-router-dom';
import AddItemCard from '../../components/addItemCard';
import GearList from '../../components/layout/GearList';
import useGetData from '../../hooks/useGetData';
import { gearService } from '../../services/gear';
import { userService } from '../../services/user';
import { UserContext } from '../../constants/contexts';
import withUserIdent from '../../HOC\'s/withUserIdent';
import { COLLECTIONS } from '../../constants/collections';

const Gear = () => {
  const { collection } = useParams();
  const allGear = async () => await gearService.getAll(collection);
  const [gearList, isLoading] = useGetData(allGear);

  const user = useContext(UserContext);
  const isUserAdmin = async () => await userService.isAdmin(user);
  const [isAdmin] = useGetData(isUserAdmin);

  const handleSubmit = useCallback(async event => {
    event.preventDefault();
    const { name, size, flex, profile, image } = event.target.elements;
    const imageFile = image.files[0];
    try {
      switch (collection) {
      case COLLECTIONS.SNOWBOARDS:
        await gearService.addSnowboard(name.value, size.value, flex.value, profile.value, imageFile);
        break;
      case COLLECTIONS.SKIS:
        await gearService.addSkis(name.value, size.value, profile.value, imageFile);
        break;
      case COLLECTIONS.HELMETS:
        await gearService.addHelmet(name.value, size.value, imageFile);
        break;
      case COLLECTIONS.SNOWBOARDBOOTS:
        await gearService.addSnowboardBoots(name.value, size.value, flex.value, imageFile);
        break;
      case COLLECTIONS.SKIBOOTS:
        await gearService.addSkiBoots(name.value, size.value, flex.value, imageFile);
        break;
      }
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <GearList gearList={gearList} isLoading={isLoading} >
        {isAdmin &&
          <AddItemCard handleSubmit={handleSubmit} collection={collection} />
        }
      </GearList>
    </div>
  );
};

export default withUserIdent(Gear);
