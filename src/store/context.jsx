import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const Context = createContext();

export default function Provider({ children }) {
    //State for location
    //Vi do: latitude, Kinh do: longitude
    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [input, setInput] = useState("");
    const [data, setData] = useState({});
    const [cityName, setCityName] = useState("");

    useEffect(() => {
        async function fetchData() {
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            axios.get(
                    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`,
                )
                .then((res) => {
                    setCityName(res.data.city);
                    return res;
                })
                .catch((error) => console.log(error));
        }
        fetchData();
    }, [lat, long]);

    useEffect(()=>{
        async function fetchData(){
            const options = {
                method: 'GET',
                url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
                params: {q: cityName, days: '7'},
                headers: {
                  'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
                  'X-RapidAPI-Key': '2d9d16b4c1mshe19104608550bebp134066jsnb73398016701'
                }
              };

            axios.request(options)
                .then((response) => {
                    console.log(response.data);
                    setData(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        if(cityName){
            fetchData()
        }
    }, [cityName])

    const store = {
        input: [input, setInput],
        lat: [lat, setLat],
        long: [long, setLong],
        data: [data, setData],
        cityName: [cityName, setCityName],
    };

    return <Context.Provider value={store}>{children}</Context.Provider>;
}
