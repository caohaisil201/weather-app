import React, { useState, useEffect } from 'react';
import { WiHumidity, WiSunrise, WiSunset } from 'react-icons/wi';
import { FaTemperatureHigh, FaTemperatureLow, FaWind } from 'react-icons/fa';
import Carousel from '../Carousel';

function checkEmptyObject(value) {
  return Object.keys(value).length === 0 && value.constructor === Object;
}

function Data(name, icon, value) {
  this.name = name;
  this.icon = icon;
  this.value = value;
}

function SubContent({ data }) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    if (!checkEmptyObject(data)) {
      const humidity = new Data(
        'Humidity',
        WiHumidity,
        `${data.current.humidity} %`
      );
      const maxTempC = new Data(
        'Max',
        FaTemperatureHigh,
        `${data.forecast.forecastday[0].day.maxtemp_c} ℃`
      );
      const minTempC = new Data(
        'Min',
        FaTemperatureLow,
        `${data.forecast.forecastday[0].day.mintemp_c} ℃`
      );
      const wind = new Data('Wind', FaWind, `${data.current.wind_kph} kph`);
      const sunrise = new Data(
        'Sunrise',
        WiSunrise,
        data.forecast.forecastday[0].astro.sunrise
      );
      const sunset = new Data(
        'Sunset',
        WiSunset,
        data.forecast.forecastday[0].astro.sunset
      );
      setDataList([humidity, maxTempC, minTempC, wind, sunrise, sunset]);
    }
  }, [data]);
  return (
    <div className="sub-content">
      <div className="box">
        <Carousel
          list={dataList}
          numOfShowItem={2}
        />
      </div>
    </div>
  );
}

export default SubContent;
