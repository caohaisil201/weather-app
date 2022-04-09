import StatItem from "./StatItem"

function SubContent({data}) {
    return(
        <div className="sub-content">
            <div className="box">
                <StatItem name="Humidity" humidity={data?.current?.humidity}/>
                <StatItem name="Max" max={data?.forecast?.forecastday[0]?.day?.maxtemp_c}/>
                <StatItem name="Min" min={data?.forecast?.forecastday[0]?.day?.mintemp_c}/>
            </div>
            <div className="box">
                <StatItem name="Wind" wind={data?.current?.wind_kph}/>
                <StatItem name="Sunrise" sunrise={data?.forecast?.forecastday[0]?.astro?.sunrise}/>
                <StatItem name="Sunset" sunset={data?.forecast?.forecastday[0]?.astro?.sunset}/>
            </div>
        </div>
    )
}

export default SubContent