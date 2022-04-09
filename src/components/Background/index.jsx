import BackgroundImage from "../../assets/images/sunset.jpg";
import "./style.scss";
const Background = ({children}) => {
    
    return (
        <div className="background">
            <img src={BackgroundImage} alt="background"/>
            {children}
        </div>
    );
};

export default Background;
