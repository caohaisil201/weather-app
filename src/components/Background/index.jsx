import { useContext, useState, useRef, useLayoutEffect } from 'react';
import { Context } from '../../store/context';

import ThumbnailImage from '../../assets/images/thumbnail.jpg';
import DayImage from '../../assets/images/day.jpg';
import NightImage from '../../assets/images/night.jpg';
import './style.scss';

// const backgroundList = [
//   {
//     key: 'fog',
//     background: FogImage,
//   },
//   {
//     key: 'cloudy',
//     background: CloudImage,
//   },
//   {
//     key: 'overcast',
//     background: OvercastImage,
//   },
//   {
//     key: 'clear',
//     background: ClearImage,
//   },
//   {
//     key: 'sunny',
//     background: SunnyImage,
//   },
//   {
//     key: 'drizzle',
//     background: RainImage,
//   },
//   {
//     key: 'rain',
//     background: RainImage,
//   },
//   {
//     key: 'snow',
//     background: SnowImage,
//   },
//   {
//     key: '',
//     background: ThumbnailImage,
//   },
// ]

const Background = ({ children }) => {
  const [background, setBackground] = useState(ThumbnailImage);
  const [isNight, setIsNight] = useState(false);
  const imgRef = useRef();
  const context = useContext(Context);
  const data = context.data[0];

  useLayoutEffect(() => {
    if (data?.current) {
      let time = data.location.localtime.slice(11, 16);
      time = time.length === 4 ? '0' + time : time;
      if (time >= '19:00' || time < '05:00') {
        setBackground(NightImage);
        setIsNight(true);
        return;
      }
      setIsNight(false);
      setBackground(DayImage);
    }
  }, [data]);

  return (
    <div className={'background ' + (isNight ? 'night' : 'day')}>
      <img ref={imgRef} src={background} alt="background" />
      {children}
    </div>
  );
};

export default Background;
