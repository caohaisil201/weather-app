import MiniThumbnail from '../../assets/images/miniThumbnail.png'

const MainContent = ({ data }) => {
  return (
    <div className="main-content">
      <div className="icon">
        <img src={data?.current?.condition?.icon || MiniThumbnail} alt="icon" />
      </div>
      <div className="text">
        <h2 className="temperature">{data?.current?.temp_c || `0`}&#8451;</h2>
        <p className="feel">
          Feels like {data?.current?.feelslike_c || `0`}&#8451;
        </p>
        <h5 className="weather">
          {data?.current?.condition?.text || `Nothing`}
        </h5>
      </div>
    </div>
  )
}

export default MainContent
