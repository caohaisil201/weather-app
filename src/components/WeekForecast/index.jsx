import ForecastItem from "../ForecastItem";

const WeekForecase = () => {
  return (
    <div className="container">
        <div className="box">
            <ForecastItem date="date" maxmin="max/min"/>
            <ForecastItem date="date" maxmin="max/min"/>
            <ForecastItem date="date" maxmin="max/min"/>
            <ForecastItem date="date" maxmin="max/min"/>
            <ForecastItem date="date" maxmin="max/min"/>
            <ForecastItem date="date" maxmin="max/min"/>
        </div>
    </div>
  )
}

export default WeekForecase