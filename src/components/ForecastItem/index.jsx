const ForecastItem = (props) => {
    return (
        <div className="forecast">
            <span>{props.date || props.time}</span>
            <div className="forecast-icon"></div>
            <h5>{props.temp || props.maxmin}</h5>
        </div>
    );
};

export default ForecastItem;
