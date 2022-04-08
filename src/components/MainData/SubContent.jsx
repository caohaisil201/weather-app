import StatItem from "./StatItem"
import ForecastItem from "../ForecastItem"

function SubContent() {
    return(
        <div className="sub-content">
            <div className="box">
                <StatItem name="Humidity"/>
                <StatItem name="Wind"/>
                <StatItem name="Max"/>
                <StatItem name="Min"/>
                <StatItem name="Sunrise"/>
                <StatItem name="Sunset"/>
            </div>
            <div className="box">
                <ForecastItem time="time" temp="temp"/>
                <ForecastItem time="time" temp="temp"/>
                <ForecastItem time="time" temp="temp"/>
                <ForecastItem time="time" temp="temp"/>
                <ForecastItem time="time" temp="temp"/>
                <ForecastItem time="time" temp="temp"/>
                {/* <ForecastItem/> */}
            </div>
        </div>
    )
}

export default SubContent