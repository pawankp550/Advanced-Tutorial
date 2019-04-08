import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without any crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

   expect(div.innerHTML).toContain('Hdwi there!');

  ReactDOM.unmountComponentAtNode(div);
});
