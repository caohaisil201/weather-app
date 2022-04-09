import { useContext } from "react";
import ForecastItem from "../ForecastItem";
import { Context } from "../../store/context";

const DailyForecase = () => {
    const context = useContext(Context);
    let forecastContext = context?.data[0]?.forecast?.forecastday[0]?.hour;
    if (forecastContext) {
        forecastContext = forecastContext.filter((elem, index) => {
            return index % 4 === 0;
        });
    }

    return (
        <div className="container">
            <div className="box daily-forecast">
                {forecastContext ? forecastContext.map((item, index) => {
                    return (
                        <ForecastItem
                            key={index}
                            time={item.time}
                            temp={item.temp_c}
                            icon={item.condition.icon}
                            text={item.condition.text}
                        />
                    );
                }) : <></>}
            </div>
        </div>
    );
};

export default DailyForecase;
