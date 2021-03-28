import React, { useState, useEffect } from 'react';


function randomColor() {
    const COLOR_LIST = ['red', 'green', 'blue', 'yellow'];
    const randomColor = Math.trunc(Math.random() * 3);
    console.log(COLOR_LIST[randomColor]);
    return COLOR_LIST[randomColor];
}

function UseMagicColor(props) {
    const [color, setColor] = useState('transperent');

    useEffect(() => {
        const colorInterval = setInterval(() =>{
            const newColor = randomColor();
            setColor(newColor);
        },1000);
        
        return () => {
            clearInterval(colorInterval);
        }
    }, [])

    return color;
}

export default UseMagicColor;