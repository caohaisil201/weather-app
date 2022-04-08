import './style.scss'
import MainContent from './MainContent'
import SubContent from './SubContent'

const MainData = () => {
  return (
    <div className="container">
        <div className="location-info">
            <h3>HCM City</h3>
            <h4>Time, Tuesday, mm/dd/yyyy</h4>
        </div>
        <div className="content">
            <MainContent/>
            <SubContent/>
        </div>
    </div>
  )
}

export default MainData