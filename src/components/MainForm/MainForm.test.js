import React from 'react';
import ReactDOM from 'react-dom';
import MainForm from './MainForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainForm id={1} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
