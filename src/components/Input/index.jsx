import { useContext, useRef } from "react";
import { Context } from "../../store/context";
import "./style.scss";

function Input() {
    //get Context
    const context = useContext(Context);
    const inputContext = context.input;
    const cityNameContext = context.cityName;
    const inputRef = useRef();

    const handleChange = (e) => {
        inputContext[1](e.target.value);
    };

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            cityNameContext[1](inputContext[0]);
            inputContext[1]("");
            inputRef.current.focus();
        }
    };

    return (
        <div className="input">
            <input
                ref={inputRef}
                type="text"
                value={inputContext[0]}
                onChange={handleChange}
                onKeyDown={handleEnter}
                placeholder="Enter city..."
            />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    );
}

export default Input;
