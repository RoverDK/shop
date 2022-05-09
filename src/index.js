import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {Router} from './router/Router.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);