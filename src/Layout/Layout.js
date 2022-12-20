import Header from '~/components/Header/Header';
import Footer from '~/components/Footer/Footer';

function Layout({ children }) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    );
}

export default Layout;
