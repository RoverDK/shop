import {Outlet} from 'react-router-dom';
import { Header } from './components/Header';
import { ffetch } from './api';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
