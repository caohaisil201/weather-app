import axios from "axios";
import { useState, useEffect } from "react";

const Clock = ({ data }) => {
    const [time, setTime] = useState(new Date().toLocaleString());
    const [location, setLocation] = useState({});
    const [date,setDate] = useState('')
    const [gmt,setGmt] = useState('')

    function formatDate(dateStr){
        const arr = dateStr.split('T')
        const time = arr[1].substr(8,7)
        const gmt = arr[1].split(time)
        const text = gmt[1].slice(0,3)
        const date = `${arr[0].slice(5,7)}/${arr[0].slice(8,10)}/${arr[0].slice(0,4)}`
        
        return [date,text]
    }

    useEffect(() => {
        if (location?.datetime) {
            const [date,gmt] = formatDate(location.datetime);
            setDate(date)
            setGmt(gmt)
        } else {
            setTimeout(() => {
                setTime(new Date().toLocaleString());
            }, 1000);
        }
    }, [location,time]);

    useEffect(() => {
        if (data?.location) {
            axios.get(
                    `https://worldtimeapi.org/api/timezone/${data.location.tz_id}`,
                )
                .then((response) => {
                    setLocation(response.data);
                })
                .catch((error) => console.log(error));
        }
    }, [data]);

    return (
        <div className="clock" style={{ textAlign: data ? "left" : "right" }}>
            <h2>
                {data?.location?.name
                    ? `${data?.location?.name} (GMT ${gmt})`
                    : "HCM City (GMT +07)"}
            </h2>
            <h3>{date || time}</h3>
        </div>
    );
};

export default Clock;
