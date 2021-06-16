import classes from './PageImageBar.module.scss';
import fbLogo from '../assets/images/logos/f_logo_RGB-Blue_58.png';
import instaLogo from '../assets/images/logos/insta_logo.png';
import vintedLogo from '../assets/images/logos/vinted_logo.png';
import { useLocation } from 'react-router-dom';

function PageImageBar(props) {
  const location = useLocation();
  let content;

  const bgClass = () => {
    if (location.pathname === '/') {
      content = ( 
        <div className={classes.logosBox}>
          <img src={fbLogo} alt="Facebook logo"/>
          <img src={instaLogo} alt="Facebook logo"/>
          <img src={vintedLogo} alt="Facebook logo"/>
        </div>
      )
      return classes.imageBarBgHome;
    }
    else if (location.pathname === '/gallery') {
      return classes.imageBarBgGallery;
    }
  }
  const bgMaskClass = () => {
    if (location.pathname === '/') {
      return classes.bgMaskHome;
    }
    else if (location.pathname === '/gallery') {
      return classes.bgMaskGallery;
    }
  }
  return (
    <div>
      <div className={`${bgClass()} ${classes.imageBar}`}>
        <div className={bgMaskClass()}>
          {content}
        </div>
      </div>
    </div>
  );
}

export default PageImageBar;