import React from 'react';
import ReactDOM from 'react-dom';
import MainFormContainer from './MainFormContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainFormContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
