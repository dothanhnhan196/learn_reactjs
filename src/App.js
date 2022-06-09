import './App.scss';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
import Product from './components/Products/Product';
import Nav from './components/Navigation/Nav';

import 'react-image-lightbox/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Weather from './components/Weather/Weather';
import OTP from './components/OTP/OTP';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/about">
          <div>Hello About</div>
        </Route>
        <Route path="/otp">
          <OTP />
        </Route>
        <Route path="/" exact>
          <div className="App">
            <header className='App-header content-left'>
              <p>Hello ReactJS</p>
              <Home />
            </header>
            <div className='content-right'>
              <AddNewProduct />
              <hr />
              <Product />
            </div>
          </div>
        </Route>
        <Route path='*'>
          <div>404 Not Found</div>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
