import classes from './Home.module.scss';

function HomePage() {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        Biżutera Handmade
      </div>
      <div className={classes.description1}>
        <p>Wyjątkowa ręcznie wykonana biżuteria z<br/>
        pomocą zasłużonych roślin i żywicy.</p>
      </div>
      <div className={classes.seeMoreContainer}>
        <div className={classes.seeMoreImages}>
          <div className={classes.seeMoreImg1}></div>
          <div className={classes.seeMoreImg2}></div>
          <div className={classes.seeMoreImg3}></div>
        </div>
        <button className={classes.seeMoreBtn}>Zobacz więcej</button>
      </div>
      <div className={classes.description2}>
        <p>Heeeejka! To moja praca z żywicą epoksydową.
          Wszelkie rośliny w niej zatopione zebrałam, zasłużyłam i ułożyłam sama.
          Jestem perfekcjonistką, a że w żywiczną sztukę bawię się od niedawna
          (innymi słowy dopiero się uczę),póki co przyjęłam taktykę
          "zrobione jest lepsze od doskonałego".
          Zapraszam więc do kupna poprzez Vinted moich niedoskonałych
          ale zrobionych z serduchem żywicznych wisiorków.</p>
      </div>
    </div>
  );
}

export default HomePage;