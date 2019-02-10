import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Testimonial from './Testimonial';
import Configurator from './Configurator';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/page-1" exact component={Testimonial} />
          <Route path="/page-2" exact component={Configurator} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
