import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from '../component/Header';
import Rockets from '../pages/Rockets';
import Mission from '../pages/Mission';
import Dragon from '../pages/Dragon';

import store from '../Redux/configureStore';

describe('Header renders correctly', () => {
  test('Renders Header Correctly', () => {
    const header = render(
      <Router>
        <Header />
      </Router>,
    );
    expect(header).toMatchSnapshot();
  });
});

describe('mission renders correctly', () => {
  test('Renders mission Correctly', () => {
    const mission = render(
      <Provider store={store}>
        <Router>
          <Mission />
        </Router>
      </Provider>,
    );
    expect(mission).toMatchSnapshot();
  });
});

describe('rocket renders correctly', () => {
  test('Renders rocket Correctly', () => {
    const rocket = render(
      <Provider store={store}>
        <Router>
          <Rockets />
        </Router>
      </Provider>,
    );
    expect(rocket).toMatchSnapshot();
  });
});

describe('dragon renders correctly', () => {
  test('Renders dragon Correctly', () => {
    const dragon = render(
      <Provider store={store}>
        <Router>
          <Dragon />
        </Router>
      </Provider>,
    );
    expect(dragon).toMatchSnapshot();
  });
});
