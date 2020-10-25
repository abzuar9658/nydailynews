import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const Article = ({ title, imageUrl}) => (
  <div
    className='menu-item'
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>Click to read more</span>
    </div>
  </div>
);

export default withRouter(Article);
