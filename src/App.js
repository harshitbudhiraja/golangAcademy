import React from 'react';
import HomePage from './home';
import { Switch, Route , Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutUs from './routes/us';
// import "./compiler";
import Problems from './routes/problem';
import Footer from './components/footer';

function App() {
  
  
  return (
    <React.Fragment>
      <main>
        <NavBar/>
        <Switch>
          <Route path="/compiler" component={HomePage} />
          <Route path="/problems" component={Problems} />
          <Route path="/about-us" component={AboutUs} />
          <Redirect from="/" to="/compiler" />
        </Switch>
      </main>
      <Footer/>
    </React.Fragment>

  );
}

export default App;
