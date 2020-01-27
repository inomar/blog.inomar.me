import LazyLoad from 'react-lazyload';
import { compose, withStateHandlers, pure } from 'recompose';
import { Transition } from 'react-transition-group';

const LazyLoadImage = compose(
  withStateHandlers(
    {
      isLoaded: false,
    },
    {
      onLoad: () => () => ({ isLoaded: true }),
    },
  ),
  pure,
)(({
  children,
  height,
  isLoaded,
  onLoad,
}) => {
  const styles = {
    placeholder: {
      backgroundColor: '#F3F3F3',
      height,
    },
    unLoadOuter: {
      opacity: 0.05,
      backgroundColor: '#000',
      height,
    },
    loadedOuter: {
      opacity: 1,
      transition: 'opacity 1s ease-in', // transitionはご自由に
    },
  };

  const childStyle = isLoaded ? {} : { visibility: 'hidden' };
  return (
    <LazyLoad
      offset={300}
      once
      placeholder={<div style={styles.placeholder} />}
    >
      <Transition in={isLoaded} timeout={1000}>
        {
          () => (
            <div style={isLoaded ? styles.loadedOuter : styles.unLoadOuter}>
              {children(onLoad, childStyle)}
            </div>
          )
        }
      </Transition>
    </LazyLoad>
  );
});

export default LazyLoadImage;