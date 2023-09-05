import { Outlet } from 'react-router-dom';
import Header from 'domains/common/Header';
import Footer from 'domains/common/Footer';

const MainLayout = () => {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
