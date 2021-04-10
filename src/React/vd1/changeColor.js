import React, {useState} from 'react';
import PropTypes from 'prop-types';

ChangeColor.propTypes = {
    color: PropTypes.array.isRequired
};

function ChangeColor(props) {
    const [color, setColor] = useState('yellow');
    const [counter, setCounter] = useState(0);
    return (
        <>
        <div style={{width: '200px', height: '200px', backgroundColor: color, textAlign: 'centernn'}}>
            
            <button onClick={() =>setColor('red')}>Change to red</button>
            <button onClick={() => setColor('green')}>Change to green</button>
        </div>
        <div style={{textAlign: 'center'}}>
            {counter}
            <br></br>
            <button onClick={() =>setCounter(x=>x+1)}>Increment</button>
            <button onClick={() =>setCounter(x=>x-1)}>Decrement</button>
        </div>
        </>

    );
}



export default ChangeColor;