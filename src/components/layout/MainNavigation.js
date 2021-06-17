import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import classes from './MainNavigation.module.scss';

function MainNavigation(props) {
  const [isNavOpen, setNavOpen] = useState(false);

  function toggleMenuHandler() {
    console.log(isNavOpen);
    setNavOpen(!isNavOpen);
  }
  function scrollToHandler(e) {
    setNavOpen(false);
    let element;
    if (e.target.id === 'aboutLink') {
      props.scrollToAbout();
    }
    else if(e.target.id === 'contactLink') {
      e.preventDefault();
      element = document.getElementById("contactSection");
      element.scrollIntoView({behavior: "smooth", block: "center"});
    }
  }

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
        <CSSTransition
        in={isNavOpen}
        classNames={{
          enter: classes.horizontalMenuEnter,
          enterDone: classes.horizontalMenuDone,
          exit: classes.horizontalMenuExit,
          exitDone: classes.horizontalMenuExitDone
        }}
        timeout={{ enter: 300, exit: 300 }}>
          <div className={classes.horizontalMenu}>
            <Link to='/gallery' onClick={scrollToHandler}>Galeria</Link>
            <Link id="aboutLink" to='/' onClick={scrollToHandler}>O mnie</Link>
            <Link id="contactLink" to='/' onClick={scrollToHandler}>Kontakt</Link>
          </div>
        </CSSTransition>
      </div>
    </nav>
  );
}

export default MainNavigation;