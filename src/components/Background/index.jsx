import { useContext, useState, useRef, useLayoutEffect } from "react";
import { Context } from "../../store/context";
//background
import ThumbnailImage from "../../assets/images/thumbnail.jpg";
import CloudImage from "../../assets/images/cloudy.jpg";
import CoolImage from "../../assets/images/cool.jpg";
import HotImage from "../../assets/images/hot.jpg";
import FogImage from "../../assets/images/fog.jpg";
import NightImage from "../../assets/images/night.jpg";
import OvercastImage from "../../assets/images/overcast.jpg";
import ClearImage from "../../assets/images/clear.jpg";
import RainImage from "../../assets/images/rain.jpg";
import SnowImage from "../../assets/images/snow.jpg";
import SunnyImage from "../../assets/images/sunny.jpg";
import SunsetImage from "../../assets/images/sunset.jpg";
import SunriseImage from "../../assets/images/sunrise.jpg";
import "./style.scss";

const Background = ({ children }) => {
    const [background, setBackground] = useState(ThumbnailImage);
    const imgRef = useRef();
    const context = useContext(Context);
    const data = context.data[0];
    
    useLayoutEffect(() => {
        if (data?.current) {
            let time = data.location.localtime.slice(11, 16);
            const weather = data.current.condition.text.toLowerCase();
            time = time.length === 4 ? "0" + time : time;
            if (time >= "19:00" || time < "05:00") {
                setBackground(NightImage);
            } else if (time >= "05:00" && time < "06:59") {
                setBackground(SunriseImage);
            } else if (time >= "17:00" && time < "19:00") {
                setBackground(SunsetImage);
            } else if (weather.includes("fog")) {
                setBackground(FogImage);
            } else if (weather.includes("cloudy")) {
                setBackground(CloudImage);
            } else if (weather.includes("overcast")) {
                setBackground(OvercastImage);
            } else if (weather.includes("clear")) {
                setBackground(ClearImage);
            } else if (weather.includes("sunny")) {
                setBackground(SunnyImage);
            } else if (weather.includes("drizzle") || weather.includes("rain")) {
                setBackground(RainImage);
            } else if (weather.includes("snow")) {
                setBackground(SnowImage);
            } else if (data.current.temp_c <= 20) {
                setBackground(CoolImage);
            } else if (data.current.temp_c >= 32) {
                setBackground(HotImage);
            } else {
                setBackground(ThumbnailImage);
            }
        }
    }, [data]);

    return (
        <div className="background">
            <img ref={imgRef} src={background} alt="background" />
            {children}
        </div>
    );
};

export default Background;
