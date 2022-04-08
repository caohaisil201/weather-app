import axios from "axios";
import { 
    useState, 
    useEffect,
    createContext,
} from "react";

export const Context = createContext();

export default function Provider({ children }){
    //State for location
    //Vi do: latitude, Kinh do: longitude
    const [lat,setLat] = useState()
    const [long, setLong] = useState()

    useEffect(()=>{
        async function fetchData(){
            navigator.geolocation.getCurrentPosition(position=>{
                setLat(position.coords.latitude)
                setLong(position.coords.longitude)
            })

            axios.get(`${process.env.REACT_APP_WEATHER_API_URL}/weather/?lat=${10.81576}&lon=${106.698654}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
                .then(res => {
                    console.log(res.data)
                })
                .catch(error => console.log(error))
        }
        fetchData()
    },[lat,long])

    const store = {
        lat: [lat,setLat],
        long: [long,setLong],
    }

    return(
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
};
