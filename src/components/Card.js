import classes from './Card.module.scss';

function Card(props) {
  return (
    <div className={classes.card}>
      <img src={props.value.url} alt="Gallery item"/>
    </div>
  );
}

export default Card;