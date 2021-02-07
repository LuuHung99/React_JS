import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Homepage.propTypes = {
    list: PropTypes.object.isRequired
};

function Homepage({list}) {
    return (
        <div className="homepage">
            <img className="homepage__img" src={list.url}  alt={list.name} />
            <p className="homepage__name">{list.name}</p>
        </div>
    );
}

export default Homepage;