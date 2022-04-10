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
    const [style,setStyle] = context.style;
    useLayoutEffect(() => {
        if (data?.current) {
            let time = data.location.localtime.slice(11, 16);
            const weather = data.current.condition.text.toLowerCase();
            time = time.length === 4 ? "0" + time : time;
            if (time >= "19:00" || time < "05:00") {
                setStyle("night");
                setBackground(NightImage);
            } else if (time >= "05:00" && time < "06:59") {
                setStyle("sunrise");
                setBackground(SunriseImage);
            } else if (time >= "17:00" && time < "19:00") {
                setStyle("sunset");
                setBackground(SunsetImage);
            } else if (weather.includes("fog")) {
                setStyle("fog");
                setBackground(FogImage);
            } else if (weather.includes("cloudy")) {
                setStyle("cloudy");
                setBackground(CloudImage);
            } else if (weather.includes("overcast")) {
                setStyle("overcast");
                setBackground(OvercastImage);
            } else if (weather.includes("clear")) {
                setStyle("clear");
                setBackground(ClearImage);
            } else if (weather.includes("sunny")) {
                setStyle("sunny");
                setBackground(SunnyImage);
            } else if (weather.includes("drizzle") || weather.includes("rain")) {
                setStyle("rain");
                setBackground(RainImage);
            } else if (weather.includes("snow")) {
                setStyle("snow");
                setBackground(SnowImage);
            } else if (data.current.temp_c <= 20) {
                setStyle("cool");
                setBackground(CoolImage);
            } else if (data.current.temp_c >= 32) {
                setStyle("hot");
                setBackground(HotImage);
            } else {
                setStyle("");
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
