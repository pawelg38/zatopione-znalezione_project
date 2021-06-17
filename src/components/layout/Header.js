import classes from './Header.module.scss';

function Header() {
  return (
    <div>
      <div className={classes.header}>
        Biżutera Handmade
      </div>
      <div className={classes.description}>
        <p>Wyjątkowa ręcznie wykonana biżuteria z<br/>
        pomocą zasłużonych roślin i żywicy.</p>
      </div>
    </div>
    );
}

export default Header;