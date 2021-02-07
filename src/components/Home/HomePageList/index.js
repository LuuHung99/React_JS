import React from 'react';
import PropTypes from 'prop-types';
import HomePage from '../homePage/index';
import './style.scss';

HomePageList.propTypes = {
    listHome: PropTypes.array.isRequired
};

function HomePageList({listHome}) {
    return (
       <ul className="list-home">
           {
               listHome.map(list => (
                    <li key={list.id}>
                        <HomePage list={list} />
                    </li>
               ))
           }
       </ul>
    );
}

export default HomePageList;