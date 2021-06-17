import classes from './MediaBanner.module.scss';

function MediaBanner () {
  return (
    <div className={classes.mediaBanner}>
      <div className={classes.someLogo1}></div>
      <div className={classes.someLogo2}></div>
      <div className={classes.someLogo2}></div>
      <div className={classes.someLogo1}></div>
    </div>
  );
}

export default MediaBanner;