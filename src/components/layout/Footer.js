import classes from './Footer.module.scss';

import MediaBanner from './MediaBanner';

function Footer() {

  return (
    <div className={classes.footer}>
      <div className={classes.footerInfo}>
        <div className={classes.logoBox}>
          <h1>someLogo</h1>
          <p>Tworzę biżuterię z<br/>
          zasłużonych roślin i żywicy.</p>
        </div>
        <div id="contactSection" className={classes.contactBox}>
          <h1>Kontakt</h1>
          <p>pat@listonosze.pl</p>
          <p>02-495 Warszawa</p>
          <div className={classes.circles}>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
          </div>
        </div>
        <div className={classes.menuBox}>
          <h1>Menu</h1>
          <p>Galeria</p>
          <p>O mnie</p>
          <p>Kontakt</p>
        </div>
      </div>
      <div className={classes.credits}>
        <p>Copyright @ 2021</p>
        <p>Znalezione &amp;Zatopione</p>
        <p>Designed by Kamila Michałkiewicz</p>
        <p>Coded by pawelgrabos.pl</p>
      </div>
    </div>
  )
}

export default Footer;