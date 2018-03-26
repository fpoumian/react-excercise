import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Button
      primary
      onClick={() => console.log('rendered')}
      children={<p>Edit</p>}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
