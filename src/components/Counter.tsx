import React from "react";

import "./Counter.css";
import plus from "../assets/plus-icon.svg";
import minus from "../assets/minus-icon.svg";


export default function Counter() {

    const [count, setCount] = React.useState(0);

    function updateCount(num : number){
        if(!(num===-1 && count===0)){
            setCount((prevCount)=>{
                return prevCount + num;
            })
        }
    }

    return(
        <div className="counter">
            <button onClick={ ()=>updateCount(-1) } className="counter-button">
                <img src={ minus } alt=""/>
            </button>
            <div className="counter-count">
                <h3>{ count }</h3>
            </div>
            <button onClick={ ()=> updateCount(1) } className="counter-button">
                <img src={ plus } alt=""/>
            </button>
        </div>
    )
}