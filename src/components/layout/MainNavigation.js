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
  if (isNavOpen) {
    menuLinks = (
      <>
        <Link to='/gallery'>Galeria</Link>
        <Link to='/'>O mnie</Link>
        <Link to='/'>Kontakt</Link>
      </>
    )
  }

  return (
    <nav className={isNavFinishedClosing ? null : classes.h100pr}>
      <div className={`${classes.navBar}`}>
        <div className={classes.logo}>
          <Link to='/'>{"<Logo>"}</Link>
        </div>
        <div onClick={toggleMenuHandler} className={`${classes.dropMenuBtn} ${isNavOpen ? classes.dropMenuBtnOpened : classes.dropMenuBtnClosed}`}>
          <div />
          <div />
          <div />
        </div>
        <div className={classes.horizontalMenu}>
          <Link to='/gallery'>Galeria</Link>
          <Link to='/'>O mnie</Link>
          <Link to='/'>Kontakt</Link>
        </div>
      </div>
      <CSSTransition
      in={isNavOpen}
      classNames={{
        enter: classes.verticalMenuBoxEnter,
        enterDone: classes.verticalMenuBoxEnterDone,
        exit: classes.verticalMenuBoxExit,
        exitDone: classes.verticalMenuBoxExitDone
      }}
      onEntered={()=>{console.log("entered")}}
      onExited={()=>{console.log("exited");setIsNavFinishedClosing(true)}}
      timeout={{ enter: 300, exit: 300 }}>
        <div className={classes.verticalMenuBox}>
          <div className={`${classes.verticalMenu} ${isNavOpen ? classes.verticalMenuOpened : null}`}>
            {menuLinks}
          </div>
        </div>
      </CSSTransition>
    </nav>
  );
}

export default MainNavigation;