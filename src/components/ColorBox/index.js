import React, {useState} from 'react';


function getRandomColor() {
    const LIST_COLOR = ['red', 'green', 'yellow', 'blue', 'gray', 'ping'];
    const randomColor = Math.trunc(Math.random() * 6);
    return LIST_COLOR[randomColor];
}

function ColorBox() {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box-color' || 'red');
        console.log(initColor);
        return initColor;
    });

    


    function handleColorBox() {
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.getItem('box-color', newColor);
    }
    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleColorBox}
        >
            Color Box
        </div>
    );
}


export default ColorBox;