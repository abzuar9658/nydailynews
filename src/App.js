import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

function App() {
  return (
    <div className="App">
      <Route exact path = '/' component = {HomePage}/>
      <Route exact path = '/sign-in-sign-up' component = {SignInAndSignUpPage}/>
    </div>
  );
}

export default App;
