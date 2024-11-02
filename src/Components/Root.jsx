import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
