import React from 'react';
import {withRouter, Link} from 'react-router-dom'
import SignIn from '../../components/login/sign-in.component';
import SignUp from '../../components/login/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <div>
    <Link to= '/' className = 'main-heading' style={{ textDecoration: 'none' }}>DAILY <i className = 'newspaper icon h1-icon' ></i> NEWS</Link>
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
    
  </div>
);

export default withRouter(SignInAndSignUpPage);
