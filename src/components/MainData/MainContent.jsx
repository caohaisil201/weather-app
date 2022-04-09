const MainContent = ({ data }) => {
    
    return (
        <div className="main-content">
            <div className="icon">
                <img src={data?.current?.condition?.icon} alt="icon"/>
            </div>
            <div className="text">
                <h2 className="temperature">{data?.current?.temp_c} &#8451;</h2>
                <h5 className="feel">Feels like {data?.current?.feelslike_c} &#8451;</h5>
                <h5 className="weather">{data?.current?.condition?.text}</h5>
            </div>
        </div>
    );
};

export default MainContent;
