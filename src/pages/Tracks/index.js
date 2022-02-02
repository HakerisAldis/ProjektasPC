import TrackCard from '../../components/dataDisplay/TrackCard';
import { IMAGE } from '../../constants/images';
import useGetData from '../../hooks/useGetData';
import { imageService } from '../../services/image';
import { trackService } from '../../services/track';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import { useContext, useState } from 'react';
import withUserIdent from '../../HOC\'s/withUserIdent';
import { UserContext } from '../../constants/contexts';
import { userService } from '../../services/user';

const Tracks = () => {
  const [tracks, isLoadingTracks] = useGetData(trackService.getAll);
  const [imageZoom, setImageZoom] = useState(false);

  function handleOnImageClick () {
    setImageZoom(!imageZoom);
  }

  const user = useContext(UserContext);
  const isUserAdmin = async () => await userService.isAdmin(user);
  const [isAdmin, isLoadingAdminInfo] = useGetData(isUserAdmin);

  if (isLoadingTracks || isLoadingAdminInfo) {
    return <div className="flex items-center justify-center space-x-2 animate-pulse my-4">
      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
    </div>;
  }

  return (
    <div className='grid grid-cols-2 divide-x'>
      <div>
        <div className='grid grid-cols-2'>
          {tracks.map(track => <div key={track.id}>
            <TrackCard {...track} isAdmin={isAdmin} />
          </div>)}
        </div>
      </div>
      <div className='mt-2'>
        <img className="w-1/2 m-auto cursor-zoom-in" src={imageService.getUrl(IMAGE.TRACKS_SCHEME)} alt="Trasų schema" onClick={handleOnImageClick} />
        {imageZoom &&
          <Lightbox image={imageService.getUrl(IMAGE.TRACKS_SCHEME)} title="Trasų schema" onClose={handleOnImageClick} />
        }
      </div>
    </div>
  );
};

export default withUserIdent(Tracks);
