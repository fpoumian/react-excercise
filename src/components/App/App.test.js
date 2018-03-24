import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App post={{id: 1, title: "Lorem Ipsum", body: "Lorem Ipsum"}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});