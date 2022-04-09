const StatItem = ({ name, humidity, wind, max, min, sunrise, sunset }) => {
    function getStat() {
        if (humidity) return `${humidity} %`;
        else if (wind) return `${wind}kph`;
        else if (max) return `${max} \u00B0C`;
        else if (min) return `${min} \u00B0C`;
        else if (sunrise) return `${sunrise}`;
        else if (sunset) return `${sunset}`;
        else return ``;
    }

    return (
        <div className="in-day-stat">
            <h2>{getStat()}</h2>
            <h5>{name}</h5>
        </div>
    );
};

export default StatItem;
