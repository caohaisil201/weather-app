const ForecastItem = (props) => {
    function getTime(){
        return props.time.slice(11,16)
    }

    return (
        <div className="forecast">
            <span>{getTime()}</span>
            <div className="forecast-icon">
                <img src={props.icon} alt="icon"/>
            </div>
            <h5>{props.temp} &#8451;</h5>
            <h6>{props.text}</h6>
        </div>
    );
};

export default ForecastItem;
