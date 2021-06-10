import MainNavigation from "./MainNavigation";
import classes from './Layout.module.scss';
import PageImageBar from "../PageImageBar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <PageImageBar />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;