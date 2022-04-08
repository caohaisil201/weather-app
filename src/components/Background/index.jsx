import BackgroundImage from "../../static/images/sunset.jpg";
import "./style.scss";
const Background = ({children}) => {
    
    return (
        <div className="background">
            <img src={BackgroundImage}/>
            {children}
        </div>
    );
};

export default Background;
