import { useEffect } from 'react';
import MediaBanner from '../components/layout/MediaBanner';
import Slider from '../components/Slider';
import classes from './Home.module.scss';

function HomePage(props) {
  useEffect(() => {
    if (props.scrollToAbout === true) {
      let element = document.getElementById("aboutSection");
      element.scrollIntoView({behavior: "smooth", block: "center"});
    }
  });

  return (
    <div className={classes.container}>
      <div className={classes.seeMoreContainer}>
        <div className={classes.seeMoreImages}>
          <div/>
          <div/>
          <div/>
        </div>
        <Slider></Slider>
        <button className={classes.seeMoreBtn}>Zobacz więcej</button>
      </div>
      <div id="aboutSection" className={classes.description2}>
        <p>Heeeejka! To moja praca z żywicą epoksydową.
          Wszelkie rośliny w niej zatopione zebrałam, zasłużyłam i ułożyłam sama.
          Jestem perfekcjonistką, a że w żywiczną sztukę bawię się od niedawna
          (innymi słowy dopiero się uczę),póki co przyjęłam taktykę
          "zrobione jest lepsze od doskonałego".
          Zapraszam więc do kupna poprzez Vinted moich niedoskonałych
          ale zrobionych z serduchem żywicznych wisiorków.</p>
      </div>
      <MediaBanner />
    </div>
  );
}

export default HomePage;