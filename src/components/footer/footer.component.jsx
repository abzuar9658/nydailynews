import React from "react";
import {withRouter} from 'react-router-dom'

import './footer.css'

const FooterPage = () => {
  return (
    <div className = 'footer'>
      <div className = 'section-1'>
        <h1><i className = 'newspaper icon icon-size'></i></h1>
        <p>Connect</p>
        <div className = 'social-icons'>
          <button><i class="facebook icon"></i></button>
          <button><i class="twitter icon"></i></button>
          <button><i class="instagram icon"></i></button>
          <button><i class="youtube icon"></i></button>
        </div>
      </div>

      <div className = 'section-2'>

        <h5>TRIBUNE PUBLICATIONS</h5>
        <div className = 'links-1'>
          <div className = 'c1'>
            <p>Chicago Tribune</p>
            <p>Orland Sentimal</p>
            <p>The morning call of Pa.</p>
            <p>Daily Press of Va.</p>
            <p>The daily meal</p>
          </div>
          <div className = 'c2'>
            <p>Chicago Tribune</p>
            <p>Orland Sentimal</p>
            <p>The morning call of Pa.</p>
            <p>Daily Press of Va.</p>
            <p>The daily meal</p>
          </div>
        </div>

        <h5>COMPANY INFO</h5>
        <div className = 'links-2'>
          <div className = 'c1'>
            <p>Chicago Tribune</p>
            <p>Orland Sentimal</p>
            <p>The morning call of Pa.</p>
            <p>Daily Press of Va.</p>
            <p>The daily meal</p>
          </div>
          <div className = 'c2'>
            <p>Chicago Tribune</p>
            <p>Orland Sentimal</p>
            <p>The morning call of Pa.</p>
            <p>Daily Press of Va.</p>
            <p>The daily meal</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default withRouter(FooterPage);