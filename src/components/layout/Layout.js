import MainNavigation from "./MainNavigation";
import PageImageBar from "../PageImageBar";
import Header from './Header';
import Footer from "./Footer";

function Layout(props) {

  return (
    <div>
      <MainNavigation />
      <PageImageBar/>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;