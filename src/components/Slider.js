import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import classes from './Slider.module.scss';

function Slider() {
  const [images] = useState([
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1583167616102-d8d4b7d02c6c?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDV8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1511253819057-5408d4d70465?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDR8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1536502829567-baf877a670b5?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDJ8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ]);
  const [currentImage, setCurrentImage] = useState({
      id: 1,
      url: 'https://images.unsplash.com/photo-1583167616102-d8d4b7d02c6c?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDV8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    });
  const [isSlideChanging, setIsSlideChanging] = useState(false);

  function nextImg(e) {
    if(isSlideChanging === false) {
      if (parseInt(e.target.id[1]) !== currentImage.id) {
        setIsSlideChanging(true);
        console.log(e.target.id[1]);
        console.log(currentImage.id)
        setCurrentImage(images[e.target.id[1]-1]);
      }
    }
  }
  return (
    <div className={classes.sliderContainer}>
      <div className={classes.imgBox}>
        <TransitionGroup>
          <CSSTransition
          key={currentImage.id}
          classNames={{
            enter: classes.exampleEnter,
            enterActive: classes.exampleEnterActive,
            exit: classes.exampleExit,
            exitActive: classes.exampleExitActive,
          }}
          onExited={()=>setIsSlideChanging(false)}
          timeout={{ enter: 1500, exit: 1500 }}>
            <img src={currentImage.url} alt="Slider img"/>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className={classes.buttonsContainer}>
        <button id='s1' onClick={nextImg} className={currentImage.id === 1 ? classes.activeSliderButton : null}></button>
        <button id='s2' onClick={nextImg} className={currentImage.id === 2 ? classes.activeSliderButton : null}></button>
        <button id='s3' onClick={nextImg} className={currentImage.id === 3 ? classes.activeSliderButton : null}></button>
      </div>
    </div>
  )
}

export default Slider;