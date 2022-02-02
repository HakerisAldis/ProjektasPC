import FadeIn from 'react-fade-in';
import Background from '../../components/layout/Background';

const Main = () => {
  return (
    <Background>
      <FadeIn transitionDuration={1000}>
        <div className='pb-6'>
          <h1 className='text-white font-bold text-5xl text-center'>
                            Sveiki atvykę į SkiPark!
          </h1>
          <h1 className='text-gray-100 text-center'>
                            Slidinėjimo trasa, įrangos nuoma, gera nuotaika
          </h1>
        </div>
      </FadeIn>
    </Background>
  );
};

export default Main;
