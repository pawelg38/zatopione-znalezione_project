import classes from './PageImageBar.module.scss';
import fbLogo from '../assets/images/logos/f_logo_RGB-Blue_58.png';
import instaLogo from '../assets/images/logos/insta_logo.png';
import vintedLogo from '../assets/images/logos/vinted_logo.png';

function PageImageBar() {
  return (
    <div className={classes.imageBar}>
      <div className={classes.gradientMask}>
        <div className={classes.logosBox}>
          <img src={fbLogo} alt="Facebook logo"/>
          <img src={instaLogo} alt="Facebook logo"/>
          <img src={vintedLogo} alt="Facebook logo"/>
        </div>
      </div>
    </div>
  );
}

export default PageImageBar;