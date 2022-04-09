import { useContext } from "react";
import "./style.scss";
import MainContent from "./MainContent";
import SubContent from "./SubContent";
import Clock from "../Clock";
import { Context } from "../../store/context";

const MainData = () => {
    const context = useContext(Context);
    const dataContext = context.data;

    return (
        <div className="container">
            <div className="location-info">
                <div>
                    <Clock data={dataContext[0]} />
                </div>
                <div>
                    <Clock />
                </div>
            </div>
            <div className="content">
                <MainContent data={dataContext[0]} />
                <SubContent data={dataContext[0]} />
            </div>
        </div>
    );
};

export default MainData;
