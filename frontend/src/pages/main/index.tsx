import { Outlet } from 'react-router-dom';
import Header from '../../components/forms/Header';

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Main;
