import React from 'react';
import ReactDOM from 'react-dom';
import EditForm from './EditForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditForm id={1} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
