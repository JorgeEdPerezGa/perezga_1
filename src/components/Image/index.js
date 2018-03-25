import React from 'react';
import './style.css';

const Image = ({ image }) => {
  return ( <img className="image" src={`${image}`}/> );
};

export default Image;
