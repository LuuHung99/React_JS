import React from 'react';
import UseMagicColor from '../hooks/useMagicColor';
function Color(props) {
    const color = UseMagicColor();
    return (
        <div style={{width: '200px', height: '200px',textAlign: 'center', backgroundColor: color}}>
            hello
        </div>
    );
}

export default Color;