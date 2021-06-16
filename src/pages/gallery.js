import { useState, useEffect } from 'react';
import classes from './Gallery.module.scss';
import Card from '../components/Card';

function GalleryPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCards, setLoadedCards] = useState([]);

  useEffect( () => {
    setIsLoading(true);
    fetch('https://zatopioneznalezione-site-default-rtdb.firebaseio.com/cards.json')
    .then( response => {
      return response.json();
    }).then( data => {
      const cards = [];

      for (const key in data) {
        const card = {
          id: key,
          ...data[key]
        };
        cards.push(card);
      }
      setIsLoading(false);
      setLoadedCards(cards);
    });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div className={classes.cardsContainer}>
      {loadedCards.map( card => {
        return <Card key={card.id} value={card} />
      })}
    </div>
  )
}

export default GalleryPage;