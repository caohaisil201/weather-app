import { useEffect, useContext } from "react";
import { Context } from "./store/context";
//style
import "./style/_app.scss";
//component
import Background from "./components/Background";
import Input from "./components/Input";
import MainData from "./components/MainData";
import WeekForecast from "./components/WeekForecast";

function App() {
    const context = useContext(Context);

    return (
        <div className="App">
            <Background />
            <Input />
            <MainData/>
            <WeekForecast/>
        </div>
    );
}

export default App;
