import { useContext } from "react";
import { Context } from "./store/context";
//style
import "./style/_app.scss";
//component
import Background from "./components/Background";
import Input from "./components/Input";
import MainData from "./components/MainData";
import DailyForecast from "./components/DailyForecast";

function App() {
    const context =useContext(Context);
    const [style,setStyle] = context.style;

    return (
        <div className={`App ${style}`}>
            <Background />
            <Input />
            <MainData/>
            <DailyForecast/>
        </div>
    );
}

export default App;
