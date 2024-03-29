import React, {useState, useEffect} from 'react';

 


function formatDate(date) {
    if(!date) return;
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}

function Clock(props) {
    const  [timeString, setTimeString] = useState('');
    useEffect(() => {
        setInterval(() => {
            const now = new Date();

            //hh:mm:ss
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        },1000)
    },[])

    return (
        <div>
            <p style={{fonzise: '70px', textAlign: 'center', color: 'red'}}>{timeString}</p>
        </div>
    );
}

export default Clock;