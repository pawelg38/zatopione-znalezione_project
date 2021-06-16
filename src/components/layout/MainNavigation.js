import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import classes from './MainNavigation.module.scss';

function MainNavigation() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isNavFinishedClosing, setIsNavFinishedClosing] = useState(true);

  function toggleMenuHandler() {
    console.log(isNavOpen);
    setIsNavFinishedClosing(false);
    setNavOpen(!isNavOpen);
  }

  let menuLinks;
  menuLinks = (
    <>
      <Link to='/gallery'>Galeria</Link>
      <Link to='/'>O mnie</Link>
      <Link to='/'>Kontakt</Link>
    </>
  )

  return (
    <nav>
      <div className={`${classes.navBar}`}>
        <div className={classes.logo}>
          <Link to='/'>{"<Logo>"}</Link>
        </div>
        <div className={classes.dropMenuBtnBox}>
          <div onClick={toggleMenuHandler} className={`${classes.dropMenuBtn} ${isNavOpen ? classes.dropMenuBtnOpened : classes.dropMenuBtnClosed}`}>
            <div />
            <div />
            <div />
          </div>
        </div>
        {/* <div className={classes.horizontalMenu}>
          <Link to='/gallery'>Galeria</Link>
          <Link to='/'>O mnie</Link>
          <Link to='/'>Kontakt</Link>
        </div> */}
        <CSSTransition
        in={isNavOpen}
        classNames={{
          enter: classes.horizontalMenuEnter,
          enterDone: classes.horizontalMenuDone,
          exit: classes.horizontalMenuExit,
          exitDone: classes.horizontalMenuExitDone
        }}
        onExited={()=>{setIsNavFinishedClosing(true)}}
        timeout={{ enter: 300, exit: 300 }}>
          <div className={classes.horizontalMenu}>
            <Link to='/gallery'>Galeria</Link>
            <Link to='/'>O mnie</Link>
            <Link to='/'>Kontakt</Link>
          </div>
        </CSSTransition>
        {/* <CSSTransition
        in={isNavOpen}
        classNames={{
          enter: classes.verticalMenuEnter,
          enterDone: classes.verticalMenuEnterDone,
          exit: classes.verticalMenuExit,
          exitDone: classes.verticalMenuExitDone
        }}
        onExited={()=>{setIsNavFinishedClosing(true)}}
        timeout={{ enter: 300, exit: 300 }}>
          <div className={classes.verticalMenu}>
            {menuLinks}
          </div>
        </CSSTransition> */}
      </div>
    </nav>
  );
}

export default MainNavigation;