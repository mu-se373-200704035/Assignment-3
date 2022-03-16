import { IonButton } from '@ionic/react';
import React from 'react';
import './Counter.css';

interface ContainerProps { }

const Counter = () => {
  
    const [ count, setCount ] = React.useState(0);
  
    const decrementCounter = () => {
        if(count>0){
            setCount((prevCount) => {
                return prevCount -1;
            })
        }
    }

    const incrementCounter = () => {
        setCount((prevCount) => {
            return prevCount +1;
        })
    }
  
    

    return (
    <div className="counter-wrapper">
        <div className="counter">
            <IonButton className="counter-button" onClick={ decrementCounter }>-</IonButton>
            <div className="count">
            <h3>{ count }</h3>
            </div>
            <IonButton className="counter-button" onClick={ incrementCounter }>+</IonButton>
        </div>
    </div>
  );
};

export default Counter;
