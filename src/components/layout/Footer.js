import classes from './Footer.module.scss';

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.mediaBanner}>
        <div className={classes.someLogo1}></div>
        <div className={classes.someLogo2}></div>
        <div className={classes.someLogo2}></div>
        <div className={classes.someLogo1}></div>
      </div>
      <div className={classes.footerInfo}>
        <div className={classes.logoBox}>
          <h1>someLogo</h1>
          <p>Tworzę biżuterię z<br/>
          zasłużonych roślin i żywicy.</p>
        </div>
        <div className={classes.contactBox}>
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
        Copyright @ 2021 Znalezione &amp; Zatopione | Designed by Kamila Michałkiewicz | Coded by pawelgrabos.pl
      </div>
    </div>
  )
}

export default Footer;