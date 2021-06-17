import MainNavigation from "./MainNavigation";
import PageImageBar from "../PageImageBar";
import Header from './Header';
import Footer from "./Footer";

function Layout(props) {

  return (
    <div>
      <MainNavigation scrollToAbout={props.scrollToAbout}/>
      <PageImageBar/>
      <Header />
      {props.children}
      <Footer/>
    </div>
  );
}

export default Layout;