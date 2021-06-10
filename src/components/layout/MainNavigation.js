import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.scss';

function MainNavigation() {
  return (
    <nav className={`${classes.navBar}`}>
      <div className={classes.logo}>
        <Link to='/'>{"<Logo>"}</Link>
      </div>
      <div className={classes.links}>
        <Link to='/gallery'>Galeria</Link>
        <Link to='/about-me'>O mnie</Link>
        <Link to='/contact'>Kontakt</Link>
      </div>
    </nav>
  );
}

export default MainNavigation;