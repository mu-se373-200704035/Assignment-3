// This is the counter component and it contains two buttons as well as the count field.

import React from "react";

import "./Counter.css"; //stylesheet for this component
import plus from "../assets/plus-icon.svg"; 
import minus from "../assets/minus-icon.svg";


export default function Counter() {

    const [count, setCount] = React.useState(0); // React framework uses states for DOM manipulation
                                                //it is impossible without the usage of states.
                                               //This is how we create and initialize the states.
                                              //count is the state itself while setCount is the function to update the state.


    function updateCount(num : number){     // I wrote this function to update the state with a button click event.
        if(!(num===-1 && count===0)){      //If the count is 0, it cannot decrement the count.
            setCount((prevCount)=>{
                return prevCount + num;
            })
        }
    }

    return( //functional components in React have to return a JSX object as you can see here.
           //JSX objects look very similar to HTML elements.
        <div className="counter">
            <button onClick={ ()=>updateCount(-1) } className="counter-button">{/* on this line I invoke the function to update the count state */}
                <img src={ minus } alt=""/>                                    {/* parameter is -1 because in the function we add this parameter
                                                                                to the current count state */}
            </button>
            <div className="counter-count">
                <h3>{ count }</h3> {/* count state is displayed on this line */}
            </div>
            <button onClick={ ()=> updateCount(1) } className="counter-button">{/* on this line I invoke the function to update the count state */}
                <img src={ plus } alt=""/>                                     {/* parameter is 1 because in the function we add this parameter
                                                                                to the current count state */}
            </button>
        </div>
    )
}