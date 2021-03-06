import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Testimonial from '../containers/Testimonial';
import Configurator from '../containers/Configurator';
import Header from '../containers/Header';
import colors from './styles/Colors';

const App = () => {
  return (
    <div style={{ backgroundColor: colors.background }}>
        <BrowserRouter>
          <div>
            <Header />
              <div className="ui container" style={{ backgroundColor: colors.background }}>
              <Route path="/" exact component={Testimonial} />
              <Route path="/page-1" exact component={Testimonial} />
              <Route path="/page-2" exact component={Configurator} />
            </div>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
