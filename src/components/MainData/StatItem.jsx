const StatItem = ({ name, humidity, wind, max, min, sunrise, sunset }) => {
    function getStat() {
        if (humidity) return `${humidity} %`;
        else if (wind) return `${wind}kph`;
        else if (max) return `${max} \u00B0C`;
        else if (min) return `${min} \u00B0C`;
        else if (sunrise) return `${sunrise}`;
        else if (sunset) return `${sunset}`;
        else return `0`;
    }

    return (
        <div className="in-day-stat">
            <h2>{getStat()}</h2>
            <h4>{name}</h4>
        </div>
    );
};

export default StatItem;
