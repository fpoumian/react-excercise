import React from 'react';
import ReactDOM from 'react-dom';
import EditPostFormContainer from './EditPostFormContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditPostFormContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
