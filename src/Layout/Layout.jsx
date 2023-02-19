import Header from '~/components/Header/Header';
import Footer from '~/components/Footer/Footer';

import AdminNav from '~/admin/AdminNav/AdminNav';
import { useLocation } from 'react-router-dom';

function Layout({ children }) {
  const location = useLocation();
  return (
    <>
      {location.pathname.startsWith('/dashboard') ? <AdminNav /> : <Header />}
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
