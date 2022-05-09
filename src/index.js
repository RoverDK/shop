import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {Router} from './router/Router.js'

import './styles/bootstrap.min.css'
import './styles/fix.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);